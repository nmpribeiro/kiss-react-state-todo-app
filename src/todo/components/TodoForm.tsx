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
    <div className="form-control col-md-10">
      <input ref={inputRef} style={{ marginRight: 10 }} />
      <button onClick={onClickHandler}>+</button>
    </div>
  );
};
