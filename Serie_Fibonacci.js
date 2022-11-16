console.log(".:. Serie de Fibonacci .:.");

a = 0;
b = 1;

for (let step = 0; step < 20; step++)
 {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
  console.log(".:. Fin de la Serie .:.");