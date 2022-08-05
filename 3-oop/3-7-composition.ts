{
  //상속의 문제점 : 타입스크립트에서는 한가지 이상의 부모를 상속할수 없다. 상속이 복잡해진다. 그래서 composition을 사용한다.
  //composition(구성요소들) : composition으로 외부에 기능 class를 만들어서 그걸 끌어다 사용이 가능하다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean; //있을수도있고 없을수도 있다
  };

  interface CoffeeMaker {
    //이런행동이 가능, 계약서같은것
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    //coffeemachine은 coffeemaker의 규격을 따라야된다.
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
    }
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("steaming some milk... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class AutoSugarMixer {
    private getSugar(){
      console.log("getting some sugar from jar...");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public serialNumber: string,private milkFrother: CheapMilkSteamer) {//dependency injection
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모에 있는 함수를 그대로 쓰고싶을때
      return this.milkFrother.makeMilk(coffee)
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans:number, private sugar: AutoSugarMixer) {//dependency injection
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCafeLatteMachine extends CoffeeMachine {
    constructor(private beans:number, private sugar: AutoSugarMixer,private milkFrother : CheapMilkSteamer) {
      super(beans);
    }
    makeCoffee(shots: number):CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(this.sugar.addSugar(coffee));// 커피에 설탕을 먼저넣고 그뒤에 우유를 다시 넣겠다.
    }
  }

  const machines: CoffeeMaker[] = [
    //coffeemachine은 coffeemaker라는 interface를 받아오고 나머지애들은 coffeemachine을 상속하므로 나머지애들도 coffeemaker를 받아온다.
    new CoffeeMachine(16),
    new CafeLatteMachine(16, "agagg"),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
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
