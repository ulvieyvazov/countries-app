import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CatagoryDetail = () => {

    const params = useParams()
    const [catagory, setCatagory] = useState({})

    const getCata = async () => {
        const result = await axios.get(`https://restcountries.com/v3.1/all/${params.flags.png}`)
        setCatagory(result.data)
    }

    useEffect(() => {
        getCata()
    }, [])


    return (
        <>
            <img src={catagory.flags.png} alt="" />
            <h2>{catagory.name.common}</h2>
            <p>Population:{catagory.population}</p>
            <p>Region:{catagory.region}</p>
            <p>Capital:{catagory.capital}</p>
        </>
    )
}

export default CatagoryDetail