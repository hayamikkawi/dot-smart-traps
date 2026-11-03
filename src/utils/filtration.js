// Filtration
function filterDevices(devices, filters) {
  let result = [...devices];

  const { trap_activation, min_battery, max_battery } = filters;

  if (trap_activation !== undefined) {
    result = result.filter(
      device => device.trapActivation === (trap_activation === "true")
    );
  }

  if (min_battery !== undefined) {
    result = result.filter(
      device => device.batteryLevel >= Number(min_battery)
    );
  }

  if (max_battery !== undefined) {
    result = result.filter(
      device => device.batteryLevel <= Number(max_battery)
    );
  }

  return result;
}

module.exports = filterDevices