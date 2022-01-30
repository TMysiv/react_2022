import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import usersService from "../services/users.service";

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getAll();
            return users
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status:null,
        errors:null
    },
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.errors = action.payload
        }
    }
})
const usersReducer = usersSlice.reducer;

export default usersReducer