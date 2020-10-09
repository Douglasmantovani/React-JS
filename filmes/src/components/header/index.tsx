import React from 'react';
import '../header/style.css';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

interface Props {
    description: string
}

const Header: React.FC<Props> =(props)=>{
    return(
        <div className="LogoNav">
            <div className="Logo">
                <Link to={{ pathname: "/" }}> <img src={Logo}  alt="Logo do site"/></Link>
                <h3>{props.description}</h3>
            </div>
            <div className="Nav">
                <a><Link to="/" className="link">Home</Link></a>
                <a><Link to="/login" className="link">Login</Link></a>
                <a><Link to="/cadastro" className="link">Cadastro</Link></a>
            </div>
        </div>
    );
}
export default Header;
