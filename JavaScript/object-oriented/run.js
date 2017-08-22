var zed = new Car(6);
console.log('Zed created');
console.dir(zed);

console.log('-------');

zed.move();
console.log('Zed move');
console.dir(zed);

console.log('-------');

console.log('Constructor zed');
console.log(zed.constructor);

console.log('-------');

var amy = new Van(9);
console.dir(amy);
amy.move();

console.log('Constructor amy');

console.log(amy.constructor);