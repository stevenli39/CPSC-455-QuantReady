import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import {addQuestion, getQuestions, deleteQuestion, clearQuestions} from './service';

export const getQuestionsAsync = createAsyncThunk(
  actionTypes.GET_QUESTIONS,
  async () => {
    return await getQuestions();
  }
);

export const clearQuestionsAsync = createAsyncThunk(
  actionTypes.CLEAR_QUESTIONS,
  async () => {
    return await clearQuestions();
  }
);

export const addQuestionAsync = createAsyncThunk(
  actionTypes.ADD_QUESTION,
  async (question) => {
    return await addQuestion(question);
  }
);


export const deleteQuestionAsync = createAsyncThunk(
  actionTypes.DELETE_QUESTION,
  async (question_id) => {
    return await deleteQuestion(question_id);
  }
);