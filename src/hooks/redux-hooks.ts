import {AppDispatch, RootState} from "../store/store";
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {
    useAppSelector,
    useAppDispatch
}