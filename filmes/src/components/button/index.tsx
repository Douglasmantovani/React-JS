import React, { InputHTMLAttributes } from 'react'

interface ButtonProps{
    text: string;
    ClassName:string;
}

const Button: React.FC<ButtonProps> =({text,ClassName,...rest}) =>{
    return(
        <div >
           <button className={ClassName}>{text}</button>
        </div>
    );
}
export default Button;
