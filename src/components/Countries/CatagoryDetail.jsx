import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CatagoryDetail.css"

const CatagoryDetail = () => {
    const navigate = useNavigate();

    const params = useParams()
    console.log(params.name);

    const [catagory, setCatagory] = useState([])
    const getCata = async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${params.name}`)
        setCatagory(res.data[0])
    }

    useEffect(() => {
        getCata()
    }, [])

    console.log(catagory);

    return (
        <>

            <div className="child-parent">

                <button className="back" onClick={() => navigate("/")}>Back Home</button>
                <div className="ad">
                    <div><img src={catagory?.flags?.png} alt="" /></div>

                    <div className="flex">
                        <div>Name: {catagory?.name?.common}</div>
                        <div>Capital: {catagory.capital}</div>
                        <div>Region: {catagory?.continents}</div>
                        <div>Population: {catagory.population}</div>
                        <div>Subregion: {catagory.subregion}</div>
                        <div>Area: {catagory?.area}</div>
                        <div>Currencies: {catagory?.currencies?.EUR?.name}</div>
                    </div>

                    {/* <img src={catagory} alt="" />
                */}
                    {/* {catagory.name.common} */}
                </div>
            </div>
        </>
    )
}

export default CatagoryDetail