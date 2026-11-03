// Sorting
function sortDevices(devices, sortBy, order = "asc") {
  if (!sortBy) return devices;

  return [...devices].sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    let comparison;

    if (typeof valueA === "number") {
      comparison = valueA - valueB;
    } else {
      comparison = String(valueA).localeCompare(String(valueB));
    }

    return order === "desc" ? -comparison : comparison;
  });
}

module.exports = sortDevices