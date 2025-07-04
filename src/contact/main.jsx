import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactForm from "./ContactForm";

createRoot(document.getElementById("root"))
.render(
  <StrictMode>
    <ContactForm />
  </StrictMode>
)