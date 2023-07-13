import {createSlice} from '@reduxjs/toolkit'
import {REQUEST_STATE} from '../util'
import { addQuestionAsync, getQuestionsAsync, deleteQuestionAsync, clearQuestionsAsync} from './thunks';



const INITIAL_STATE = {
  questionsList: [],
  getQuestions : REQUEST_STATE.IDLE,
  error: null
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get questions
      .addCase(getQuestionsAsync.pending, (state) => {
        state.getQuestions = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getQuestionsAsync.fulfilled, (state, action) => {
        state.getQuestions = REQUEST_STATE.FULFILLED;
        state.questionsList = action.payload;
      })
      .addCase(getQuestionsAsync.rejected, (state, action) => {
        state.getQuestions = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
    // add questions
      .addCase(addQuestionAsync.pending, (state) => {
        state.addQuestion = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addQuestionAsync.fulfilled, (state, action) => {
        state.addQuestion = REQUEST_STATE.FULFILLED;
        state.questionsList.push(action.payload);
      })
      .addCase(addQuestionAsync.rejected, (state, action) => {
        state.addQuestion = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
    // delete question
      .addCase(deleteQuestionAsync.pending, (state) => {
        state.deleteQuestion = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteQuestionAsync.fulfilled, (state, action) => {
        state.deleteQuestion = REQUEST_STATE.FULFILLED;
        state.questionsList = action.payload;
      })
    // clear questions
      .addCase(clearQuestionsAsync.pending, (state) => {
        state.clearQuestion = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(clearQuestionsAsync.fulfilled, (state, action) => {
        state.deleteQuestion = REQUEST_STATE.FULFILLED;
        state.questionsList = [];
      });
  }
});

export default questionsSlice.reducer;
