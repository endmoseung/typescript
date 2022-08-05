{
  //다형성 한가지 interface나 동일한 부모를 상속했을떄 동일한 함수를 클래스구분없이 공통된 api를 호출할수 있다.
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; //있을수도있고 없을수도 있다
  };

  interface CoffeeMaker {
    //이런행동이 가능, 계약서같은것
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    //이자체로는 object를 만들 수 없다.
    //coffeemachine은 coffeemaker의 규격을 따라야된다.
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
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

    protected abstract extract(shots: number): CoffeeCup; //자식의 행동이 바뀔수있느 함수에 대해서 abstract 선언해준다. 바뀔수 있는 요소는 작성1도안한다.
    makeCoffee(shots: number): CoffeeCup {
      this.grindBean(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public serialNumber: string) {
      //자식에서 constructor를 생성하고 싶을때는 super로 항상 부모를 호출해줘야 한다.
      //public을 붙여준 이유는 이러면 위에 데이터에서 따로 선언 안해줘도돼서
      super(beans); //인자도 꼭 부모에 있는 값을 받아오도록 해야한다.
    }
    //다른클래스를 상속할때는 extends interface를 구현할떄는 implements
    private steamMilk(): void {
      console.log("steaming some milk... 🥛");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    //coffeemachine은 coffeemaker라는 interface를 받아오고 나머지애들은 coffeemachine을 상속하므로 나머지애들도 coffeemaker를 받아온다.
    new CafeLatteMachine(16, "agagg"),
    new SweetCoffeeMaker(16),
    new CafeLatteMachine(16, "agagg"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("--------------------");
    machine.makeCoffee(1);
  });

  const sugarMachine = new SweetCoffeeMaker(40);
  const coffee = sugarMachine.makeCoffee(1);
  console.log(coffee);
}
