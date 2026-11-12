terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  # State lives in S3 (bucket created by infra/bootstrap), not on this laptop.
  # use_lockfile writes a .tflock file next to the state while a run is in
  # progress, so two runs can never change it at the same time.
  backend "s3" {
    bucket       = "gayath-portfolio-tfstate"
    key          = "portfolio/terraform.tfstate"
    region       = "ap-southeast-2"
    encrypt      = true
    use_lockfile = true
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