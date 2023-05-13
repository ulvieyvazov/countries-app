import React, { useState, useEffect } from "react";
import "./header.css"
// import { FaMoon } from "react-icons/fa";


const Header = () => {

    const [dark, setDark] = useState(
        localStorage.getItem('dark') || 'light'
    )

    const toggleDark = () => {
        setDark((pre) => !pre)
        if (dark === 'light') {
            setDark('dark');
        } else {
            setDark('light');
        }
    };

    useEffect(() => {
        localStorage.setItem('dark', dark);
        document.body.className = dark;
    }, [dark]);


    return (
        <>
            <div className="parent">

                <div className="nav">

                    <h3>Where in the world?</h3>
                </div>
                <div className={`${dark}`}>
                    <button onClick={toggleDark}>{dark ? '🌙' : '☀'}</button>
                    {/* <button onClick={() => {
                        if (dark === 'light') {
                            setDark('dark');
                        } else {
                            setDark('light');
                        }
                    setDark((pre) => !pre)
                }} >{dark ? '🌙' : '☀'}</button> */}
                </div>
            </div>
        </>
    )
}
export default Header