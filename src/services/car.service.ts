import axiosService from "./axios.service";
import {urls} from "../configs/urls";
import {ICar} from "../interfaces/car.interface";

export const carService = {
    getAll: () => axiosService.get<ICar[]>(urls.cars).then(value => value.data),
    create: (car: ICar) => axiosService.post<ICar>(urls.cars, car).then(value => value.data),
    deleteCar: (id: number) => axiosService.delete<void>(`${urls.cars}/${id}`),
    update: (id: number, car: ICar) => axiosService.patch<ICar[]>(`${urls.cars}/${id}`, car)
}