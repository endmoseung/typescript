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
  }
  let days: Days = Days.Monday;
  days = Days.Tuesday;
  days = 10; // 정확한 타입추론이 어렵다
  console.log(Days.Monday, Days.Sunday);

  let day: Day = "Monday";
  day = "aad"; // 엉뚱한 아이가 나올 수 없다. 오류가떠서 왼쪽처럼

  function test1(test: string): void {
    console.log(test);
  }

  function test2(test: string) {
    console.log(test);
  }
}
