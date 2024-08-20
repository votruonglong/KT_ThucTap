import { createSlice } from "@reduxjs/toolkit";
import { updateQuestion } from "../../services/questionSerivce";

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: [],
        isLoading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateQuestion.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateQuestion.fulfilled, (state, action) => {
                state.isLoading = false
                const index = state.questions.findIndex(question => question.id === action.payload.id)

                if (index !== -1) {
                    state.questions[index] = action.payload
                }
            })
            .addCase(updateQuestion.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }


})

export default questionsSlice.reducer