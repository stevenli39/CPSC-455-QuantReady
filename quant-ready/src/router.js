import * as React from "react";
import QuestionsList from "./components/QuestionsPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import questions from "./mock_data/questions";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>Hello World!</div>} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/questions"
        element={<QuestionsList questions={questions} />}
      />
      {/* Add your routes here */}
    </Routes>
  );
}

export default Router;