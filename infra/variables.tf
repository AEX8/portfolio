variable "aws_region" {
  description = "Main AWS region for the site"
  type        = string
  default     = "ap-southeast-2"
}

variable "bucket_name" {
  description = "Name of the private S3 bucket that stores the built site"
  type        = string
  default     = "gayath-portfolio-site"
}

variable "github_oidc_subject_prefix" {
  description = "Start of the OIDC sub claim GitHub sends for this repo, in the immutable form repo:OWNER@OWNER_ID/REPO@REPO_ID"
  type        = string
  default     = "repo:AEX8@232728231/portfolio@1454788922"
}

variable "domain_name" {
  description = "Main domain for the site. Its Route 53 hosted zone is created when the domain is registered."
  type        = string
  default     = "gayath.dev"
}