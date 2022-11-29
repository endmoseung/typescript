{
  // intersection types : union이 or개념이었다면 intersection은 and개념이다 다양한 타입을 하나로 묶을수 있다.

  type Student = {
    name: string;
    score: number;
    age: number;
  };

  type Worker = {
    employeeid: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.employeeid, person.score, person.name); //person은 둘다 해당되기 떄문에 모든 정보를 접근할 수 있따.
  }

  internWork({
    name: "moseung",
    score: 100,
    employeeid: 27,
    work: () => {},
    age: 3,
  });
}
