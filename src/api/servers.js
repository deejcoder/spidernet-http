import { request } from './requests';

/**
 * Sends a search query to the API server
 * @param {string} term the search term
 * @param {number} start start is the offset
 * @param {number} size how many results to fetch from start
 */
async function searchServers(term, start, size) {
    // build the request URI
    let uri = encodeURI(`/servers?term=${term}&start=${start}&size=${size}`)
    let { response, body } = await request({
        method: 'get',
        resource: uri
    });

    if(!response.ok) {
        return null;
    }
    return body.data;
}

export { searchServers };