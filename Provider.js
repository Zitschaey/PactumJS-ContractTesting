const {mock, flow, reporter} = require('pactum');
const pf = require('pactum-flow-plugin');
function addFlowReporter(){
    pf.config.url = 'http://localhost:8080';
    pf.config.projectId = 'team2_book-service';
    pf.config.projectName = '[TEAM2] Book-Service';
    pf.config.version = '1.0.18';
    pf.config.username = 'scanner';
    pf.config.password = 'scanner';
    reporter.add(pf.reporter);
}
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
        status: 200}
});
before(async () => {
    await mock.start(4000);
    addFlowReporter();
});
after(async () => {
    await mock.stop;
    await reporter.end();
});
it('Reveive a Book', async () => {
    await flow('get a book in stock')
        .get('http://0.0.0.0:4000/books/1')
        .expectBody({
            'id': '2',
            'isbn': '1234567'
        })
        .expectStatus(200);
});

