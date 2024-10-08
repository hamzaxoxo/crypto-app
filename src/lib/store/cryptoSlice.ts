import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCoins } from '../../services/api';

interface CryptoState {
    status: 'idle' | 'loading' | 'success' | 'failed';
    data: [];
}

const initialState: CryptoState = {
    status: 'idle',
    data: [],
};


export const getCryptoData = createAsyncThunk('crypto/getCryptoData', async () => {
    const response = await getCoins();
    return response.data;
});

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCryptoData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getCryptoData.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(getCryptoData.rejected, (state) => {
                state.status = 'failed';
            });
    },
});


export default cryptoSlice.reducer;