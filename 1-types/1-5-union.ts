{
  //union types:OR 발생하는 모든 케이스중에서 하나의값만 해당할떄 써준다 타스에서 활용도가 매우높다.
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type testing = string | number | boolean;
  const testings = "ab" || true || 123;

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(state: object): LoginState {
    //로그인함수 옆에 직접적으로 선언하는게 아니라 하나의 state으로 관리하는게 더좋다.
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginsState(loginState: LoginState) {
    //api받아올떄 이런식으로 사용하면 좋을듯
    if ("response" in loginState) {
      console.log("성공이용");
    }
    if ("reason" in loginState) {
      console.log("실팬데용");
    }
  }
}
