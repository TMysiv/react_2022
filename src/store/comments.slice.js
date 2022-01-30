import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import commentsService from "../services/commnts.service";

export const getAllComments = createAsyncThunk(
    "commentsSlice/getAllComments",
    async (_, {rejectWithValue}) => {
        try {
            const comments = await commentsService.getAll();
            return comments
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: {
        comments: [],
        status: null,
        errors: null
    },
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.errors = action.payload
        }
    }
})

const commentsReducer = commentsSlice.reducer;
export default commentsReducer