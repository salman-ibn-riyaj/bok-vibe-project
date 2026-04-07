import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import BookContextProvider from "./Components/Context/BookContextProvider";
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </BookContextProvider>

    
  </StrictMode>,
);
