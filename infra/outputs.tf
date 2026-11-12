output "bucket_name" {
  description = "Name of the S3 bucket holding the site"
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_domain_name" {
  description = "CloudFront's own address for the site (still works alongside the custom domain)"
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "cloudfront_distribution_id" {
  description = "Distribution ID, used for cache invalidations"
  value       = aws_cloudfront_distribution.site.id
}

output "github_deploy_role_arn" {
  description = "Role ARN for the AWS_ROLE_ARN GitHub secret"
  value       = aws_iam_role.github_deploy.arn
}

output "site_url" {
  description = "Public address of the site on the custom domain"
  value       = "https://${var.domain_name}"
}