import loading_spinner from "./../assets/loading_spinner.gif";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import MovieCard from "../Components/MovieCard";
import axios from "axios";


async function getMovies(pageNo) {
  const res = await axios.get(
    

    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNo}&include_adult=false`
  );
  console.log(res.data.results);
  return res.data.results;
}
function TrendingPage() {
  const [movies, setMovies] = useState("Loading");
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    getMovies(pageNo)
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, [pageNo]);
  if (movies === "Loading" || !movies || movies.length === 0)
    return (
      <div className='flex items-center justify-center h-screen '>
        <img src={loading_spinner} alt='loading' height='200px' width='200px' />
      </div>
    );
  else
    return (
      <div>
            <NavBar />
          <div className='container mx-auto text-black'>
              <h1 className="text-center text-white font-sans text-3xl my-12 font-medium"><span className="font-bold text-amber-300">Trending </span>Movies</h1>
                  <div className='mt-8 grid grid-cols-5 px-5 py-5  gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 '>
                    {movies.map((movie) => (
                    <MovieCard movie={movie} />
                    ))}
                  </div>
              <div className='container flex justify-center items-center  mt-5 pb-10 font-bold'>
                  <button className=' bg-amber-300 text-black rounded-full px-6 py-1 mr-2 hover:bg-transparent hover:border-amber-300 border-2 border-amber-300'
                    onClick={() => {
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
                    onClick={() => 
                      {
                      if (pageNo < 20) {
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
    );
}

export default TrendingPage;
