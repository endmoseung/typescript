const x = {};
const y = {};
console.log(x); //js에서 object는 Object를 상속한다.
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // 동일한걸 상속해서 true 라고나온다.

const array = [];
console.log(array);
console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // this.makeCoffee = (shots) => {
  //   console.log("making....");
  // };
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
  // prototype안에 들어가잇다.
  console.log("making....");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // 이런식으로 coffeemachine을 상속하도록 해줄수 있다.

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
//prototype이란 상속을 하기위해, 코드를 재사용하기위해 만들어진아이다.
