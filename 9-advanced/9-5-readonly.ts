{
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    //2. 하지만 이런식으로 Readonly를 걸어주면 불변성이 되서 수정이 불가능하다.
    todo.title = "afaf"; //1. 이처럼 불변성을 적용해주지 않으면 안에 내용을 바꿀 수 있다.
  }
}
