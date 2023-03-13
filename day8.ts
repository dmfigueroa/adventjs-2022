function checkPart(part: string) {
  const partArray = part.split("");
  const combinations = [partArray];
  partArray.forEach((_, index) => {
    combinations.push(partArray.filter((_, i) => i !== index));
  });
  return combinations.some((value) => value.join() === value.reverse().join());
}

console.log("uwu", checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log("miidim", checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log("midu", checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
