import React from 'react';
import Nav from './nav'
import Slider from '../slider'
import Popular from '../popular'
import Movie from './movie'
import Table from './table'

const Home = () => {
    return (

        <div>
            <Nav/>
            <Slider/>
      <Popular/> 
            <Movie/>
    
        </div>
      );
}
 
export default Home;