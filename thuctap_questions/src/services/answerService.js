import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MainAPI } from '../MainAPI'

export const updateAnswer = createAsyncThunk('answers/updateAnswer', async ({ id, answer, isAnswer }, thunkAPI) => {
    try {
        const response = await axios.put(`${MainAPI}/${id}`, { answer, isAnswer });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
})
