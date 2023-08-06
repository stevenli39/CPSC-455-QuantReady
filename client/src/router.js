import * as React from "react";
import QuestionsList from "./components/QuestionsPage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import About from "./pages/About"
import AdminPage from "./components/AdminPage";
import { fetchQuestions, createQuestion, updateQuestionById, deleteQuestionById } from "./api/questions";
import QuestionHistory from "./pages/QuestionHistory";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/questions"
        element={<QuestionsList />}
      />
      <Route path="/admin" element={<AdminPage questions={fetchQuestions()} createQuestion={createQuestion} updateQuestionById={updateQuestionById}
deleteQuestionById={deleteQuestionById}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/account" element={<HomePage />} /> 
        <Route path="/progress" element={<QuestionHistory/>}/>

    </Routes>
    // Replace the account element with the actual account page later
  );
}

export default router;
