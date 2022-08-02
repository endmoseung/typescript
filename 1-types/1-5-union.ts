{
  //union types:OR 발생하는 모든 케이스중에서 하나의값만 해당할떄 써준다 타스에서 활용도가 매우높다.
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

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
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
}
