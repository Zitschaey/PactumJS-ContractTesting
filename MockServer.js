const {mock} = require('Pactum');

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

module.exports = {
    startMockServer: async () => {
        await mock.start(4000);
    },
    stopMockServer: async () => {
        await mock.stop();
    }
};
