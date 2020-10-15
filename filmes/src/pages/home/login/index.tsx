import React,{ useState } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Input from '../../../components/input';
import Button from '../../../components/button';
import '../login/style.css';
import { useHistory } from 'react-router-dom';


function Login() {

    let history = useHistory();
 
    //UseState é uma forma de definir e atualizar o estado “interno ” de um componente
      const [email, setEmail] = useState('');
      const [senha, setSenha] = useState('')
     
    //criando função de acesso aos dados da API para realização do login
      const login = () => {
        const login = {
          email: email,
          senha: senha
        }
    //utilizando fetch para acesso à API, determinando o método, body e headers
    fetch('http://localhost:5000/api/conta/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
          'content-type': 'application/json'
        }
      })
        //promises
        .then(response=>response.json())
        .then(dados => {
        //Verificação se 
          if(dados.token != undefined || dados.token != null || dados.token != '')
          {
            localStorage.setItem('token-filmes',dados.token)
    
            history.push('/');
          }else{
            alert('Senha ou Email incorretos! Tente novamente! :(')
          }
        })
        .catch(err=>console.error(err))
      }


    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <h1>Login</h1>
            <div className="InputMain">
                <form onSubmit={event => { event.preventDefault(); login(); }}>
                    <Input name="email" type="text" label="Email" onChange={e => setEmail(e.target.value)} />
                    <br />
                    <Input name="senha" type="password" label="Senha" onChange={e => setSenha(e.target.value)} />
                    <br />
                    <div className="bott">
                        <Button value="Enviar"></Button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default Login;

