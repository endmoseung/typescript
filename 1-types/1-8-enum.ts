{
  //  Enum 여러가지 관련있는 상수값들을 모아놓은것
  // Javascript
  const MAX_NUM = 10;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  type Day = "Monday" | "Tuesday" | "Wednesday";

  //union type을 이용해서 구현이 가능하다
  enum Days { // Enum에서는 글자의 첫문자만 대문자로 하고 나머지는 소문자로
    Monday = 1, // 따로 값을 설정해주지 않으면 첫번쨰는 0부터 시작, 1을 지정해주면 1부터시작
    Tuesday, //1
    Wednesday, //2
    Thusday,
    Friday,
    Saturday,
    Sunday,
  } //네이티브앱으로 개발할때는 union을 표시할 물리적인 방법이 없기떄문에 enum을 써야된다.
  let days: Days = Days.Monday;
  days = Days.Tuesday;
  days = 10; // 타입보장이 힘들다.
  console.log(Days.Monday, Days.Sunday);

  type DayOfWeek = "Monday" | "Tuesday" | "Wednesday"; // 이처럼 Enum대신 Union(Or)타입으로 대체가 가능하기떄문에 Union을 권장한다.
  let dayOfWeek: DayOfWeek = "Monday";
  dayOfWeek = "Monday";
  let day: Day = "Monday";
  day = "aad"; // 엉뚱한 아이가 나올 수 없다. 오류가떠서 왼쪽처럼

  function test1(test: string): void {
    console.log(test);
  }

  function test2(test: string) {
    console.log(test);
  }
}
