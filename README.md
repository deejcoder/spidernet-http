# Spidernet-HTTP
The frontend to the Spidernet project uses React. Spidernet is a server discovery search engine which also monitors server activity.

## Deploying for Development
To get rocking, all you have to do is...
* Rename .env.development.example to .env.development
* Update .env.development to the true URI to the API, or you can set it to `spidernet.thecodingkiwi.com:8081/api`
* Execute `yarn start`

## Testing
To test your code, assure your test file is in the form of `{filename}.test.js` and then execute
```bash
export REACT_APP_API_BASE_URL={url_to_api}
yarn test
```

## Roadmap
* `/src/api` communicates with the API
* ...

## API endpoints
* `POST /token` used to authorize a client
* `GET /token/validate` used to check if a client is authorized
* `GET /servers/?start={start}` returns 20 servers, use `{start}` for pagination
* `GET /servers/search?term={term}&start={start}&size={size}` to search servers; `{term}` is the search term, `{start}` is the offset, `{size}` is the amount to return
* `PUT /servers/create` creates a new server, example data:
```json
{
    "addr": 192.168.1.1,
    "nick": "gateway",
    "tags": [
        "router",
        "modem"
    ]
}
```
* `DELETE /servers/delete?id={id}` deletes a server with the provided ID
* `POST /servers/update` updates a server, use same format as creating a server
