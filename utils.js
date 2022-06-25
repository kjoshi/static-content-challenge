const { fdir } = require("fdir");
const path = require("path");
const { readFileSync } = require("fs");

const { Remarkable } = require("remarkable");
const { linkify } = require("remarkable/linkify");
var md = new Remarkable({ html: true, breaks: true }).use(linkify);

function contentFilenames() {
  const crawler = new fdir().withBasePath();
  const files = crawler.crawl("./content").sync(); // Recursively get all files in ./content

  return files;
}

function filenameToUrl(f) {
  return path.dirname(f).replace("./content", "");
}

function filenameToMarkdown(f) {
  const text = readFileSync(f, { encoding: "utf-8" });
  return md.render(text);
}

function htmlToPage(
  htmlString,
  {
    templatePath = "./views/layouts/template.handlebars",
    contentPath = "./views/content.handlebars",
  } = {}
) {
  const mainTemplate = readFileSync(templatePath, { encoding: "utf-8" });
  const contentTemplate = readFileSync(contentPath, { encoding: "utf-8" });

  return mainTemplate.replace(
    "{{{body}}}",
    contentTemplate.replace("{{{ md filename }}}", htmlString)
  );
}

module.exports = {
  filenameToMarkdown,
  filenameToUrl,
  contentFilenames,
  htmlToPage,
};

if (require.main === module) {
  console.log(htmlToPage(filenameToMarkdown("./content/about-page/index.md")));
}
