// Runs on every request at the CloudFront edge, before S3 is asked for anything.
// Turns clean URLs into the index.html files that Astro builds.
function handler(event) {
    var request = event.request;
    var uri = request.uri;
  
    if (uri.endsWith('/')) {
      // "/projects/"  becomes  "/projects/index.html"
      request.uri += 'index.html';
    } else if (!uri.split('/').pop().includes('.')) {
      // "/projects"   becomes  "/projects/index.html"
      // (paths with a dot, like /favicon.svg, are real files and are left alone)
      request.uri += '/index.html';
    }
  
    return request;
  }