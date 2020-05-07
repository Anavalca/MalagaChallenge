import React from 'react';
import { Link } from 'react-router-dom';

const TestPage = () => {
  return (
    <div className='wrapperTest'>
      <div className='container_A'>
      </div>
      <div className='container_B'>
      </div>
      <div className='questionContainer'>
        <p className="question"><b>Paula</b> descubre su alegría con . . .</p>
      </div>
      <p className='text A'>Aventuras sin límites en las alturas</p>
      <p className='text B'>Un historia única con la brisa del mar</p>
      <Link to="/">
        <i title='Ir a la home' class="fas fa-home home"></i>
      </Link>
    </div>
  )
}

export default TestPage;