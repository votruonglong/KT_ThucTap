import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "./slice/answerSlice";
import languageReducer from "./reducers/languageReducer";

export const store = configureStore({
    reducer: {
        answers: answerSlice,
        language: languageReducer
    }
})

