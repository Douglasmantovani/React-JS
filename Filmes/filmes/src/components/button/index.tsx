import React, { InputHTMLAttributes } from 'react'
import Input from '../input';
import '../button/style.css'

interface ButtonProps{
    value: string;
    Onclick?:any
}

const Button: React.FC<ButtonProps> =({value,Onclick,...rest}) =>{
    return(
        <div >
           <input value={value} onClick={Onclick}  className="botao" type="submit"  />
        </div>
    );
}
export default Button;
