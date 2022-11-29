{
  /**
   * type Inference 타입추론
   */

  let text = "hello";
  text = "hi~";
  text = 1; //알아서 타입추론해서 string은 넣을 수 있지만 number같은 뜬근없는 타입은 넣을 수 없다.
  text = [1, 2, 3];

  function print(message = "hello") {
    // type을 설정안해주면 어떤값이든 받을수 있는 any가 된다. 왼쪽처럼 default메시지를 string으로 해주면 타입추론한다.
    // 디폴트 파라미터를 쓰면 해당인자로 아무값을 넣지 안아도 자동으로 디폴트 메시지를 출력한다.
    console.log(message);
  }
  print(1); // string이라서 안됨
  print("adad");

  function add(x: number, y: number) {
    // 함수뒤에 :number를 붙여주지 않아도 넘버끼리의 합이므로 number일것이라 추론해준다.
    return x + y;
  }
  const result = add(1, 2); // result의 type을 적어두지 않아도 add라는 함수는 number가 나오기 떄문에 자동으로 number로 추론됨
  let compare = add(1, 3);
  compare = "ad"; //compare는 자동적으로 number로 추론되기때문에 다른 타입은 추론이 불가능하다.
  // 결론 타입추론은 프로젝트가 커질수록 필수이므로 위에 hello처럼 원시적이지 않은이상 왠만하면 타입들을 다 붙여주자
}
