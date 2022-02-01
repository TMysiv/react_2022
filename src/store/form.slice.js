import {createSlice} from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
        affairs: [],

    },
    reducers: {
        createAffair: (state, action) => {
            state.affairs.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteAffair: (state, action) => {
            state.affairs = state.affairs.filter(affair => affair.id !== action.payload.id)
        },
        getChecked:(state,action)=>{
           state.affairs.map(affair=>affair.username:action.payload.checked)
        }
    }
})

const formReducer = formSlice.reducer;

export const {createAffair, deleteAffair,getChecked} = formSlice.actions;

export default formReducer