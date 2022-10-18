import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, searchResult }) => {
  console.log(searchResult)
  return (
    <>
      <Header/>
      <Search isHome />
      {searchResult.length > 0 && (
        <Categories title='Busqueda'>
          <Carousel>
            {searchResult.map(item => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

// export default connect(props, actions)(Home);
const mapStateToProps = (state) => {
  // solo elementos que necesito del estado
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchResult: state.searchResult,
  };
};

export default connect(mapStateToProps, null)(Home);

