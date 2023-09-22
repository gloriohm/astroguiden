export function sorter(collection) {
    const collectionSorted = [...collection].sort((a, b) => {
        if (a.bar < b.bar) {
            return -1;
        }
        else return 1;
    });
    return collectionSorted;
}

export function citySorter(collection, location) {
    const barsFiltered = collection.filter(({ city }) => city === location);
    return barsFiltered;
}