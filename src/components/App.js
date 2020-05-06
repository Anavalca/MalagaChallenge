import React from 'react';
import '../stylesheets/App.scss';
// import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header>
          <p title='Comparte Alegría' className="logo">#ComparteAlegría</p>
          <nav className='menu'>
            <p className="video">Ver vídeo<i class="far fa-play-circle"></i></p>
            <p className="characters">Buscadores de alegría</p>
          </nav>
        </header>
        <div className="title_Container">
          <h1>¿Sabes el origen de tu alegría?</h1>
          <p>Descúbrelo</p>
        </div>
        <div className='iconsRRSS'>
          <i title='Facebook' className="fab fa-facebook"></i>
          <i title='Instagram' className="fab fa-instagram"></i>
          <i title='Twitter' className="fab fa-twitter"></i>
          <i title='Youtube' className="fab fa-youtube"></i>
        </div>
      </div>
    );
  }
}

export default App;
