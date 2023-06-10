import * as React from "react";
import QuestionsList from "./components/QuestionsPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import About from "./pages/About"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/questions"
        element={<QuestionsList questions={questions} />}
      />
        <Route path="/about" element={<About/>}/>
    </Routes>
  );
}


export default Router;
