import React from 'react';
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props
  const handleSaveFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration
    })
  }

  const handleDeleteFavorite = (itemID) => {
    props.deleteFavorite(itemID)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          <img
            className="carousel-item__details--img"
            src={plusIcon} alt="Plus Icon"
            onClick={handleSaveFavorite} />
          <img
            className="carousel-item__details--img"
            src={removeIcon} alt="Remove Icon"
            onClick={() => handleDeleteFavorite(id)} />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);