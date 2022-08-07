class Animal {}
class Cat extends Animal {
  iscat: boolean = true;
}
class Dog extends Animal {
  isdog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
