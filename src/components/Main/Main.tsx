import React from 'react';
import Movies from "../Movies/Movies";
import style from './Main.module.scss'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <Movies/>
        </div>
    );
};

export default Main;