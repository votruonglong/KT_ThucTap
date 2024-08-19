import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "./slice/answerSlice";


export const store = configureStore({
    reducer: {
        answers: answerSlice
    }
})

