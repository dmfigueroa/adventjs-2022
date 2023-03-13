function getMaxGifts(
    giftsCities: number[],
    maxGifts: number,
    maxCities: number
) {
    // Hallar las permutaciones
    const results: number[][] = [[]];
    for (const value of giftsCities) {
        const copy = [...results]; // See note below.
        for (const prefix of copy) {
            results.push(prefix.concat(value));
        }
    }
    const sums = results
        .filter((result) => result.length <= maxCities)
        .map((result) => {
            return result.reduce((sum, gifts) => sum + gifts, 0);
        })
        .filter((sum) => sum <= maxGifts);
    return Math.max(...sums);
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3), 20);
console.log(getMaxGifts([50], 15, 1), 0);
console.log(getMaxGifts([50], 100, 1), 50);
console.log(getMaxGifts([50, 70], 100, 1), 70);
console.log(getMaxGifts([50, 70, 30], 100, 2), 100);
console.log(getMaxGifts([50, 70, 30], 100, 3), 100);
console.log(getMaxGifts([50, 70, 30], 100, 4), 100);
