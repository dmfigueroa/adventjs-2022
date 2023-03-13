function countTime1(leds: Array<0 | 1>) {
  const distances = leds.map((led, i) => {
    const minDistance = Math.min(
      ...leds
        .map((l, j) => l * Math.abs((leds.length - (j - i)) % leds.length))
        .filter((distance) => distance)
    );
    return Number(!led) * minDistance || 0;
  });
  return Math.max(...distances) * 7;
}

function countTime(leds: Array<0 | 1>) {
  let counter = 0;
  while (!leds.every((led) => led)) {
    leds = leds.map((led, index) => led || leds.at(index - 1) as 0 | 1);
    counter++;
  }
  return counter * 7;
}

console.log(countTime([0, 1, 1, 0, 1]), 7);
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1]), 21);
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0]), 28);
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 28s: [1, 1, 1, 1, 1]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
