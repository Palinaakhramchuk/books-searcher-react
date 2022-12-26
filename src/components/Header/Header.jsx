import React from "react";
import logo from "../../logo.svg";
import s from './Header.module.css';

const Header=()=>{
    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className={s.App_link}
            // className={`${s.App_link} ${s.App_link_sec}`}
            // className={s["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </header>
}

export default Header;