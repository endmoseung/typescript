interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("Full time pay !!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log("part time pay !!!");
  }
  workPartTime() {}
}

//Employee라는 세부적인 타입을 받아서 정말 추상적인 타입으로 리턴하는 함수는 구리다.
function pay(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function payGeneric<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const seungmo = new FullTimeEmployee();
const moseung = new PartTimeEmployee();
seungmo.workFullTime();
moseung.workPartTime();

const seungmoAtterPay = pay(seungmo);
const moseungAtterPay = pay(moseung);

interface Value {}

const obj = {
  name: "moseung",
  age: 26,
};

const obj2 = {
  nickname: "graymon",
};

function getValue<O, K extends keyof O>(object: O, key: K): O[K] {
  //keyof onject안에 들어있는 key중 하나이다.
  return object[key];
}

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "nickname"));
