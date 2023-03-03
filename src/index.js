import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./router";

const router = createBrowserRouter(routers);

/**
 * 👴 Old way to mount and unmount an app
 */

// const rootNode = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   rootNode
// );

// ReactDOM.unmountComponentAtNode(rootNode);

/**
 * 🚀 New way with the react-dom/client API
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={router} />);

/* Uncomment to test strictMode */
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// root.unmount();
