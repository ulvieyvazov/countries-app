import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CatagoryDetail = () => {

    const { params } = useParams()
    const [catagory, setCatagory] = useState([])

    const getCata = async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${params.name}`)
        setCatagory(res.data[0])
    }
    
    useEffect(() => {
       getCata()
    }, [])


    return (
        <>
            <div>
                {catagory?.name?.common}
            </div>
        </>
    )
}

export default CatagoryDetail