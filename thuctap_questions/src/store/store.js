import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "./slice/answerSlice";
import questionsSlice from "./slice/questionsSlice";


export const store = configureStore({
    reducer: {
        answers: answerSlice,
        questions: questionsSlice
    }
})

