{
  // type aliases 내가 원하는 타입을 지정 할 수 있다.

  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = { name: "seungmo", age: 26 };

  //String Literal Types 이런식으로 할당하면 해당하는 타입은 적어놓은 문자열만 선언가능하다.

  type Name = "name";
  let moseungName: Name;
  moseungName = "name";
  type Json = "json";
  const json: Json = "json";
  type One = 1;
  const one: One = 1;
}
