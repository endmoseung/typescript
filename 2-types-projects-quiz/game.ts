/**
 * Let's make a game 🕹
 */
type Action = "up" | "down" | "left" | "right";

let position = { x: 0, y: 0 };
const move = (action: Action): number => {
  let x: number = 0;
  let y: number = 0;
  switch (action) {
    case "up":
      return position.y++;
      break;
    case "down":
      return position.y--;
      break;
    case "left":
      return position.x--;
      break;
    case "right":
      return position.x++;
      break;
    default:
      throw Error("unknown action");
  }
};

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
