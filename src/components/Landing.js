import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='wrapper'>
            <div className='backgroundFilter'>
                <header>
                    <p title='Comparte Alegría' className="logo">#ComparteAlegría</p>
                    <nav className='menu'>
                        <p className="video">Ver vídeo<i class="far fa-play-circle"></i></p>
                        <p className="characters">Buscadores de alegría</p>
                    </nav>
                </header>
                <div className="title_Container">
                    <h1>¿Sabes el origen de tu alegría?</h1>
                    <Link to="/compartirAlegria/Test">
                        <p className='button'>Descúbrelo</p>
                    </Link>
                </div>
                <div className='iconsRRSS'>
                    <i title='Facebook' className="fab fa-facebook"></i>
                    <i title='Instagram' className="fab fa-instagram"></i>
                    <i title='Twitter' className="fab fa-twitter"></i>
                    <i title='Youtube' className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}

export default Landing;