import React from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../../../assets/images/cinema.png';
import Button from '../../../components/button';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index'
import '../home/style.css'

function Home() {
    return (
        <div>
            <Header description={"Bem vindo ao Filme Collections"} />
            <div className="ImageMain">
                <h3>Filmes</h3>
                <img src={LogoMain} alt="Logo do site" />
            </div>

            <div className="ListarFilmes">
                <h3 className="TextoListar">Lista de filmes</h3>
                <br />
                <div className="FilmeGenero">
                    <div >
                        <h4>Titulo</h4>
                        <p>Vingadores</p>
                        <p>Vingadores2</p>
                        <p>Vingadores3</p>
                    </div>
                    <div >
                        <h4>Gênero</h4>
                        <p>Ação</p>
                        <p>Ação</p>
                        <p>Ação</p>
                    </div>
                </div>
            <div className="button_Listar">
            <Button ClassName="bt" text={"Listar Filmes"}/>
            </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;

