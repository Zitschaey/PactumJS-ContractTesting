const {spec, mock} = require('pactum');

mock.addInteraction({
    request: {
        method: 'GET',
        path: '/books/1'
    },

    response: {
        body: {

            "id": '2',
            "isbn": '1234567'
        },
        status: 200

    }
});

before(async () => {
    await mock.start(4000);
});
after(async () => {
    await mock.stop;
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

