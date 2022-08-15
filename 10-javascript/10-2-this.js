console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // global에서 함수를 호출한다는것은 window에서 호출하는것과 같다.

console.clear();

class Counter {
  count = 0;
  increase = () => {
    // function으로 하는게 아니라 arrow함수로 만들어주면 bind를 직접 해주지 않아도 된다. 왜냐면 arrow는 선언당시에 스코프를 연결해주기떄문에
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); //여기서 this는 Counter라는 class가 된다.
const caller = counter.increase;
// const caller = counter.increase.bind(counter); //정보를 잃지않도록 직접 bind()해준다 원하는 오브젝트와
caller(); //여기서 undefined로 뜨는데 this의 정보를 잃어버려서 그렇다. let과 const로 선언한 변수는 윈도우에 등록되있지 않으므로 그어떤 object도 아니다. 그래서 undefined로 뜬다.
//기본적으로 함수는 등록해놓으면 window에서 불러올수있는데 const 나 let은 불가능하다. 즉 글로벌객체의 window에서는 못쓴다.

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // 여기서는 Bob이 주체가되는데 bob이 불렀기 때문이다.
