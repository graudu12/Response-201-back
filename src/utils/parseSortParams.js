const parseSortBy = (value) => {
    if (typeof value === "undefined") {
        return "_id";
    };

    const keys = ["_id", "name", "createdAt"];

    if (keys.includes(value) !== true) {
        return "_id";
    }
    return value;
};

const parseSortOrder = (value) => {
    if (typeof value === "undefined") {
        return "asc";
    };

    if (value !== "asc" && value !== "desc") {
        return "asc";
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