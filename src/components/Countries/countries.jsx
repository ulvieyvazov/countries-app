import axios from "axios";
import React, { useEffect, useState } from "react";
import "./countries.css";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("")

  const getData = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/all`);
    setData(res.data);
  };
  
  const onCheck = (e) => {
    data.filter(item => {
      return item === "" ? item : item.name.common.toLowerCase().includes(value.toLowerCase()),
      console.log(item.name.common);
    })
    setValue(e.target.value)
    console.log(value);
  }


  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      {/* <input type="text" onChange={onCheck} /> */}
      <div className="container">
        {data
          .filter(f => (f.population > 1))
          .map((d) => (
            <div className="cart">
              <img key={d.name.common} onClick={() => navigate(`name/${d.name.common}`)}
                src={d.flags.png}
                alt=""
              />
              <h2>{d.name.common}</h2>
              <p>Population:{d.population}</p>
              <p>Region:{d.region}</p>
              <p>Capital:{d.capital}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Countries;