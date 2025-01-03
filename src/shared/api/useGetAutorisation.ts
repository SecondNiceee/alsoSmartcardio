"use client"
import { useEffect, useState } from 'react';
import { account, password } from '../config/constants';
import { POST } from './POST';
import { TypeStatus } from './models';
import retryOperation from '../utils/retryOperation';
import authorize from './authorize';



const useGetAutorisation = () => {

    useEffect( () => {

        authorize().then(value => {console.log(value)}) 

    } , [] )
};

export default useGetAutorisation;