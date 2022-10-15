import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames'
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions';

const Header = props => {
  const { user, isLogin, isRegister } = props;
  // para validar si un objeto tiene elementos
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin, 
    isRegister
  })
  
  return (
    <header className={headerClass}>
      {/* el link evita el refresh que genera la etiqueta a */}
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} />
            : <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser &&
            <li><a href='/'>{user.name}</a></li>
          }
          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li> :
            <li><Link to='/login'>Iniciar sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  )
};

/* trae del estado el elemento que se encarga de los usuarios */
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
