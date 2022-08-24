{
  //generic 사용하는 사람이 어떤타입인지 정할수 있고 타입을 보장받을 수 있다.
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }

  function checkNotNullAny(arg: any | null): any {
    // 이런식으로 사용하면 결과값이 any기 떄문에 타입을 보장받을 수 없다.
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const bad = checkNotNullAny("agag");
  const result = checkNotNull(123);
  console.log(result);

  function checkNotNullGeneric<T>(arg: T | null): T {
    //GENERIC이라 쓰지않고 보통 T라쓴다.
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const god: string = checkNotNull("faf");
  const number = checkNotNullGeneric(1313);
  const string: string = checkNotNullGeneric("adad");
  const boolean = checkNotNullGeneric(true);
  console.log(number, string, boolean);
}
