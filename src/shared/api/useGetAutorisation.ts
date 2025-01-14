"use client"
import { useEffect } from 'react';
import authorize from './authorize';



const useGetAutorisation = () => {

    useEffect( () => {

        authorize()

    } , [] )
};

export default useGetAutorisation;