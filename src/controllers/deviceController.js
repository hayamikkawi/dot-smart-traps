const mockDevices = require('../mock/devices')

const getDevices = async(req, res) => {
    const devices = mockDevices.map(({details, ...device}) => device)
    res.status(200).json(devices);
};

const getDeviceById = async(req, res) => {
    const id = Number(req.params.id)
    const device = mockDevices.find(device => device.deviceId == id)
    if(device === undefined) {
        return res.status(404).json({
            message: `Device with id: ${id} not found`
        })
    }
    return res.status(200).json(device)
};

module.exports = {getDevices, getDeviceById};