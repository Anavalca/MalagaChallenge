import React from 'react';
import aventurera from '../images/aven.jpg';
import cultureta from '../images/cult.jpg';
import naturista from '../images/nat.jpg';
import gourmet from '../images/gout.jpg';
import fiestera from '../images/party.jpg';

const Character = () => {
  return (
    <div className='characterWrapper' >
        <img alt='personaje'src={aventurera}></img>
        <img alt='personaje'src={cultureta}></img>
        <img alt='personaje'src={naturista}></img>
        <img alt='personaje'src={gourmet}></img>
        <img alt='personaje'src={fiestera}></img>      
    </div>
  )
}

export default Character;