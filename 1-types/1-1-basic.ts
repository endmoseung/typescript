{
  //number
  const num: number = -2;

  //string
  const str: string = "hihi";
  console.log(str);

  //boolean
  const boal: boolean = true;

  //undefined 값이 정해진지 안정해진지 모르는 상황
  let name: undefined; //💩
  let names: number | undefined; //보편적으로 null보다는 undefined을 씀

  //null 값이 아에 정해지지 않은상황
  let abc: null; //💩
  let abc2: string | null;

  //unknown 어떤 type이 들어올지 모르는것  //💩
  let notSure: unknown = 2;
  notSure = "adaf";

  //any   //💩
  let anything: any = 2;
  anything = "bagga";

  // void 함수에서 어떤값을 리턴하지 않을떄 사용 써도되고 안써도됨
  function print(): void {
    console.log("hello");
    return;
  }

  // never

  const errorHandling = (message: string): never => {
    throw new Error(message);
  };

  let obj: object;
  function adad(input: object) {}

  adad([1, 2, 3]);
  adad({ he: "good" });
  adad(() => console.log("good"));
}
