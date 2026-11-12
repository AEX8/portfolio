# Security headers CloudFront adds to every response at the edge; free.
# A Content Security Policy will be added once the real site exists, because it must list the exact scripts, fonts and images the site uses.
resource "aws_cloudfront_response_headers_policy" "security" {
  name    = "portfolio-security-headers"
  comment = "HSTS, nosniff, deny framing, referrer and permissions policies"

  security_headers_config {
    # Browsers only ever use HTTPS for this domain, for 2 years
    strict_transport_security {
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    # Browsers must trust the Content-Type header and never guess file types
    content_type_options {
      override = true
    }

    # No other site may show these pages inside a frame (clickjacking)
    frame_options {
      frame_option = "DENY"
      override     = true
    }

    # Other sites see only https://gayath.dev, never full page URLs
    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }
  }

  custom_headers_config {
    # Switch off browser features the site never needs
    items {
      header   = "Permissions-Policy"
      value    = "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
      override = true
    }
  }
}