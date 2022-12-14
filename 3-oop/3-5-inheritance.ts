{//상속을 잘 이용하면 공통적인건 그대로 사용하면서 자식클래스에서만 특화된 기능을 추가할 수 있다. super를 통해서 부모클래스를 호출할수도 있다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans:number, public serialNumber:string){//자식에서 constructor를 생성하고 싶을때는 super로 항상 부모를 호출해줘야 한다.
      //public을 붙여준 이유는 이러면 위에 데이터에서 따로 선언 안해줘도돼서
      super(beans);//인자도 꼭 부모에 있는 값을 받아오도록 해야한다.
    }
    //다른클래스를 상속할때는 extends interface를 구현할떄는 implements
    private steamMilk(): void {
      console.log("steaming some milk... 🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모에 있는 함수를 그대로 쓰고싶을때
      this.steamMilk();
      return {
        ...coffee, //부모에 있는 값은 그대로 가져오면서 hasmilk만 true로 바꿔주겠다.
        hasMilk: true,
      };
    }
  }
  const machine = new CoffeeMachine(22);  
  const latteMachine = new CafeLatteMachine(40,"advagqgqg");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}
