const DeviceDetails = require('../models/deviceDetails')
const Device = require('../models/device')

const device1Details = new DeviceDetails({
    buildingAddress:'EH123',
    roomNumber: 13,
    environment: 'Env1'});
const device2Details = new DeviceDetails({
    buildingAddress:'EH456',
    roomNumber: 1,
    environment: 'Env2'});
const device3Details = new DeviceDetails({
    buildingAddress:'EH789',
    roomNumber: 15,
    environment: 'Env3'});
const device4Details = new DeviceDetails({
    buildingAddress:'EH987',
    roomNumber: 130,
    environment: 'Env4'});   

const device1 = new Device({
    deviceId: 1,
    trapActivation: false,
    temperature: 19, 
    humidity: 24, 
    batteryLevel: 65, 
    lastSeen: Date.now(), 
    details: device1Details

})
const device2 = new Device({
    deviceId: 2,
    trapActivation: true, 
    temperature: 35, 
    humidity: 15, 
    batteryLevel: 98, 
    lastSeen: Date.now(), 
    deviceDetails: device2Details
})
const device3 = new Device({
    deviceId: 3,
    trapActivation: false, 
    temperature: 40, 
    humidity: 77, 
    batteryLevel: 20, 
    lastSeen: Date.now(), 
    deviceDetails: device3Details
})
const device4 = new Device({
    deviceId: 4,
    trapActivation: true, 
    temperature: 2, 
    humidity: 6, 
    batteryLevel: 78, 
    lastSeen: Date.now(), 
    deviceDetails: device4Details
})

const mockDevices = [device1, device2, device3, device4]
module.exports = mockDevices