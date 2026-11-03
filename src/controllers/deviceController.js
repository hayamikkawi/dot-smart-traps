const mockDevices = require('../mock/devices')
const filterDevices = require('../utils/filtration')
const sortDevices = require('../utils/sorting')
const paginateDevices = require('../utils/pagination')

const allowedSortFields = [
  "temperature",
  "humidity",
  "batteryLevel",
  "lastSeen"
];

const getDevices = async(req, res) => {
    const {
    page = "1",
    limit = "10",
    sort_by,
    order = "asc",
    ...filters
  } = req.query;

  const pageNumber = Number(page);
  const pageSize = Number(limit);

  // Validate pagination
  if (
    !Number.isInteger(pageNumber) ||
    !Number.isInteger(pageSize) ||
    pageNumber < 1 ||
    pageSize < 1 ||
    pageSize > 100
  ) {
    return res.status(400).json({
      error: "Invalid pagination parameters"
    });
  }

  // Validate sorting
  if (sort_by && !allowedSortFields.includes(sort_by)) {
    return res.status(400).json({
      error: "Invalid sort field",
      allowed_fields: allowedSortFields
    });
  }

  if (!["asc", "desc"].includes(order)) {
    return res.status(400).json({
      error: "Invalid sort order"
    });
  }

  const filteredDevices = filterDevices(mockDevices, filters);

  const sortedDevices = sortDevices(
    filteredDevices,
    sort_by,
    order
  );

  const result = paginateDevices(
    sortedDevices,
    pageNumber,
    pageSize
  );

  res.status(200).json(result);
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