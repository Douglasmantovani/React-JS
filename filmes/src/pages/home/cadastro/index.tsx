import React from 'react';
import Button from '../../../components/button';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index'
import Input from '../../../components/input';

function Cadastro(){
    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <h1>Cadastro </h1>
            <div className="InputMain">
                <Input name="nome" type="text" label="Nome" />
                <br />
                <Input name="email" type="text" label="Email" />
                <br />
                <Input name="permissao" type="" label="Permissao" />
                <br />
                <Input name="senha" type="password" label="Senha" />
                <br />
                
                <Button ClassName="bt" text="Cadastrar"></Button>
            </div>
            <Footer />
        </div>
    );   
}
export default Cadastro;

