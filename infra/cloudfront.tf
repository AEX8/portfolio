# Rewrites clean URLs (/projects, /projects/) to /projects/index.html
resource "aws_cloudfront_function" "url_rewrite" {
  name    = "portfolio-url-rewrite"
  runtime = "cloudfront-js-2.0"
  comment = "Rewrite clean URLs to index.html for Astro routes"
  publish = true
  code    = file("${path.module}/functions/url-rewrite.js")
}

# Lets CloudFront sign its requests to the private S3 bucket
resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "portfolio-site-oac"
  description                       = "CloudFront access to the private site bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}