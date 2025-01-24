import { addOrder, removeAllOrders, removeOneOrder } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';

const useOrdersController = () => {
    const dispatch = useAppDispatch()

    const addOrderToCart = (orderId : number) => {
      dispatch(addOrder({id : orderId}))
    }

    const removeOneOrderFromCart = (orderId : number) => {
        dispatch(removeOneOrder({id : orderId}))
    }

    const removeAllOrdersFromCart = (orderId : number) => {
      dispatch(removeAllOrders({id : orderId}))
    }


    return {addOrderToCart, removeOneOrderFromCart , removeAllOrdersFromCart}
};

export default useOrdersController;