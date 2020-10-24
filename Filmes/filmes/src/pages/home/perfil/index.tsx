import React, { useEffect, useState } from 'react';
import Button from '../../../components/button';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index';
import Input from '../../../components/input';
import '../perfil/style.css';

function Perfil() {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Cargo, setCargo] = useState('');
    const [Senha, setSenha] = useState('');

    const refresh = () => {
        fetch('http://localhost:5000/api/Usuarios/BuscarPorId', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setNome(dados.nome);
                setEmail(dados.email);
                setCargo(dados.permissao);
                setSenha(dados.senha);
            })
            .catch(err => console.error(err));
    }

    const Atualizar = () => {
        const form = {
            nome: Nome,
            email: Email,
            permissao: Cargo,
            senha: Senha
        };

        var a = form;

        fetch('http://localhost:5000/api/Usuarios/Atualizar', {
            method: 'PUT',
            body: JSON.stringify(a),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                (
                 alert("Usuario atualizado"));
                refresh();
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <div className="main">
                <h1>Perfil </h1>
                <form onSubmit={event => {
                    event.preventDefault();
                }} >
                    <Input name="nome" type="text" label="Nome" value={Nome} onChange={e => setNome(e.target.value)} />
                    <br />
                    <Input name="email" type="text" label="Email" value={Email} onChange={e => setEmail(e.target.value)} />
                    <br />
                    <select id="permissao" value={Cargo} onChange={e => setCargo(e.target.value)}>
                        <option value="" disabled selected>Selecione</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Comum">Comum</option>
                    </select>
                    <br />
                    <Input name="senha" type="password" label="Senha" value={Senha} onChange={e => setSenha(e.target.value)} />
                    <br />
                    <div className="bts">
                        <Button value="Editar" Onclick={refresh} />
                        <br />
                        <Button value="Salvar" Onclick={Atualizar} />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default Perfil;