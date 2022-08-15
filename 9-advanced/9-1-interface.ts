{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  interface PositionInterface {
    // 이런식으로 덧데기가 가능하고 아래도 업뎃해줘야된다.
    z: number; //이건 오직 interface만 가능하고 ,
  }
  //object
  const object1: PositionType = {
    x: 1,
    y: 1,
  };

  const object2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  //class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends : 둘다 상속이 가능하다
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  //type aliases can use computed properties 이런점은 인터페이스에선 사용이 불가능하다.
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // 이렇게하면 Person의 name의 타입인 string 이된다.

  type Numbertype = number;
  type Direction = "right" | "left"; // 와같은 유니온타입으로 or도 가능하다
}
