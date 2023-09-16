const {spec} = require('pactum');
const {startMockServer, stopMockServer } = require('./MockServer')

before(async () => {
    await startMockServer();
});
after(async () => {
    await stopMockServer();
});

it('Reveive a Book', async () => {
    await spec()
        .get('http://0.0.0.0:4000/books/1')
        .expectBody({
            'id': '2',
            'isbn': '1234567'
        })
        .expectStatus(200);
});

