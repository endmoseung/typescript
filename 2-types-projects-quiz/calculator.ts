/**
 * Let's make a calculator ð§®
 */

type Tool = "add" | "subtract" | "multiply" | "divide" | "remainder"; // ê°ëì±ì ìí´ì í¨ìë´ ì¸ìì ëë¬´ ê¸¸ë¤ë©´ ë°ë¡ typeì ì ì¸í´ì¤ë¤.

const addValues = (a: number, b: number): number => {
  return a + b;
};

const divideValues = (a: number, b: number): number => {
  return a / b;
};

const multiplyValues = (a: number, b: number): number => {
  return a * b;
};

const subtractValues = (a: number, b: number): number => {
  return a - b;
};

const remainderValues = (a: number, b: number): number => {
  return a % b;
};

const calculate = (tool: Tool, a: number, b: number): number => {
  switch (tool) {
    case "add":
      return addValues(a, b);
    case "divide":
      return divideValues(a, b);
    case "subtract":
      return subtractValues(a, b);
    case "multiply":
      return multiplyValues(a, b);
    case "remainder":
      return remainderValues(a, b);
    default:
      throw new Error("unknown Action");
  }
};
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
