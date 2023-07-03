import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from './InputSearch.module.scss'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputSearchPropsType = {} & DefaultInputPropsType

export const InputSearch = (props: InputSearchPropsType) => {
    console.log('fix input')
    return (
        <input className={style.input} {...props}/>
    )
}



