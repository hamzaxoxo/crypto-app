import { createSlice } from "@reduxjs/toolkit";


interface loginData {
    email: string;
    password: string;
}

const initialState: loginData = {
    email: '',
    password: '',
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});


export const { setEmail, setPassword } = loginSlice.actions;
export default loginSlice.reducer;