type Check<T> = T extends string ? boolean : number; // T로 받는 type이 string이면 boolean으로 아니면 number로
type Type = Check<string>;

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type Hi = TypeName<string>;
type Hi2 = TypeName<"afaf">; // "afaf"또한 string이기 떄문에 아래에서 Hi2도 "string"만 가능하다.
type Hi3 = TypeName<() => void>; // 아무것도 리턴하지않으면 함수가 된다.

const hiMachine: Hi = "string";
const hiMachine2: Hi2 = "string";
const hiMachine3: Hi3 = "function";
