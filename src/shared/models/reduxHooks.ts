import { AppDispatch, RootState } from "@/app/appStore"
import { useDispatch, useSelector } from "react-redux"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()