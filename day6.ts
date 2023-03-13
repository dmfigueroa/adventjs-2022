// Por cara va a tener size^2 cuadrados por lado

// #  /\_\_\_\# i = 0 size = 3.
// ( )=size-i-1
// (/\)=i+1

function createCube(size: number): string {
  let result = "";
  let end = "";
  for (let i = 0; i < size; i++) {
    result +=
      " ".repeat(size - i - 1) +
      "/\\".repeat(i + 1) +
      "_\\".repeat(size) +
      "\n";
    end =
      " ".repeat(size - i - 1) + "\\/".repeat(i + 1) + "_/".repeat(size) + '\n' + end;
  }
  return (result + end).trimEnd();
}

console.log(createCube(1));
console.log(createCube(2));
console.log(createCube(3));
console.log(createCube(4));
console.log(createCube(10));
