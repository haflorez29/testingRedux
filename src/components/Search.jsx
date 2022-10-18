import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchResult } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, searchResult }) => {
  const inputStyle = classNames('input', {
    isHome
  })

  const handleChange = e => {
    searchResult(e.target.value)
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" onChange={handleChange} className={inputStyle} placeholder="Buscar..." />
    </section>
  )
};

const mapDispatchToProps = {
  searchResult,
};

export default connect(null,mapDispatchToProps)(Search);