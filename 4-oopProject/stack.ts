interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly next?: StackNode; //optional 있을수도 있고 없을수도 있다.
  readonly value: string; // 한번 지정된 값은 절대 변하지 않도록 readonly붙임
};

class StackFunction implements Stack {
  private _size: number = 0; //내부에서만 쓰인다는뜻
  private head?: StackNode;
  get size() {
    return this._size;
  }
  push(value: string): void {
    const node: StackNode = {
      //stacknode라는 type안에 값들을 담아주고 현재head가 가르키는것을 push한 node로 바꿔준다.
      value: value,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      //head가 가르키는게 없다 즉 비어있는 상태에서 pop을 하려하면 error를 띄워준다.
      throw new Error("stack is empty, you cant use pop");
    }
    const node = this.head; //헤드가 현재 가르키고 있는 node
    this.head = node.next; //헤드가 카르키고 있는 node의 다음 node를 가르키게끔 한다.
    this._size--;
    return node.value; //마지막에 있는 애는 가르키고있는 node의 다음node의 value를 리턴
  }
}

const stack = new StackFunction();
stack.push("moseung1");
stack.push("moseung2");
stack.push("moseung3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
