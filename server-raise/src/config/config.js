const parameters = {
    port: 3007,
    address: '0.0.0.0',
    secure: false,
    host: 'localhost:3007',
    registeredRoutes: ['/catalog', '/audit', '/landing', '/tunnel'],
    domain: undefined,
    landingPage: 'Localtunnel server is running!!! Use a Client Application to send a requisition with query[new] and create a new tunnel.',
    maxsockets: 10,
    marker: '==================>',
    errorMarker: 'XXXXX ERROR XXXXX',
    logMarker: '###'
};

module.exports = { parameters };