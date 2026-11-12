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