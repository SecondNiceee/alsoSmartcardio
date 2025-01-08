"use client"
import { GET } from '@/shared/api/GET';
import useGetAutorisation from '@/shared/api/useGetAutorisation';
import { getAccessToken } from '@/shared/utils/getAccessToken';
import axios from 'axios';
import { useEffect } from 'react';

type RegionType = {
    name : string
}
const StartApp = () => {
    useGetAutorisation()
    useEffect(  () => {
        const token = getAccessToken()
        async function getRegions() {
            const response = await GET<RegionType[]>({endpoint : "/offices", params : {
                type : "PVZ",
                country_code: 'RU',
                city_code:44
            },
             headers : {
                "Content-Type" : "Application/json",
                "Authorization" : `Bearer ${token}`,
            }})
            console.log(response?.find((e, i) => e.name.toUpperCase().includes("ПУГОВ")))
        }
        getRegions()
    } , [] )
    
    return null
};

export default StartApp;