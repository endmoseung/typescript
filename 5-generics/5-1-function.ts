{
  // function checkNotNull(arg: number | null): number {
  //   if (arg == null) {
  //     throw new Error("not valid number");
  //   }
  //   return arg;
  // }

  // function checkNotNullAny(arg: any | null): any {
  //   // 이런식으로 사용하면 결과값이 any기 떄문에 타입을 보장받을 수 없다.
  //   if (arg == null) {
  //     throw new Error("not valid number");
  //   }
  //   return arg;
  // }
  // const result = checkNotNull(123);
  // console.log(result);

  function checkNotNullGeneric<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const number = checkNotNullGeneric(1313);
  const string = checkNotNullGeneric("adad");
  const boolean = checkNotNullGeneric(true);
  console.log(number, string, boolean);
}
