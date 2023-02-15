const { parameters } = require('../config/config')
const { hri } = require('human-readable-ids');
const { newClient } = require('../services/TunnelsService')

exports.getStartTunnel = async (req, res, next) => {
    console.log('rotaInicial')
    if (req.query['new'] !== undefined) {
        const reqId = hri.random();
        console.log('making new client with id ', reqId);
        const info = await newClient(reqId);

        info.url = 'http://' + info.id + '.' + req.hostname+ ':' + parameters.port;
        res.json(info);
    } else {
        res.json({ msg: parameters.landingPage })
    }
    next
}