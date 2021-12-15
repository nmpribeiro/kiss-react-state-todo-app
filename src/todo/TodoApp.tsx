import { TodoProvider } from "./state/TodoContext";
import { TodoLogic } from "./TodoLogic";

export const TodoApp = () => (
  <TodoProvider>
    <TodoLogic />
  </TodoProvider>
);
