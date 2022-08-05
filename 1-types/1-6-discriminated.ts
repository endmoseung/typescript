{
  //discriminated: 차별화된 어떤 유니온이든 공통적인 property를 가짐으로써 조금더 구분하기 쉽게 만든다. 직관적인 코드를 작성가능
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    //로그인함수 옆에 직접적으로 선언하는게 아니라 하나의 state으로 관리하는게 더좋다.
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }
  function printLoginState(state: LoginState) {
    //각각의 state이 result라는 공통된 값을 가지고있으므로 자동으로 완성해준다.
    if (state.result === "success") {
      console.log(`Good ${state.response.body}`);
    } else {
      console.log(`Bad ${state.reason}`);
    }
  }
}
