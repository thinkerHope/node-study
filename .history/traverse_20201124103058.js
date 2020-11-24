const fs = require('fs')
const http = require('http');
const path = require('path');

const MIME = {
  'css': 'text/css',
  'js': 'application/javascript'
}

// "http://assets.example.com/foo/??bar.js,baz.js" -> bar.js & baz.js [path, mime]
const parseUrl = url => {
  let base
  let pathnames
  let parts

  if (url.indexOf('??') === -1) {
    url = url.replace('/', '/??')
  }
  
  parts = url.split('??')
  base = parts[0]
  pathnames = parts[1].split(',').map(
    val => path.join(root, base, val)
  )
  return {
    mime: MIME[path.extname(pathnames[0])] || 'text/css',
    pathnames
  }
}

const combineFiles = (pathnames, callback) => {
  const output = []
  const len = pathnames.length

  (function next(i) {
    fs.readFile(pathnames[i], (err, data) => {
      if (i < len) {
        if (err) {
          callback(err)
        } else {
          output.push(data)
          next(i + 1)
        }
      } else {
        callback(null, Buffer.concat(output))
      }
    })
  })(0)
}

const main = argv => {
  const { 
    root = '.', 
    port = 80 
  } = JSON.parse(fs.readFileAsync(argv[0], 'utf-8'))
  
  http.createServer((req, res) => {
    const { url } = req;
    const { mime, pathnames } = parseUrl(root, url);

    combineFiles(pathnames, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.end(err.message)
      } else {
        res.writeHead(200, {
          'Content-Type': mime
        })
      }
    })
  }).listen(port)
}



main(process.argv.slice(2))