import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { TodoApp } from "./todo/TodoApp";
import { TodoProvider } from "./todo/state/TodoContext";

export const App: FC = () => (
  <div className="container">
    <div id="container" className="col-md-8 col-md-offset-2">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  </div>
);
