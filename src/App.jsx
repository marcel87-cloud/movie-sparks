import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Movie_list from './components/movie_list/movie_list';
import Movie_card from './components/movie_list/Movie_card';

const App = () => {
    return (
        <div className = 'app'>
            <Navbar />

            <Movie_list />
        </div>
    )
}

export default App;