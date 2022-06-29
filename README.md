# Static Content challenge - mid-level

## Usage

### Local

* Clone this repository.
* Run `node main.js`.
* Open `localhost:3333 in your browser`.
* Use `npm run test` to run the tests.

### [Hosted Version](https://stark-lake-32866.herokuapp.com/)

This MVP can be easily hosted on Heroku by following the steps in the [offical documentation.](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

## Tech Choices

This app uses a combination of [express](https://expressjs.com/), [handlebars](https://handlebarsjs.com/) and [handlebars-helpers](https://github.com/helpers/handlebars-helpers) to serve the static content (I'd not used handlebars before and have been wanting to give it a try)

A single catch-all route is used to serve the content from the markdown files, and one other route is used to serve the index page.
If a markdown file corresponding to the URL is not found, the 404 page is shown instead.

The `markdown` helper from the handlebars-helpers repository is used to load a markdown file, convert the content to HTML and add it into the template.

[TailwindCSS](https://tailwindcss.com/) has been used for all styling, since the [typography plugin](https://tailwindcss.com/docs/typography-plugin) can be used to easily add CSS styles to the markdown content.

## Original challenge text

Business Scenario: Acme Co's marketing department want a simple content management system and you've been tasked with building the MVP.

The challenge here is to create a node.js application that displays HTML pages at URLs that match the paths of the folders and sub-folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page. A request to `/blog/june/company-update` would return a HTML page using the content file at `blog/june/company-update/index.md`.

Acme's marketing department should be able to add extra folders to the `content` folder and the application should work with those without any requiring any code changes.

This repository contains a `template.html` template file and a sample `content` folder with sub-folders containing `index.md` markdown files (or other sub-folders).

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.

### Testing

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLs return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code
* NB: the tests should not depend on the existing sub-folders in the `content` folder, so the tests do not break as the content changes

### Bonus credit

In this MVP sprint, there are two nice-to-have tickets:

* The generated HTML page should be styled in a pleasing way
* The MVP's GitHub repository should be configured for hosting on a cloud hosting service, and include a link to a live deployment
