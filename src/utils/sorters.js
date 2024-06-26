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
    if (barsFiltered.length != 0) {
        return barsFiltered;
    } else { return collection }
}

export function waitsSorter(collection, selection) {
    const barsFiltered = collection.filter(({ bar }) => bar == selection);
    if (barsFiltered.length != 0) {
        return barsFiltered;
    } else { return collection }
}