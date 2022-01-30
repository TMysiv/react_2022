import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import postsService from "../services/posts.service";

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postsService.getAll();
            return posts
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        status: null,
        errors: null
    },
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = "pending"
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.posts =action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = "fulfilled"
            state.errors =action.payload
        }
    }
})

const postsReducer = postsSlice.reducer;

export default postsReducer