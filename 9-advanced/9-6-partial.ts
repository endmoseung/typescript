{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    //기본 것들중에 부분적인것만 바꿀수 있또록 해주고싶으면 partial(부분적인)을 사용한다.
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: Todo = {
    title: "learn typescript ",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  updateTodo(todo, { priority: "low" });
  console.log(todo);
}
