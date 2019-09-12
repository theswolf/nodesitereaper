const http = require('https');
const exporter = require('./soup');
const page = require('./page');

  class PageExporter {
      constructor(baseUrl, pageUrl,proto) {
            this.proto = proto
            this.baseUrl = baseUrl;
            this.pageUrl = pageUrl;
      }

      async export() {

        let options = {
            host: this.baseUrl,
            port: 443,
            path: this.pageUrl,
            extra: this.proto
          };
        
        var body = "";

        let p = new Promise((resolve,reject) => {
            http.get(options, function(res) {
                console.log("Got response: " + res.statusCode);
              
                res.on("data", function(chunk) {
                  body+=chunk;
                });
                res.on('end', async function() {
                  console.log('No more data in response.');
                  let ex = new exporter(body);
                  let bodyex = ex.exportBody();
                  let ret = await ex.exportHtmlForBody(bodyex,options.extra+'://'+options.host);
                 
                  let p = new page(ex.title(),ret,ex.next());

                  resolve(p);
                });
              }).on('error', function(e) {
                console.log("Got error: " + e.message);
                reject(e.message);
              })
        });

        return p;
      }

  }

  module.exports = PageExporter