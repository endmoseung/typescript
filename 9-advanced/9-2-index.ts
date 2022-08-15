{
  const obj = {
    name: "ellie",
  };
  obj.name;
  obj["name"]; //객체.~~~로도 가능하지만 왼쪽처럼도 가능하다.
  obj["name"] = "kkk";

  console.log(obj);

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; //string type이 된다.
  const text: Name = "adaf"; //이와같이 string만 선언이 가능하게 된다.

  type Gender = Animal["gender"];

  type Keys = keyof Animal; // keyof를 통해서 모든 animal들의 타입들을 다 받는다.
  const agag: Keys = "age"; // 이건 name|age|gender와 같아서 이런 값들만 들어갈 수 있다.

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "adaf",
    gender: "male",
  };
}
