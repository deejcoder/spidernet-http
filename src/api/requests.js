
import axios from 'axios';

// The public URL to the API service e.g https://spidernet.thecodingkiwi.com:8080/api
const BASE_URL = process.env.API_BASE_URL;

const client = axios.create({
    baseURL: BASE_URL,
    json: true,
});


/**
 * request provides a template for sending requests to the API
 * @param {string} method the HTTP method to use in the request
 * @param {string} resource the endpoint to send the request e.g '/servers'
 * @param {*} payload the body/data to send to the endpoint (should be in JSON)
 * @param {*} header any additional header fields
 * @param {string} token the JWT token used for authorization
 */
async function request({method, resource, payload, header, token}) {
    let response = await client({
        method: method,
        url: resource,
        data: payload,
        headers: token ? { ...header, authorization: `Bearer ${token}`} : header,
    });

    let head = response.data, body = head.body;
    delete head.body;

    return { response: head, body: body }
}

export { request };