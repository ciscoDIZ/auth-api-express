const getOptions = (req, paginate) => {
    const { limit, page } = req.query;
    const { options } = paginate;

    options.page = (page) ? page : options.page;
    options.limit = (limit) ? limit : options.limit;

    return options;
};

module.exports = getOptions;
