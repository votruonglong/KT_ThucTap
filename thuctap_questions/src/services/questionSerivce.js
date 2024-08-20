import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MainAPI } from "../MainAPI";

export const updateQuestion = createAsyncThunk('questions/updateQuestion', async ({ id, question }, thunkAPI) => {
    try {
        const response = await axios.put(`${MainAPI}/${id}`, { question })

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message || error.message)
    }
})