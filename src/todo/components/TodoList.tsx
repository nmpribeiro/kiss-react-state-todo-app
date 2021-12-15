import { FC } from "react";
import { TodoType } from "../state/TodoContext";

type RemoveType = (id: number) => void;

interface TodoProps {
  todo: TodoType;
  remove: RemoveType;
}

const Todo: FC<TodoProps> = ({ todo, remove }) => (
  <li onClick={() => remove(todo.id)}>{todo.text}</li>
);

interface TodoListProps {
  todos: TodoType[];
  remove: RemoveType;
}

export const TodoList: FC<TodoListProps> = ({ todos, remove }) => (
  <ul>
    {todos.map((todo) => (
      <Todo todo={todo} key={todo.id} remove={remove} />
    ))}
  </ul>
);
