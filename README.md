# Spidernet-HTTP
The frontend to the Spidernet project uses React. Spidernet is a server discovery search engine which also monitors server activity.

## Deploying for Production
There are only a few simple things that you need to do when deploying this web app.
* Build the web app using `yarn build`, this will build a production-ready web app. Copy the contents from the `./build` folder.
* Whenever deploying this React app, assure you set the API_BASE_URL environmental variable, for example;
`export API_BASE_URL https://spidernet.thecodingkiwi.com:8080/api`, this will represent the URI to send API requests to.
* It is highly recommended to deploy the web app using TLS/HTTPS, as well as the API.

## Deploying for Development
To get rocking, all you have to do is...
* Set a new environmental variable; `export API_BASE_URL {url_to_api}`
* Execute `yarn start`

## Roadmap
* `/src/api` communicates with the API
* ...