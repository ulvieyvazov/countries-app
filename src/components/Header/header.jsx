import React, { useState }  from "react";
import "./header.css"
// import { FaMoon } from "react-icons/fa";
// import { ModeContext } from "../../tasks/task1/context/ModeContext"


const Header = () => {

    const [dark, setDark] = useState()
        
        
    return (
        <>
            <div className="nav">

                <h3>Where in the world?</h3>
                <button onClick={() => {
                    setDark((pre) => !pre)
                }} >{dark ? '☀' : '🌙'}</button>
            </div>
        </>
    )
}
export default Header