import React from 'react'
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  // esto lo envia router cuando se crea la ruta
  const {id} = props.match.params
  return (
    <div className='Player'>
      <video controls autoPlay> 
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        {/* recibo por props props.history al tener encapsulada en el browserRouter */}
        <button type='button' className='button' onClick={() =>props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  )
}

export default Player