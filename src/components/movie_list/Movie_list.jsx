import React, { useEffect, useState } from 'react';

import './Movie_list.css';
import Movie_card from './Movie_card';
import FilterGroup from './FilterGroup';

const Movie_list = () => {
    const [movies, setmovies] = useState([]);
    const [filtermovies, setFiltermovies] = useState([])
    const [minRating, setminRating] = useState(0);

    useEffect(() => {
        fetchMovies()
    }, []);

    const fetchMovies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=eb8174662ae3f71b6d6117544b96f9c5"
         );
         const data = await response.json();
         setmovies(data.results);
         setFiltermovies(data.results);
    }

    const handleFilter = rate => {
        if(rate === minRating) {
            setminRating(0)
            setFiltermovies(movies)
        } else {
            setminRating(rate);

            const filtered = movies.filter(movie => movie.vote_average >= rate);
            setFiltermovies(filtered);
    };
};
  return (
        <section className="movie_list">
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading">Popular Movies</h2>
                
                <div className="align_center movie_list_fs">
                  
                    <FilterGroup 
                        minRating={minRating} 
                        onRatingClick={handleFilter}
                        ratings={[8, 7, 6]} />

                    <select name="" id="" className="movie_sorting">
                        <option value="">Sort By</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>

                    <select name="" id="" className="movie_sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movie_cards">
                {
                    filtermovies.map(movie => (
                    <Movie_card key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
  );
};

export default Movie_list;