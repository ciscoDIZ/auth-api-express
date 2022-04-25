const getOptions = (opt) => {
    const { query, paginate, populate, select } = opt;
    const { limit, page } = query;
    const  options  = {
        ...paginate.options,
        populate,
        select
    }
    options.page = (page) ? page : options.page;
    options.limit = (limit) ? limit : options.limit;

    return options;
};

module.exports = getOptions;
