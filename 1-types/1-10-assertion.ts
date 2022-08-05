{
  /**
   * Type assertions 좋은건 아니다
   */

  function jsStrFunc(): any {
    return "hello"; // 하지만 assertion이 실제로 string이 아니고 number같은 다른 타입을 넣어주게되면 undefined이 나온다.
  }
  const result = jsStrFunc();
  console.log(result!.length);
  console.log((result as string).length); // typescript는 이 함수가 string을 반환하는지 모르기때문에 string과 관련된 api는 사용이 불가능하다.
  console.log((<string>result).length); //위에랑 똑같다.
  //하지만 위처럼 as 로 assertion을 해주면 length와같은 api들을 사용할 수 있다.

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // 이런식으로 하면 파일이 죽어버린다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers?.push();
  numbers!.push(); //무조건 어떤 타입이라고 가정하고 쓸수잇다

  // const button = document.querySelector("class")!; // 정말 장담할수 있을떄 !를 사용해서 선언해줄 수 있다.
  // button?.nodeValue;
}
