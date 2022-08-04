{
  // encapsulation 외부에서 설정할수 있는건 뭔지, 내부적으로만 볼수있는건 뭔지등을 캡슐화해서 설정하는것
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public 아무런 값을 설정하지 않으면 default로 public이 된다. 외부에서 볼 수 있다.
  // private 외부에서 접근치 않도록한다.
  // protected 외부에서 접근이 불가능하지만 상속받는 자녀들에게서는 가능하다.

  interface CoffeeMaker {
    //이런행동이 가능, 계약서같은것
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    //이런행동이 가능, 계약서같은것
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    //coffeemachine은 coffeemaker의 규격을 따라야된다.
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      //유효성을 확인해 좀더 안정적이게 코딩할 수 있다.
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine");
    }

    private grindBean(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preHeat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBean(shots);
      this.preHeat();
      return this.extract(shots);
      // if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
      //   throw new Error("not enough coffee beans!");
      // }
      // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      // return {
      //   shots,
      //   hasMilk: false,
      // };
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(70);
  maker.fillCoffeeBeans(32);
  console.log(maker);
  //추상화는 private으로 정보를 은닉함으로써도 가능하다. 위의 grindbean,preheat,extract함수앞에 private붙이기
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(70);
  maker2.fillCoffeeBeans(32); //이건 규격에 없기 때문에 불가능
  maker2.makeCoffee(2);
  console.log(maker);
  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(40);
  maker3.fillCoffeeBeans(32); //이건 규격에 없기 때문에 불가능
  maker3.makeCoffee(2);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(100);
      this.machine.clean();
    }
  }
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee(2);
}
