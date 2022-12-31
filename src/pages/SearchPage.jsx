import { useState, useEffect } from "react";
import React, { useSearchParams, NavLink } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import NavBar from "../Components/NavBar";
import axios from "axios";


async function getSearchedMovies(pageNo, query) {
    const searchWithQueryURL = await axios.get(
      
  
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${pageNo}&include_adult=false`
    );
    console.log(searchWithQueryURL.data.results);
    return searchWithQueryURL.data.results;
  }
function Search() {

    const [searchParams] = useSearchParams()

    const query = searchParams.get("q")

    


    const [movies, setMovies] = useState("Loading");
    const [pageNo, setPageNo] = useState(1);
    useEffect(() => {
        getSearchedMovies(pageNo, query)
        .then((searchWithQueryURL) => {
          setMovies(searchWithQueryURL);
        })
        .catch((err) => {
          alert(err);
        });
    }, [pageNo, query]);
    if (movies === "Loading" || !movies || movies.length === 0)
      return (
        <div>
            <NavBar />
            <div className='container mx-auto flex items-center justify-center h-screen '>
                <div className="py-12 px-5 bg-slate-900 rounded-2xl">
                    <h1 className="text-4xl text-white font-sans text-center">There is no movie with this result:  <span className="font-bold text-amber-300">{query}</span></h1>
                  <div className='container flex justify-center items-center  mt-10 font-bold'>
                    <NavLink to='/'><button className='text-center items-center justify-center bg-amber-300 text-black text-lg rounded-full px-6 py-1 ml-2  hover:border-amber-300 border-2 border-amber-300'>Return To Home Page</button></NavLink>
                  </div>
                </div>
            </div>
      </div>
      );
    else
      return (
    <div>
          <NavBar />
        <div className='container mx-auto text-black'>
              <h1 className="text-center  text-amber-300 font-bold text-4xl my-12">{query}</h1>
                  <div className='mt-8 grid grid-cols-5 px-5 py-5  gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 '>
                       {movies.map((movie) => (
                       <MovieCard movie={movie} />
                       ))}
                  </div>
            <div className='container flex justify-center items-center  mt-5 pb-10 font-bold'>
                 <button className=' bg-amber-300 text-black rounded-full px-6 py-1 mr-2 hover:bg-transparent hover:border-amber-300 border-2 border-amber-300'
                   onClick={() => 
                   {
                   if (pageNo > 1) 
                   {
                     setMovies("Loading");
                     setPageNo(pageNo - 1);
                   }
                   }}
                 >
                 Previous
                 </button>
                 {pageNo}
                 <button className=' bg-amber-300 text-black rounded-full px-6 py-1 ml-2 hover:bg-transparent hover:border-amber-300 border-2 border-amber-300'
                   onClick={() => {
                   if (pageNo < 20) 
                   {
                     setMovies("Loading");
                     setPageNo(pageNo + 1);
                   }
                   }}
                 >
                 Next
                 </button>
            </div>
        </div>
    </div>
)

}


export default Search