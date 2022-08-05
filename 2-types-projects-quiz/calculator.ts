/**
 * Let's make a calculator 🧮
 */

type Tool = "add" | "subtract" | "multiply" | "divide" | "remainder"; // 가독성을 위해서 함수내 인자에 너무 길다면 따로 type을 선언해준다.
const calculate = (tool: Tool, a: number, b: number): number => {
  if (tool === "add") {
    return a + b;
  } else if (tool === "subtract") {
    return a - b;
  } else if (tool === "multiply") {
    return a * b;
  } else if (tool === "divide") {
    return a / b;
  } else {
    return a % b;
  }
};
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
