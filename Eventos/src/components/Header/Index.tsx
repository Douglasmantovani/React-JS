import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface Props {
    description: string;
  }
  
  const Header: React.FC<Props> = (props) => {
    return (
        <div className="Completo">
            <header className="head">
    <h3>{props.description}</h3>
                <nav>
                    <ul>
                    <li><Link to="/" className="deco">Home</Link></li>
                    <li><Link to="/login" className="deco">Login</Link></li>
                    <li><Link to="/evento" className="deco">Evento</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;