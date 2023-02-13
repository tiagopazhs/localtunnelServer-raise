const { manager } = require('../config/config')

exports.getControlPanel = async (req, res) => {
    res.json("Choose your router: /tunnels => General tunnels status. /tunnel/:tunnelId => Status of your specific tunnel.");
}

exports.getAllTunnels = async (req, res) => {
    let status = manager.status
    if (status.tunnels === 0) status = "There aren't open tunnels."
    res.json(status)
}

exports.getTunnelStatus = async (req, res) => {
    let id = req.params.id
    let status = `The tunnel ${id} is NOT open!`
    if (id in manager.status.ids) status = `The tunnel ${id} is OPEN!`
    res.json(status)
}