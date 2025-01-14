import { addOrder, removeOneOrder } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';

const useOrdersController = () => {
    const dispatch = useAppDispatch()

    const addOrderToCart = (orderId : number) => {
      dispatch(addOrder({id : orderId}))
    }

    const removeOneOrderFromCart = (orderId : number) => {
        dispatch(removeOneOrder({id : orderId}))
    }


    return {addOrderToCart, removeOneOrderFromCart}
};

export default useOrdersController;