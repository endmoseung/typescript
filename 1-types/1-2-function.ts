{
  //   //javascript
  // function jsADd(num1,num2){
  //   return num1+num2;
  // }

  // //typescript
  // function tsAdd(num1:number,num2:number):number{
  //   return num1+num2;
  // }

  // //javascript
  // function jsFetch(id){
  //   return new Promise((resolve,reject)=>{
  //     resolve(100)
  //   })
  // }

  // //typescript
  // function tsFetch(id:string):Promise<number>{
  //   return new Promise((resolve,reject)=>{
  //     resolve(100)
  //   })
  // }
  //javascript => typescript

  const a: number = "addad";
  console.log(a);
  //optional parameter ?
  function printName(firstname: string, lastname?: string) {
    // :앞에?을 붙이면 이 함수는 전달받을수도 있고 안받을수도 있다는걸 표현
    console.log(firstname);
    console.log(lastname);
  }
  printName("steve", "jobs");
  printName("seung mo");

  //Default Parameter 값을 전달받는게 없으면 default메시지를 출력한다.
  function printMessage(message: string = "default") {
    console.log(message);
  }
  printMessage("hihi");
  printMessage();

  //Rest Parameter
  function addNumbers(...numbers: number[]): number {
    let total: number = 0;
    for (let x of numbers) {
      total += x;
    }
    return total;
  }
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
