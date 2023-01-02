import React from 'react';
import s from './Loader.module.css';
const Loader = () => {
    return (
        <div>
            {/*not connect with anything at that time*/}
            <div className={s.loaderPic}></div>
        </div>
    );
};

export default Loader;