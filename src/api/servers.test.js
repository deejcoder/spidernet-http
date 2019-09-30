import { ServerService } from '.';
jest.mock('../')

test('searches servers', () => {
    return ServerService.searchServers("ubuntu", 0, 10).then(resp => {
        console.log(resp);
        expect(resp.length == 10);
    })
});