import React from "react";
import { AnyAction, ProcessAction, StoreModule } from "kiss-react-state";

/**
 * State Types
 */
export type TodoType = {
  id: number;
  text: string;
};

/**
 * Context Logic
 */
enum ActionType {
  ADD_TODO = "TODOS/ADD_TODO",
  REMOVE_TODO = "TODOS/REMOVE_TODO",
  RESET = "TODOS/RESET",
}
type TodoState = {
  todos: TodoType[];
};

const todoStore = new StoreModule<ActionType, TodoState>("", { todos: [] });

/**
 * Exportable Actions
 */
const addTodo = todoStore.setPayloadAction<TodoType>(
  ActionType.ADD_TODO,
  (state, action) => ({ ...state, todos: [...state.todos, action.payload] })
);

const remove = todoStore.setPayloadAction<number>(
  ActionType.REMOVE_TODO,
  (state, action) => ({
    ...state,
    todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
  })
);

const reset = todoStore.setSimpleAction(
  ActionType.RESET,
  () => todoStore.initialState
);

/**
 * Processees
 */
// type AppProcessType<R> = ProcessAction<R, TodoState, null, AnyAction>;

// type TestAsyncProcess = (todo: TodoType) => AppProcessType<void>;
// const test: TestAsyncProcess = (todo) => (dispatch) => {
//   console.log("are we in test() ?", todo);
//   // setTimeout(() => dispatch(increment(amount)), 1000);
//   dispatch(addTodo(todo));
// };

const TodoContext = todoStore.getContext();
const useTodoState = todoStore.useContext(
  TodoContext,
  {
    addTodo,
    remove,
    reset,
  },
  {
    // test,
  }
);

const TodoProvider: React.FC = ({ children }) => (
  <TodoContext.Provider value={todoStore.getMemoValueHook()()}>
    {children}
  </TodoContext.Provider>
);

export { TodoProvider, useTodoState };
