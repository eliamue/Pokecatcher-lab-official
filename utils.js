export function findById(pokeArray, pokeId) {
    const numberId = Number(pokeId);
    for (let item of pokeArray) {
        if (item.id === numberId) return item;
    }

    return null;
}