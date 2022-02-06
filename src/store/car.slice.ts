import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"

import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";

export const getAllCars = createAsyncThunk<void>(
    'carSlice/getAllCars',
    async (_, {dispatch}) => {
        const cars = await carService.getAll();
        dispatch(getCars({cars}))
    }
)

export const deleteCarById = createAsyncThunk<void, { id: number }>(
    'carSlice/deleteCarById',
    async ({id}, {dispatch}) => {
        await carService.deleteCar(id)
        dispatch(deleteCar({id}))
    }
)

export const addCar = createAsyncThunk<void, { car: ICar }>(
    'carSlice/addCar',
    async ({car}, {dispatch}) => {
        const newCar = await carService.create(car);
        dispatch(plusCar({car: newCar}))
    }
)

export const updateCarById = createAsyncThunk<void, { carId: number, car: ICar }>(
    'carSlice/updateCarById',
    async ({carId, car}, {dispatch}) => {
        await carService.update(carId, car)
        dispatch(getAllCars())
    }
)

interface ICarState {
    cars: ICar[],
    carId: number | null
}

const initialState: ICarState = {
    cars: [],
    carId: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getCars: (state, action: PayloadAction<{ cars: ICar[] }>) => {
            state.cars = action.payload.cars
        },
        deleteCar: (state, action: PayloadAction<{ id: number }>) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        plusCar: (state, action: PayloadAction<{ car: ICar }>) => {
            state.cars.push(action.payload.car)
        },
        update: (state, action: PayloadAction<{ id: number }>) => {
            state.carId = action.payload.id
        }
    },

})

export const {getCars, deleteCar, plusCar, update} = carSlice.actions;

const carReducer = carSlice.reducer;
export default carReducer