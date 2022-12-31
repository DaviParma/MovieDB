import { Link } from "react-router-dom";
import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
          <div className='bg-transparent px-2 py-3 rounded-md   hover:scale-105 transition duration-500'>
                <img className='rounded-2xl mx-auto h-[300px] w-[240px]' src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}></img>
          </div>
    </Link>
  );
}

export default MovieCard;
