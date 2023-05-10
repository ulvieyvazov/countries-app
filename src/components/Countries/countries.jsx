import axios from "axios";
import React, { useEffect, useState } from "react";
import "./countries.css"
import { useNavigate } from "react-router-dom";

const Countries = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/all`)
        setData(res.data)
        console.log(res);
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <div className="container">
                {
                    data
                    .filter(fi => (
                        fi.population > 10000000
                    ))
                    .map((d) => (
                        <div className="cart">
                            <img key={d.flags.png} onClick={()=> navigate(`${d.flags.png}`)} src={d.flags.png} alt="" />
                            <h2>{d.name.common}</h2>
                            <p>Population:{d.population}</p>
                            <p>Region:{d.region}</p>
                            <p>Capital:{d.capital}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Countries