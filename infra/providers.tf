terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

# Main provider: everything lives in Sydney by default
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project   = "portfolio"
      ManagedBy = "terraform"
    }
  }
}

# Second provider for us-east-1. CloudFront only accepts ACM certificates
# from this region, so the certificate (and only the certificate) is made here.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project   = "portfolio"
      ManagedBy = "terraform"
    }
  }
}