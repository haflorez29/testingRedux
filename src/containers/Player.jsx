import React from 'react'
import '../assets/styles/components/Player.scss';

function Player() {
  return (
    <div>
      <video controls autoPlay> 
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-black'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
  )
}

export default Player