function getGiftsToRefillOriginal(a1: string[], a2: string[], a3: string[]) {
  const toRefill: string[] = [];
  const gifts = new Set([...a1, ...a2, ...a3]);
  gifts.forEach((gift) => {
    const giftOnStock =
      Number(a1.includes(gift)) +
      Number(a2.includes(gift)) +
      Number(a3.includes(gift));
    if (giftOnStock <= 1) toRefill.push(gift);
  });
  return toRefill;
}

function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const gifts = new Set([...a1, ...a2, ...a3]);
  let countedGifts = [...gifts].map((gift) => ({
    gift,
    count:
      Number(a1.includes(gift)) +
      Number(a2.includes(gift)) +
      Number(a3.includes(gift)),
  }));
  countedGifts = countedGifts.filter((gift) => gift.count === 1);
  return countedGifts.map((gift) => gift.gift);
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']
console.log(gifts);
