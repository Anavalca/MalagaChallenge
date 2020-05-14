import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleShowVideo = this.handleShowVideo.bind(this);
        this.handleHideVideo = this.handleHideVideo.bind(this);
        this.state = {
            isOpenVideo: false,
        }
    }

    handleScroll() {
        window.scrollTo(0, 900)
    }

    handleShowVideo() {
        this.setState(prevState => {
            return {
                isOpenVideo: !prevState.isOpenVideo
            }
        })
    }

    handleHideVideo() {
        this.setState({
            isOpenVideo: false
          });
    }

    render() {
        const {isOpenVideo} = this.state;
        return (
            <div className='wrapperLanding'>
                <div className='backgroundFilter'>
                    <header>
                        <p title='Comparte Alegría' className="logo">#ComparteAlegría</p>
                        <nav className='menu'>
                            <p className="video" onClick={this.handleShowVideo}>Ver vídeo<i className="far fa-play-circle"></i></p>
                            <p className="characters" onClick={this.handleScroll} >Buscadores de alegría</p>
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
                    <div className={`video_PopUp ${isOpenVideo === true ? '' : 'hidden'}`}>
                     <i className="far fa-times-circle" onClick={this.handleHideVideo}></i>
                     <ReactPlayer 
                        url="https://www.youtube.com/watch?v=A8iAHKUnKDs&feature=emb_logo" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Landing;