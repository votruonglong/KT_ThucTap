import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "./slice/answerSlice";
import questionsSlice from "./slice/questionsSlice";
import languageReducer from "./reducers/languageReducer";

export const store = configureStore({
	reducer: {
		answers: answerSlice,
		questions: questionsSlice,
		language: languageReducer,
	},
});
