const combinations = (array: number[]) => {
  return array.reduce(
    (results, value) => {
      results.forEach((prefix) => results.push(prefix.concat(value)));
      return results;
    },
    [[]] as number[][]
  );
};

const getSum = (array: number[]) => {
  return array.reduce((a, b) => a + b, 0);
}

function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  return Math.max(
    ...combinations(giftsCities)
      .filter((result) => result.length <= maxCities)
      .map((result) => getSum(result))
      .filter((sum) => sum <= maxGifts)
  );
}

// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3), 20);
// console.log(getMaxGifts([50], 15, 1), 0);
// console.log(getMaxGifts([50], 100, 1), 50);
// console.log(getMaxGifts([50, 70], 100, 1), 70);
// console.log(getMaxGifts([50, 70, 30], 100, 2), 100);
// console.log(getMaxGifts([50, 70, 30], 100, 3), 100);
console.log(getMaxGifts([50, 70, 30], 100, 4), 100);
