import {createSlice} from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
        affairs: [],
        checked:false
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
        checkedCheckbox:(state,action)=>{
            console.log(action.payload)
        }
    }
})

const formReducer = formSlice.reducer;

export const {createAffair, deleteAffair,checkedCheckbox} = formSlice.actions;

export default formReducer