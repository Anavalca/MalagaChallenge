import React from 'react';
import aventure from '../images/person_aventure.jpg';
import culture from '../images/person_culture.jpg';
import nature from '../images/person_nature.jpg';
import gourmet from '../images/person_gourmet.jpg';
import party from '../images/person_party.jpg';

const Character = () => {
  return (
    <div className='characterWrapper'>
      <div className='character_container'>
        <img alt='personaje' src={aventure}></img>
        <div className='text_character_container'>
          <h2>Alejandra</h2>
          <h4>La aventurera</h4>
          <div className='text_character_subcontainer'>
            <h3 className='subtitle'>Descubre su alegría...</h3>
            <p>Viajando a lugares perdidos donde vivir experiencias, acompañada su mochila.</p>
            <p>El aire libre y estar rodeada de naturaleza le hace sentirse como en casa.</p>
            <p>Dormir bajo las estrellas.</p>
          </div>
        </div>
      </div>
      <div className='character_container'>
        <img alt='personaje' src={culture}></img>
        <div className='text_character_container'>
          <h2>Hugo</h2>
          <h4>El cultureta</h4>
          <div className='text_character_subcontainer'>
            <h3 className='subtitle'>Descubre su alegría...</h3>
            <p>Inundándose de arte en cualquier museo y viendo una obra de teatro de barrio.</p>
            <p>Conociendo curiosidades y leyendas de edifícios históricos.</p>
            <p>Fotografíando rincones de las ciudades con su cámara.</p>
          </div>
        </div>
      </div>
      <div className='character_container'>
        <img alt='personaje' src={nature}></img>
        <div className='text_character_container'>
          <h2>Antonia</h2>
          <h4>La Naturalista</h4>
          <div className='text_character_subcontainer'>
            <h3 className='subtitle'>Descubre su alegría...</h3>
            <p>Leyendo un libro interesante al atardecer en la orilla de la playa.</p>
            <p>Con un baño relajante en un balneario rural.</p>
            <p>Prácticando posturas de yoga en el jardín de su casa.</p>
          </div>
        </div>
      </div>
      <div className='character_container'>
        <img alt='personaje' src={gourmet}></img>
        <div className='text_character_container'>
          <h2>Pedro</h2>
          <h4>El gourmet</h4>
          <div className='text_character_subcontainer'>
            <h3 className='subtitle'>Descubre su alegría...</h3>
            <p>Degustando un buen vino acompañado de aceitunas.</p>
            <p>Visitando nuevos restaurantes y saboreando los platos típicos de cada lugar.</p>
            <p>Jugando al golf el fin de semana.</p>
          </div>
        </div>
      </div>
      <div className='character_container'>
        <img alt='personaje' src={party}></img>
        <div className='text_character_container'>
        <h2>María</h2>
        <h4>La fiestera</h4>
          <div className='text_character_subcontainer'>
            <h3 className='subtitle'>Descubre su alegría...</h3>
            <p>En el concierto de su grupo favorito en un festival</p>
            <p>Bailando con sus amigas en un garito hasta la madrugada.</p>
            <p>Compartiendo un plato de croquetas en el típico bar de tapas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character;