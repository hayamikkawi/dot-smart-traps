const mockDevices = require('../mock/devices')

const getDevices = async(req, res) => {
    res.status(200).json(mockDevices);
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