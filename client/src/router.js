import * as React from "react";
import QuestionsList from "./components/QuestionsPage";
import questions from "./mock_data/questions";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import About from "./pages/About"
import AdminPage from "./components/AdminPage";
import { fetchQuestions, createQuestion, updateQuestionById, deleteQuestionById } from "./api/questions";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/questions"
        element={<QuestionsList questions={questions} />}
      />
       <Route path="/admin" element={<AdminPage questions={fetchQuestions()} createQuestion={createQuestion} updateQuestionById={updateQuestionById}
deleteQuestionById={deleteQuestionById}/>} />
        <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default Router;
