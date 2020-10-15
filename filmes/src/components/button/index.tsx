import React, { InputHTMLAttributes } from 'react'
import Input from '../input';
import '../button/style.css'

interface ButtonProps{
    value: string;
}

const Button: React.FC<ButtonProps> =({value,...rest}) =>{
    return(
        <div >
           <input value={value} className="botao" type="submit" />
        </div>
    );
}
export default Button;
