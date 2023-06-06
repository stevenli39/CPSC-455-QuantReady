import * as React from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import Login from "./pages/Login";

function Router() {
    return (
      <Routes>
        <Route path="/" element={<div>Hello World!</div> }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/questions" element={<div>Questions</div>} />
        {/* Add your routes here */}
      </Routes>
    );
  }
  

export default Router; 