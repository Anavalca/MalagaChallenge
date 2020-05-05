import React from 'react';
import '../stylesheets/App.scss';
import Landing from './Landing';
// import errorImg from '../images/MortySad.gif'
// import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    // const { data, value, isFound, ischeckedAlien, ischeckedHuman, theme, ischeckedFemale } = this.state
    return (
      <div className="App">
       <header>
         <p className="logo">#ComparteAlegría</p>
         <p className="video">Ver vídeo<i class="far fa-play-circle"></i></p>
       </header>
       <Landing/>
      </div>
    );
  }
}

export default App;
