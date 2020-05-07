import React from 'react';
import aventurera from '../images/aven.jpg';
import cultureta from '../images/cult.jpg';
import naturista from '../images/nat.jpg';
import gourmet from '../images/gout.jpg';
import fiestera from '../images/party.jpg';

const Character = () => {
  return (
    <div >
        <img src={aventurera}></img>
        <img src={cultureta}></img>
        <img src={naturista}></img>
        <img src={gourmet}></img>
        <img src={fiestera}></img>      
    </div>
  )
}

export default Character;