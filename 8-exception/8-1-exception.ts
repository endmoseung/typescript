//Java : Exception
//JS: Error

//Error(Exception) Handling : try > catch > finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist${fileName}`);
  }
  return "file contents";
}

function closeFile(file: string) {}

const fileName = "not exist!";

try {
  //정말 에러가 발생하는 부분만 try로감싸는게 좋다.
  console.log(readFile(fileName));
} catch (error) {
  console.log("catched!!"); // 파일이 죽지않는다 error가 발생하더라도
} finally {
  closeFile(fileName);
  console.log("finally!!"); // finally는 시스템이 문제가있어서 error를 catch할떄도 뜨고 성공적으로 이뤄졌을떄도 뜬다.
}

console.log("!!!");
closeFile(fileName);
