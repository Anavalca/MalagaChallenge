import React from 'react';
import '../stylesheets/App.scss';
import Landing from './Landing';
// import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div className="App">
       <header>
         <p className="logo">#ComparteAlegría</p>
         <nav className='menu'>
          <p className="video">Ver vídeo<i class="far fa-play-circle"></i></p>
          <p className="character">Buscadores de alegría</p>
         </nav>
       </header>
       <Landing/>
      </div>
    );
  }
}

export default App;
