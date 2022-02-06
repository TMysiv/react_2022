import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"

import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";


interface ICarState {
    cars: ICar[]
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_,{dispatch}) => {
        const cars = await carService.getAll();
        dispatch(getCars({cars}))
    }
)

export const deleteCarById =createAsyncThunk<void,{id:number}>(
    'carSlice/deleteCarById',
    async ({id},{dispatch})=>{
        await carService.deleteCar(id)
    }
)
const initialState: ICarState = {
    cars: []
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getCars: (state, action: PayloadAction<{ cars: ICar[] }>) => {
            state.cars = action.payload.cars
        },
        deleteCar:(state,action:PayloadAction<{id:number}>)=>{

        }
    },

})

export const {getCars} = carSlice.actions;

const carReducer = carSlice.reducer;
export default carReducer