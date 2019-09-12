const PageExporter = require('./pageExporter')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const rimraf = require("rimraf");




//let exporter = new PageExporter('www.tutorialspoint.com','/kubernetes/kubernetes_replica_sets.htm','https')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('kubernetesTutorial.json')
const db = low(adapter)





var nextPage = '/kubernetes/index.htm';

var counter = 0;

function exportPage(url) {
  let exporter = new PageExporter('www.tutorialspoint.com',url,'https')
  exporter.export().then((result) => {
    !counter && db.defaults({ pages: []})
    .write();
    counter+=1;
    result.id = counter;
    console.log(result);
    db.get('pages')
    .push(JSON.stringify(result))
    .write()

    result.hasNext && exportPage(result.next);
  });
 
};

//exportPage(nextPage);

function writeFile(page) {
  var fs = require('fs');

  if (!fs.existsSync("./tutorial/")){
    fs.mkdirSync("./tutorial/");
}

  var stream = fs.createWriteStream("./tutorial/"+page.id+" "+page.pageTitle.replace(" - Tutorialspoint","")+".html");
  stream.once('open', function(fd) {
  stream.write("<body>"+'\n');
  page.contents.map((cont) => {
    stream.write(cont+'\n');
  });
  stream.write("</body>");
  stream.end();
})
}

function writeMD(page) {
  var fs = require('fs');

  if (!fs.existsSync("./tutorialMD/")){
    fs.mkdirSync("./tutorialMD/");
}

  var pId = (""+page.id).length === 1 && '0'+page.id || page.id;

  var stream = fs.createWriteStream("./tutorialMD/"+pId+" "+page.pageTitle.replace(" - Tutorialspoint","")+".md");
  var showdown  = require('showdown');
  let converter = new showdown.Converter();

  stream.once('open', function(fd) {
  page.contents.map((cont) => {
    let parser = new JSDOM();
    let md = converter.makeMarkdown(cont,parser.window.document);
    stream.write(md+'\n');
    ~md.indexOf('<data:image/') && stream.write('\n');
  });
  stream.end();
})
}

function exportToHtml() {
  let pages = db.get('pages').orderBy('id').value();
  pages.map((jsonPage) => {
    let page = JSON.parse(jsonPage);
    writeFile(page);
  })
}


function exportToMD() {
  let pages = db.get('pages').orderBy('id').value();
  pages.map((jsonPage) => {
    let page = JSON.parse(jsonPage);
    writeMD(page);
  })
}

rimraf.sync("./tutorial/");
rimraf.sync("./tutorialMD/");

exportToHtml();
exportToMD();






