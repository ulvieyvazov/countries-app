import axios from "axios";
import React, { useEffect, useState } from "react";
import "./countries.css";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  // const onCheck = (e) => {
  //   setValue(e.target.value)
  //   console.log(value);
  // }

  const getData = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/all`);
    // setData(res.data);
    setData(
      res.data.filter((item) =>
        item.name.common.toLowerCase().includes(value.toLowerCase())
      )
    );
    // setValue(value);
  };

  useEffect(() => {
    getData();
  }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="container">
        {data
          // .filter(f => (f.population > 10000000))
          .map((d) => (
            <div className="cart">
              <img
                key={d.name.common}
                onClick={() => navigate(`name/${d.name.common}`)}
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
