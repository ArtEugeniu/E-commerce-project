import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: null | { uid: string, email: string | null }
}

const initialState: AuthState = {
    user: null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState['user']>) => {
            state.user = action.payload
        },

        clearUser: (state) => {
            state.user = null
        }
    }
})

export default AuthSlice.reducer;
export const { setUser, clearUser } = AuthSlice.actions;