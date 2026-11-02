class Device {
    constructor({deviceId, trapActivation, temperature, 
                 humidity, batteryLevel, lastSeen, details}) {
        this.deviceId = deviceId
        if (typeof trapActivation !== "boolean") {
            throw new Error("trap activation must be a boolean")
        }
        this.trapActivation = trapActivation
        if (typeof temperature !== "number") {
            throw new Error("temperature must be a number")
        }
        this.temperature = temperature
        if (!Device.isPercentage(humidity)) {
            throw new Error("humidity must be a percentage")
        }
        this.humidity = humidity
        if(!Device.isPercentage(batteryLevel)) {
            throw new Error("batteryLevel must be a percentage")
        }
        this.batteryLevel = batteryLevel
        this.lastSeen = lastSeen
        this.details = details
    }

    static isPercentage(value) {
        if (typeof value !== "number" ||
            value < 0 || value > 100) {
                return false;
            }
        return true
    }
}

module.exports = Device