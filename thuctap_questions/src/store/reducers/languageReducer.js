import { createSlice } from '@reduxjs/toolkit';
import { LANGUAGES } from '../../utils/constant';

const languageSlice = createSlice({
    name: 'language',
    initialState: LANGUAGES.VI,
    reducers: {
        changeLanguage(state, action) {
            return action.payload;
        },
    },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
