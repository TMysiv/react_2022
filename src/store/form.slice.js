import {createSlice} from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
        affairs: [],
        completed: 0

    },
    reducers: {
        createAffair: (state, action) => {
            state.affairs.push({
                id: new Date().getTime(),
                ...action.payload.data,
                status: false
            })
        },
        deleteAffair: (state, action) => {
            state.affairs = state.affairs.filter(affair => affair.id !== action.payload.id)
            if (action.payload.status) {
                state.completed = --state.completed
            }
        },
        getChecked: (state, action) => {
            const checkedAffairs = state.affairs.find(value => value.id === action.payload.id);
            checkedAffairs.status = !checkedAffairs.status
            checkedAffairs.status ? ++state.completed : --state.completed
        }
    }
})

const formReducer = formSlice.reducer;

export const {createAffair, deleteAffair, getChecked} = formSlice.actions;

export default formReducer