import { createRef, FC } from "react";

interface Props {
  addTodo: (value: string) => void;
}

export const TodoForm: FC<Props> = ({ addTodo }) => {
  // Input tracker
  const inputRef = createRef<HTMLInputElement>();

  const onClickHandler = () => {
    if (inputRef.current) addTodo(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onClickHandler}>+</button>
    </div>
  );
};
