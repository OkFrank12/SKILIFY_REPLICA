import React from "react";
import { MainRouter } from "./Router/MainRouter";
import { RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
};

export default App;
