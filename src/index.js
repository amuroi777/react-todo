import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo";

// import App from "./App";

// ReactDOM.render(<App />, document.querySelector("#root"));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
