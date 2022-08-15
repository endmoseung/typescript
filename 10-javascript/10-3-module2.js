import add, { print as printCustom } from "./10-3-module1.js"; //default로 받아오면 add대신 다른이름으로 커마할수있다. default는 괄호없이 사용가능한데 default가아닌것들은 무조건 중괄호안에 넣어야됨
//print라는 default가아닌것을 정말 이름바꿔주고싶으면 print as ~~로 가능하다
console.log(add(1, 2)); // module화를 하지않으면 이렇게 불러올수 있고 window에 global로 되있다.

printCustom();

// import * as calculator from"./10-3-module1.js"; 왼쪽처럼 모두 default가아니면 이런식으로 가능하다.
// console.log(calculator.add(1,2));
// calculator.print();
