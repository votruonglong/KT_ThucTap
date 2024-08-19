import { createSlice } from "@reduxjs/toolkit";
import { updateAnswer } from "../../services/answerService";

const answerSlice = createSlice({
    name: "answer",
    initialState: {
        answers: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateAnswer.pending, (state) => {
                state.loading = true
            })
            .addCase(updateAnswer.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.answers.findIndex(answer => answer.id === action.payload.id);
                if (index !== -1) {
                    state.answers[index] = action.payload
                }
            })
            .addCase(updateAnswer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
})

export default answerSlice.reducer