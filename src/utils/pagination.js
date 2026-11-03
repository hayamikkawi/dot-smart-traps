// Pagination
function paginateDevices(devices, page, limit) {
  const totalItems = devices.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;

  return {
    data: devices.slice(startIndex, startIndex + limit),
    pagination: {
      current_page: page,
      items_per_page: limit,
      total_items: totalItems,
      total_pages: totalPages
    }
  };
}

module.exports = paginateDevices