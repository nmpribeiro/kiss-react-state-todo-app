import { useEffect, useState } from "react";
import { Title } from "./components/Title";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodoState } from "./state/TodoContext";

export const TodoLogic: React.FC = () => {
  const {
    state: { todos },
    addTodo,
    remove,
    // test,
  } = useTodoState();

  const [counter, setCounter] = useState(0);

  // Add todo handler
  const addTodoLogic = (val: string) => {
    const newCount = counter + 1;
    setCounter(newCount);
    addTodo({ id: newCount, text: val });
  };

  // Handle remove
  const handleRemove = (id: number) => remove(id);

  useEffect(() => {
    console.log("todos have changed: ", todos);
  }, [todos]);

  // Render JSX
  return (
    <>
      <Title />
      <TodoForm addTodo={addTodoLogic} />
      <TodoList todos={todos} remove={handleRemove} />
    </>
  );
};
