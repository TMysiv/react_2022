import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import carService from "../services/car.service";
import {logDOM} from "@testing-library/react";

export const getAllCars = createAsyncThunk(
    'carSlice/carSlice',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {dispatch}) => {
        try {
            const newCar = await carService.create(car);
            dispatch(addCar({car: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {dispatch}) => {
        console.log(id)
        try {
            await carService.deleteCar(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({carId, car}, {dispatch}) => {
        try {
            await carService.update(carId, car)
            dispatch(getAllCars())
        } catch (e) {
            console.log(e)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        carId: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(cars => cars.id !== action.payload.id)
        },
        updateCar: (state, action) => {
            state.carId = action.payload.id
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const carReducer = carSlice.reducer
export const {addCar, deleteCar, updateCar} = carSlice.actions

export default carReducer