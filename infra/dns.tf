# The hosted zone Route 53 created automatically when gayath.dev was registered.
# We only read it (data source), so Terraform never creates or deletes it.
data "aws_route53_zone" "site" {
  name         = var.domain_name
  private_zone = false
}

locals {
  # Every hostname the site answers on
  site_hostnames = [var.domain_name, "www.${var.domain_name}"]
}

# Free HTTPS certificate covering gayath.dev and www.gayath.dev.
# Must be in us-east-1 for CloudFront to use it.
resource "aws_acm_certificate" "site" {
  provider                  = aws.us_east_1
  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]
  validation_method         = "DNS"

  # If the certificate ever needs replacing, make the new one before
  # removing the old one, so the site never loses HTTPS
  lifecycle {
    create_before_destroy = true
  }
}

# The CNAME records ACM asks for to prove we own the domain (one per hostname)
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.site.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id         = data.aws_route53_zone.site.zone_id
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.record]
  ttl             = 300
  allow_overwrite = true
}

# Waits until ACM has seen the records and issued the certificate
resource "aws_acm_certificate_validation" "site" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# gayath.dev and www.gayath.dev point at CloudFront over IPv4 (A records)...
resource "aws_route53_record" "site_ipv4" {
  for_each = toset(local.site_hostnames)

  zone_id = data.aws_route53_zone.site.zone_id
  name    = each.value
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# ...and over IPv6 (AAAA records), since the distribution has IPv6 turned on
resource "aws_route53_record" "site_ipv6" {
  for_each = toset(local.site_hostnames)

  zone_id = data.aws_route53_zone.site.zone_id
  name    = each.value
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}