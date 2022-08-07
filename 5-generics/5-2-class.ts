interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  // generic타입은 길게 쓰지않고 보통 대문자로 앞글자를 축약해서 사용한다.
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);
either.left();
either.right();
