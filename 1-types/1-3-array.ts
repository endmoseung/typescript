{
  //Array
  const fruits: string[] = ["apple", "banana"]; //이방법이 readonly가 자주사용되기 떄문에 더 좋다
  const numbers: Array<number> = [1, 2]; //위에나 아래나 똑같다
  function printArray(fruits: readonly string[]) {
    //readonly를 사용할경우 배열내 정보를 수정할 수 없다. 그리고 Array<string>와 같은 형태에서는 사용이 불가능하다.
    fruits.push("grape");

    //Tuple 배열인데 여러 타입이 들어갈 수 있는 배열, 비추 직접 알기 너무어렵다, interface, type alias, class와같은 문법에서만 사용한다
    let student: [string, number];
    student = ["name", 123];
    student[0]; //name
    student[1]; // 123
    const [name, age] = student;
  }
}
