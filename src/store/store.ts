import {configureStore,combineReducers} from "@reduxjs/toolkit"
import carReducer from "./car.slice";

const rootReducer = combineReducers({
    carReducer
})

export const setAppStore = ()=>configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setAppStore>
export type AppDispatch = AppStore["dispatch"]