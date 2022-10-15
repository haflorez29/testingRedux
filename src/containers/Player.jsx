import React, { useLayoutEffect } from 'react'
import {connect} from 'react-redux'
import {getVideoSource} from '../actions'
import NotFound from '../containers/NotFound'
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  // esto lo envia router cuando se crea la ruta
  const {id} = props.match.params
  const hasPlaying = Object.keys(props.playing).length > 0
  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        {/* recibo por props props.history al tener encapsulada en el browserRouter */}
        <button
          type='button'
          className='button'
          onClick={() => props.history.goBack()}
        >
          Regresar
        </button>
      </div>
    </div>
  ): <NotFound/>
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);