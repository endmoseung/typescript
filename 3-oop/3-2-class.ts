{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; //class에서 const나 let같은 선언은 하지 않는다. 이값은 변하지않는데 class를 호출할
    //때마다 부르면 메모리낭비이므로 static하게 선언해준다 class level이라 부름 오브젝트마다 만들어지거나 생성되지않는다.
    coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans: number) {
      //constructor안에 있는 인자는 어떤이름이던지 상관없다.
      this.coffeeBeans = coffeeBeans; //this.coffeebeans는  클래스안에 있는 데이터를 말한다.
    } //클래스를 가지고 인스턴스를 만들때 항상 호출되는 함수

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        //BEANS_GRAM_PER_SHOT는 class안에 있는 this의것이 아니고 class자체의 값이기떄문에 this대신 클래스명을 적어준다
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots, //key와 value값이 같다면 생략가능
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(16);
  const maker3 = CoffeeMaker.makeMachine(34);
  console.log(maker, maker2, maker3);
  //class는 관련된 속성과 함수를 묶어서 어떠한 데이터가 될건지 정의하는거고 실제로 데이터를 넣어서 오브젝트를 만들 수 있다. object마다 새롭게 만들어야하는
  //데이터가 있다면 멤버변수 instance level로 만들어주면되고 그렇지않다면 static을 이용할 수 있다.
}
