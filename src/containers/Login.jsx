import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => {
  const [form, setValues] = useState({
    email: '',
  })

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // evita que se envien parametros por url
    e.preventDefault();
    console.log(form)
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input 
            name='email'
            className='input' 
            type='text' 
            placeholder='Correo' 
            onChange={(e) => handleInput(e)}/>
          <input 
            name='password'
            className='input' 
            type='password' 
            placeholder='Contraseña' 
            onChange={(e) => handleInput(e)}/>
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='' />
            {' '}
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='' />
            {' '}
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          {' '}
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  )
};

export default Login;
