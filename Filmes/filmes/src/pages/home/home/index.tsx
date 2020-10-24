import React from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../../../assets/images/cinema.png';
import LogoMainB from '../../../assets/images/theater.png';
import Footer from '../../../components/footer';
import Header from '../../../components/header/index'
import '../home/style.css'

function Home() {
    return (
        <div>
            <Header description={"Conheça nossa Coletânea"} />
            <div className="TituloStart">
                <h2>Monte sua coletânea de filmes...</h2>
                <p>Lorem ipsum imperdiet congue dolor leo blandit eget suscipit facilisis sagittis,ipsum congue dictum mollis faucibus lorem aenean vulputate class eget, </p>
                <p>facilisis semper quam mattis lacinia lacus porta justo in.sagittis ultrices ut cubilia praesent augue vitae ipsum, urna iaculis adipiscing proin donec potenti,</p>
                <p>conubia erat pretium eleifend pellentesque morbi. </p>
            </div>
            <div className="Main">
                <div className="Column1">
                    <img src={LogoMain} alt="Logo do site" />
                    <h2>Filmes</h2>
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit,</p>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    <p>nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.</p>
                </div>

                <div className="Column2">
                    <img src={LogoMainB} alt="Logo do site" />
                    <h2>Filmes</h2>
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit,</p>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    <p>nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.</p>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default Home;

