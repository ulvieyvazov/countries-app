import React, { useState, useEffect } from "react";
import "./header.css"
// import { FaMoon } from "react-icons/fa";


const Header = () => {

    const [darkmode, setDarkmode] = useState(
        localStorage.getItem('dark') || 'light'
    )

    const toggleDark = () => {
        setDarkmode((pre) => !pre)
        if (darkmode === 'light') {
            setDarkmode('dark');
        } else {
            setDarkmode('light');
        }
    };

    useEffect(() => {
        localStorage.setItem('dark', darkmode);
        document.body.className = darkmode;
    }, [darkmode]);


    return (
        <>
            <div className="parent">

                <div className="nav">

                    <h3>Where in the world?</h3>
                </div>
                <div className={`${darkmode}`}>
                    <button onClick={toggleDark}>{darkmode === "dark"? '🌙' : '☀'}</button>
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