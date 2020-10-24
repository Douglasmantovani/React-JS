import React, { useState, useEffect } from 'react';
import Button from '../../../components/button';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index'
import Input from '../../../components/input';
import '../cadastro/style.css'
import { useHistory } from 'react-router-dom';

function Cadastro() {
    const [Nome, setNomeCad] = useState('');
    const [Email, setEmailCad] = useState('');
    const [Cargo, setCargoCad] = useState('');
    const [Senha, setSenhaCad] = useState('');
    let history = useHistory();
    const salvar = () => {
        const form = {
            nome: Nome,
            email: Email,
            permissao: Cargo,
            senha: Senha
        };

        fetch('http://localhost:5000/api/Usuarios', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(() => {
                alert('Usuario cadastrado');
                history.push('/login');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <h1>Cadastro </h1>
            <div className="InputMain">
                <form onSubmit={event => {
                    event.preventDefault();
                    salvar();
                }}>
                    <Input name="nome" type="text" label="Nome" value={Nome} onChange={e => setNomeCad(e.target.value)} />
                    <br />
                    <Input name="email" type="text" label="Email" value={Email} onChange={e => setEmailCad(e.target.value)} />
                    <br />
                    <select id="permissao" value={Cargo} onChange={e => setCargoCad(e.target.value)}>
                        <option value="" disabled selected>Selecione</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Comum">Comum</option>
                    </select>
                    <br />
                    <br />
                    <Input name="senha" type="password" label="Senha" value={Senha} onChange={e => setSenhaCad(e.target.value)} />
                    <br />
                    <div className="bott">
                        <Button value="Cadastrar"></Button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default Cadastro;

