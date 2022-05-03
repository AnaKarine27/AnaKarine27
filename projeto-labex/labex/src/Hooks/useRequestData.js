import axios from "axios"
import {useEffect, useState} from 'react'
import { BASE_URL } from "../Constants/Url"


const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData(url)
       },[])

    const getData = (url) => {
        const token = window.localStorage.getItem(`token`)
        const header = { headers: {auth: token} }
        axios.get(`${BASE_URL}${url}`, header)
        .then((res)=>{
            setData(res.data)
        })
        .catch((error)=>{
            alert("Ocorreu um erro!", error.response)
        })
    }


    return [data, getData]
} 
export default useRequestData;
