export default function add(a, b) {
  // export default한걸 import하면 이함수를 무조건 가져올거라는듯
  return a + b;
}

export function print() {
  //한파일 내에서 두가지이상을 default할수 없다.
  console.log("hi");
}

export const number = 1; // 변수도 export 됟나.
