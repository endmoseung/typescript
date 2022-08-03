{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7; //이런 원시적인 아이들은 타입추론을 통해서 해도 괜찮다.
  let coffeeBeans: number = 100;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots, //key와 value값이 같다면 생략가능
      hasMilk: false,
    };
  }
  const coffee = makeCoffee(2);
  console.log(coffee);
}
