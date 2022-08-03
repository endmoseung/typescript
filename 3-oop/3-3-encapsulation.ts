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

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(70);
  maker.fillCoffeeBeans(32);
  console.log(maker);
  class User {
    // firstName: string;
    // lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    // constructor(firstName: string, lastName: string) {
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    // }
    constructor(private firstName: string, private lastName: string) {
      //위의 주석처리한것과 같다.
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("wrong age");
      }
      this.internalAge = num;
    }
  }
  const user = new User("seung mo", "Kim");
  user.age = 10; // 이렇게 내부에 internalage를 수정가능하다.
  user.firstName = "moseung"; // 이렇게 설정해줘도 Fullname에는 변화가없다.
  console.log(user.fullName); // 하지만 위처럼 게터를 이용해서 값을 바꿀떄마다 설정이 가능하다.
}
