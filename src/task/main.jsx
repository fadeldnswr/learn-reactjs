import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task from "./Task";

createRoot(document.getElementById("root"))
.render(
  <StrictMode>
    <Task />
  </StrictMode>
)