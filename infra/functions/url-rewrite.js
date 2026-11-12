// Runs on every request at the CloudFront edge, before S3 is asked for anything.
// This file is a Terraform template: ${apex_domain} is filled in by templatefile().

function handler(event) {
    var request = event.request;
    var host = request.headers.host ? request.headers.host.value : '';
  
    // 1. www.gayath.dev/anything  ->  301 redirect to  gayath.dev/anything
    if (host === 'www.${apex_domain}') {
      var parts = [];
      for (var key in request.querystring) {
        var q = request.querystring[key];
        if (q.multiValue) {
          q.multiValue.forEach(function (m) { parts.push(key + '=' + m.value); });
        } else {
          parts.push(q.value === '' ? key : key + '=' + q.value);
        }
      }
      var query = parts.length ? '?' + parts.join('&') : '';
  
      return {
        statusCode: 301,
        statusDescription: 'Moved Permanently',
        headers: {
          location: { value: 'https://${apex_domain}' + request.uri + query }
        }
      };
    }
  
    // 2. Clean URLs -> the index.html files that Astro builds
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