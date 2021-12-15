import { FC } from "react";
import { TodoType } from "../state/TodoContext";

type RemoveType = (id: number) => void;

interface TodoProps {
  todo: TodoType;
  remove: RemoveType;
}

const Todo: FC<TodoProps> = ({ todo, remove }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#" className="list-group-item" onClick={() => remove(todo.id)}>
    {todo.text}
  </a>
);

interface TodoListProps {
  todos: TodoType[];
  remove: RemoveType;
}

export const TodoList: FC<TodoListProps> = ({ todos, remove }) => (
  <div className="list-group" style={{ marginTop: 30 }}>
    {todos.map((todo) => (
      <Todo todo={todo} key={todo.id} remove={remove} />
    ))}
  </div>
);
