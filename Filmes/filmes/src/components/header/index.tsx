import React, { useState, useEffect } from 'react';
import '../header/style.css';
import Logo from '../../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';

interface Props {
  description: string
  extra?: string;
}

const Header: React.FC<Props> = (props) => {
  const [Cargo, setCargo] = useState('');

  const refresh = () => {
    fetch('http://localhost:5000/api/Usuarios/BuscarPorId', {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setCargo(dados.permissao);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    refresh();
  });
  
  let history = useHistory();

  //criando a função logout, removendo o token do localStorage e chamando a página do usuário deslogado
  const logout = () => {
    localStorage.removeItem('token-filmes');
    history.push('/');
  }
  // criando a função menu() com a estrutura condicional que retornará o menu para usuários logados e deslogado
  const menu = () => {
    // a variável token recebe o conteúdo do local storage
    const token = localStorage.getItem('token-filmes');

    //se o valor de token estiver indefinido ou nulo, chama o menu deslogado, se não chama o menu para quando o usuário estiver logado
    if (token === undefined || token === null) {
      return (
        <div className="Nav">
          <a><Link to="/" className="link">Home</Link></a>
          <a><Link to="/login" className="link">Login</Link></a>
          <a><Link to="/cadastro" className="link">Cadastro</Link></a>
        </div>
      )
    } else if (Cargo == 'Administrador') {
      return (
        <div className="Nav">
          <a><Link to="/" className="link">Home</Link></a>
          <a><Link to="/perfil" className="link">Perfil</Link></a>
          <a><Link to="/genero" className="link">Genero</Link></a>
          <a><Link to="/filme" className="link">Filmes</Link></a>
          <a><Link to='' onClick={(event) => {
            event.preventDefault();
            logout();
          }}>Logout</Link></a> <br />
        </div>
      )
    }
    else if (Cargo == 'Comum') {
      return (
        <div className="Nav">
          <a><Link to="/" className="link">Home</Link></a>
          <a><Link to="/perfil" className="link">Perfil</Link></a>
          <a><Link to="/filmecomum" className="link">Filmes</Link></a>
          <a><Link to='' onClick={(event) => {
            event.preventDefault();
            logout();
          }}>Logout</Link></a> <br />
        </div>
      )
    }
  }

  return (
    <div className="LogoNav">
      <div className="Logo">
        <Link to={{ pathname: "/" }}> <img src={Logo} alt="Logo do site" /></Link>
        <h3>{props.description}</h3>
        {props.children}
        {props.extra && <p>{props.extra}</p>}
      </div>
      <div className="Nav">
        {menu()}
      </div>
    </div>
  );
}
export default Header;
