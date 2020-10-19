import React, { useEffect, useState } from 'react';
import Button from '../../../components/button';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index'
import imgTheater from '../../../assets/images/cinema.png';
import '../filmeComum/style.css';

function FilmeComum() {
    const [Filmes, setFilmes] = useState([]);

    const listar = () => {
        fetch('http://localhost:5000/api/Filmes', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <main>
                <div className="imgTitulo">
                    <h2>Filme</h2>
                    <img className="theater" src={imgTheater} alt="teste" />
                </div>
                <div className="ListGenero">
                    <h3>Lista de filmes</h3>
                    <div className="Tabela">
                        <div className="FilmeGenero">
                            <h3>Filme</h3>
                            <h3>Genero</h3>
                            <br />
                        </div>
                        <table>
                            <tbody>
                                {
                                    Filmes.map((item: any) => {
                                        return (
                                            <tr>
                                                <td className="nometds">{item.titulo}</td>
                                                <td className="nometds">{item.genero.nome}</td>
                                            </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <form onSubmit={event => {
                        event.preventDefault();
                        listar();
                    }}>
                        <div className="form1">
                            <div className="btn">
                                <Button value="Listar filmes" />
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default FilmeComum;