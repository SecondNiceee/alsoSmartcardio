import { useCallback, useRef } from "react"
interface IUserDebounce<T>{
    func : (...args : T[]) => void,
    delay : number,
}
export default function useDebounce<T>({delay,func}:IUserDebounce<T>){
    const timeoutId = useRef<null | NodeJS.Timeout>(null);
    
    const clearTimeoutId = useCallback( () => {
        if (timeoutId.current !== null){
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }
    } , [])

    const debouncedFunction = useCallback( (...args : T[])  => {
        if (timeoutId.current){
            clearTimeoutId();
        }
        timeoutId.current = setTimeout( () => func(...args) ,delay )
    } , [func, delay, clearTimeoutId])
    return debouncedFunction;
};

