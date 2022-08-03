{
  // encapsulation 외부에서 설정할수 있는건 뭔지, 내부적으로만 볼수있는건 뭔지등을 캡슐화해서 설정하는것
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public 아무런 값을 설정하지 않으면 default로 public이 된다. 외부에서 볼 수 있다.
  // private 외부에서 접근치 않도록한다.
  // protected 외부에서 접근이 불가능하지만 상속받는 자녀들에게서는 가능하다.

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      //유효성을 확인해 좀더 안정적이게 코딩할 수 있다.
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    grindBean(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBean(shots);
      this.preHeat();
      return this.extract(shots);
      // if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
      //   throw new Error("not enough coffee beans!");
      // }
      // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      // return {
      //   shots,
      //   hasMilk: false,
      // };
    }
  }

  const maker = CoffeeMaker.makeMachine(70);
  maker.fillCoffeeBeans(32);
  console.log(maker);
}
