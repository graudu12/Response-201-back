const parseSortBy = (value) => {
    if (typeof value === "undefined") {
        return "createdAt";
    };

    const keys = ["_id", "name", "createdAt"];

    if (keys.includes(value) !== true) {
        return "createdAt";
    }
    return value;
};

const parseSortOrder = (value) => {
    if (typeof value === "undefined") {
        return "desc";
    };

    if (value !== "asc" && value !== "desc") {
        return "desc";
    }
    return value;
};

export const parseSortParams = (query) => {
    const { sortBy, sortOrder } = query;

    const parsedSortBy = parseSortBy(sortBy);
    const parsedSortOrder = parseSortOrder(sortOrder);

    return {
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrder,
    };
};
