# Runs on every request: redirects www to the main domain, then rewrites
# clean URLs (/projects, /projects/) to /projects/index.html.
# templatefile() fills in ${apex_domain} from var.domain_name.
resource "aws_cloudfront_function" "url_rewrite" {
  name    = "portfolio-url-rewrite"
  runtime = "cloudfront-js-2.0"
  comment = "Redirect www to apex and rewrite clean URLs for Astro routes"
  publish = true
  code = templatefile("${path.module}/functions/url-rewrite.js", {
    apex_domain = var.domain_name
  })
}

# Lets CloudFront sign its requests to the private S3 bucket
resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "portfolio-site-oac"
  description                       = "CloudFront access to the private site bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# AWS's ready made caching rules for static sites (long cache, gzip and brotli compression)
data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  comment             = "Portfolio site"
  default_root_object = "index.html"
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  price_class         = "PriceClass_All"

  # The custom hostnames this distribution answers on
  aliases = local.site_hostnames

  # Where CloudFront fetches files from: the private S3 bucket, signed with OAC
  origin {
    origin_id                = "s3-site"
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-site"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    cache_policy_id        = data.aws_cloudfront_cache_policy.caching_optimized.id

    # Add the security headers (security-headers.tf) to every response
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id

    # Run the redirect and URL rewrite on every request before it reaches S3
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewrite.arn
    }
  }

  # S3 says 403 (not 404) for missing files when CloudFront can't list the bucket.
  # Show our 404 page with a proper 404 status instead.
  custom_error_response {
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 60
  }

  custom_error_response {
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 60
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Our own ACM certificate for gayath.dev and www.gayath.dev.
  # sni-only is free. Never switch to "vip" (dedicated IP): it costs a lot.
  # ------------------------- IMPORTANT -----------------.
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.site.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}