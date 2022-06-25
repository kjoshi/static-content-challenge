const request = require("supertest");
const app = require("./app");
const utils = require("./utils");

const contentFilenames = utils.contentFilenames();
const url = utils.filenameToUrl(contentFilenames[0]);
const html = utils.htmlToPage(utils.filenameToMarkdown(contentFilenames[0]));

test(`Valid URL gives status 200: ${url}`, async () => {
  const res = await request(app).get(url);
  expect(res.status).toEqual(200);
});

test("Invald URL gives status 404", async () => {
  const res = await request(app).get("/invalid-url");
  expect(res.status).toEqual(404);
});

test("Valid URL returns valid HTML", async () => {
  const res = await request(app).get(url);
  expect(res.text).toEqual(html);
});
