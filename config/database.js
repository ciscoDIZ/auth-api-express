const mongoosePaginate = require('mongoose-paginate-v2');

const customLabels = {
    totalDocs: 'total',
    docs: 'list',
    nextPage: 'next',
    prevPage: 'prev',
    hasNextPage: 'hasNext',
    hasPrevPage: 'hasPrev',
    totalPages: 'pages',
    meta: 'pagination',
}

mongoosePaginate.paginate.options = {
    limit: 5,
    page: 1,
    customLabels,
}

module.exports = mongoosePaginate;
