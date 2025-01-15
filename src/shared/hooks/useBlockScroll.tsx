import { useEffect } from 'react';
import { blockScroll, unBlockScroll } from '../utils/blockController';

const useBlockScroll = () => {
    useEffect( () => {
        blockScroll()
        return () => {
            unBlockScroll()
        }
    } , [] )
};

export default useBlockScroll;