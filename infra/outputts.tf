output "bucket_name" {
  description = "Name of the S3 bucket holding the site"
  value       = aws_s3_bucket.site.bucket
}