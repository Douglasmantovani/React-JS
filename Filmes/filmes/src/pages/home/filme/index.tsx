import React, { useEffect, useState } from 'react';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index';
import imgRefresh from '../../../assets/images/refresh.png';
import imgTrash from '../../../assets/images/trash.png';
import imgTheater from '../../../assets/images/cinema.png';
import '../filme/style.css'
import Input from '../../../components/input';
import Button from '../../../components/button';

function Filme() {
    //prop string genero {get; set;} = "";
    const [idFilme, setIdFilme] = useState(0);
    const [Filme, setFilme] = useState('');
    const [Filmes, setFilmes] = useState([]);
    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);

    //useEffect te permite executar efeitos colaterais em componentes funcionais
    //Buscar dados é um exemplo de efeito colateral
    //usando o useEffect informo ao React que o componente somente depois da renderização
    //é executado depois da renderização do componente, quando ele já estiver montado na DOM
    useEffect(() => {
        listar();
        listarGeneros();
    }, []);

    const listarGeneros = () => {
        fetch('http://localhost:5000/api/Generos', {
            method: 'GET',
            headers: {
                //Bearer authentication é o token authentication, um Schema para autenticação HTTP 
                //O Bearer identifica recursos protegidos por um OAuth2.
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setGeneros(dados);
            })
            .catch(err => console.error(err));
    }

    const listar = () => {
        fetch('http://localhost:5000/api/Filmes', {
            method: 'GET',
            headers: {
                //Bearer authentication é o token authentication, um Schema para autenticação HTTP 
                //O Bearer identifica recursos protegidos por um OAuth2.
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })

            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
            })
            .catch(err => console.error(err));
    }

    const trash = (id: number) => {
        if (window.confirm('Deseja excluir o Filme?')) {
            fetch('http://localhost:5000/api/Filmes/' + id, {
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token-filmes')
                }

            })
                .then(response => response.json())
                .then(dados => {
                    listar();
                })
                .catch(err => console.error(err));
        }
    }

    const refresh = (id: number) => {
        fetch('http://localhost:5000/api/Filmes/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdFilme(dados.idFilme);
                setFilme(dados.titulo);
            })
            .catch(err => console.error(err));
    }

    const salvar = () => {
        var teste=parseInt(genero)
        const form = {
            titulo: Filme,
            IdGenero:teste
        };

        const method = (idFilme === 0 ? 'POST' : 'PUT');
        const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/Filmes' : 'http://localhost:5000/api/Filmes/' + idFilme);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Filme cadastrado');
                setIdFilme(0);
                setFilme('');
                listar();
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header description={"Faça o login e acesse a Coletânea"} />
            <main>
                <div className="imgTitulo">
                    <h2>Filme</h2>
                    <img className="theater" src={imgTheater} alt="" />
                </div>
                <div className="ListGenero">
                    <h3>Lista de filmes</h3>
                    <div className="Tabela">
                        <table>
                            <tbody>
                                {
                                    Filmes.map((item: any) => {
                                        return (
                                            <tr key={item.idFilme}>
                                                <td>{item.idFilme}</td>
                                                <td className="nometd">{item.titulo}</td>
                                                <td>
                                                    <img className="icon" src={imgRefresh} onClick={() => refresh(item.idFilme)} alt="Atualizar" />
                                                    <img className="icon" src={imgTrash} onClick={() => trash(item.idFilme)} alt="Deletar" />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <form onSubmit={event => {
                        event.preventDefault();
                        salvar();
                    }}>
                        <div className="form">
                            <Input name="filme" label="Cadastrar filme" value={Filme} onChange={e => setFilme(e.target.value)} />
                            <select name="genero" onChange={e => setGenero(e.target.value)} value={genero}>
                                <option value="0">Selecione um Gênero</option>
                                {
                                    generos.map((item: any) => {
                                        return <option value={item.idGenero}>{item.nome}</option>
                                    })
                                }
                            </select>
                            <div className="btn">
                                <Button value="Salvar" />
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Filme;