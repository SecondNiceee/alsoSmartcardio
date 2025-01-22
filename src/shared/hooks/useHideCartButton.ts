import { setCartButton } from "@/entities/cart/model/cartSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../models/reduxHooks";

const useHideCartButton = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCartButton(false));
    return () => {
      dispatch(setCartButton(true));
    };
  }, []);
};

export default useHideCartButton;
