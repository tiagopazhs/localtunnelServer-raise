const { parameters } = require('../config/config')
const axios = require('axios');

async function catalogLog(id, status) {
    try {
        const data = { tunnelId: id, status: status };
        const response = await axios.get(`http://${parameters.host}/catalog/${id}`);

        if (response.data) {
            await axios.put(`http://${parameters.host}/catalog/${id}`, data);
        } else {
            await axios.post(`http://${parameters.host}/catalog`, data);
        }

        console.log(`Catalog change: ${status} id: ${id}`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = catalogLog