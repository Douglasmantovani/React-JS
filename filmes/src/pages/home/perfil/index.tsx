import React from 'react';
import Button from '../../../components/button';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index'
import Input from '../../../components/input';
import '../perfil/style.css'

function Perfil() {
    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <div className="main">
                <h1>Cadastro </h1>
                <form >
                    <Input name="nome" type="text" label="Nome" />
                    <br />
                    <Input name="email" type="text" label="Email" />
                    <br />
                    <select id="permissao">
                        <option value="" disabled selected>Selecione</option>
                        <option value="adm">Administrador</option>
                        <option value="usuario">Usuário</option>
                    </select>
                    <br />
                    <Input name="senha" type="password" label="Senha" />
                    <br />
                    <div className="bts">
                        <Button value="Editar" />
                        <br />
                        <Button value="Salvar" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default Perfil;