import React from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Input from '../../../components/input';
import Button from '../../../components/button';
import '../login/style.css';

function Login() {
    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <h1>Login</h1>
            <div className="InputMain">
                <Input name="email" type="text" label="Email" />
                <br />
                <Input name="senha" type="password" label="Senha" />
                <br />
                <Button ClassName="bt" text="Enviar"></Button>
            </div>
            <Footer />
        </div>
    );
}
export default Login;

