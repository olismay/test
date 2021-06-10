let moduleA = new Promise((resolve) => { 
    setTimeout( () => {
      resolve('result')
    }, 2000)
});

moduleA.then( provide => {
 return  modules.define('A', [], (provide) =>  { 
            provide(2) })
         }
);
 
let moduleB = new Promise((resolve) => { 
    setTimeout( () => {
      resolve('success')
    }, 1000)
});
 
moduleB.then( provide => {
 return  modules.define('B', [], (provide) =>  { 
            provide(3) })
         }
);

Promise.all([moduleA, moduleB]).then( (moduleA, moduleB) => {
  return modules.require(['A', 'B'], (A, B) => {
    console.log(A + B);
  })
}
);

console.log(3);//для проверки асинхронности