import loading_spinner from "./../assets/loading_spinner.gif";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import NavBar from "./../Components/NavBar";
import axios from "axios";


async function getMovie(movieId) {
  const res =
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}
    `);
  return res.data;
}


function MoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("loading");
  const navigate = useNavigate();



  useEffect(() => {
    getMovie(movieId)
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => {
        alert(err);
        navigate("/", { replace: true });
      });
  });

  if (movie === "loading" || !movie) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <img src={loading_spinner} alt='loading' />
      </div>
    );
  }

  return (
  <div>
        <NavBar />
        <div className='container flex mx-auto   text-white h-screen justify-start items-center  max-md:hidden'>
            <div className="px-12 bg-slate-900 rounded-2xl  ">
                <div className='flex my-10  max-md:grid'>
                      <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt='poster' className='mx-auto  rounded-2xl h-[37.5rem] w-[25rem]  hover:scale-105 transition duration-500 max-lg:h-[25rem] max-lg:my-10'/>
                    <div className="grid">
                      <h1 className='text-center text-3xl py-5 text-white font-semibold max-lg:text-1xl max-lg:px-10'>{movie.title}</h1>
                      <hr className="text-center mx-12"/>
                      <p className="text-center mx-40 text-lg max-xl:mx-20  max-lg:mx-5"><span className="font-bold text-xl">Sinopse:</span> {movie.overview}</p>
                      <hr className="text-center mx-12"/>
                            <div className="flex justify-center text-lg  ">
                              <p className="px-16 max-lg:px-8"><span className="font-semibold">Release date:</span> {movie.release_date}</p>
                              <p className="px-16 max-lg:px-8">⭐ {Math.floor(movie.vote_average*10)/10}</p>
                            </div>
                   </div>
                </div>
            </div>
        </div>

        <div className='invisible max-xl mx-auto h-full w-full text-white max-md:visible'>
              <div className="px-12 py-12 bg-slate-900 ">
                  <div className=''>
                            <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt='poster' className='mx-auto  rounded-3xl h-[30rem] w-[20rem] py-4  hover:scale-105 transition duration-500'/>
                        <div className="">
                                    <h1 className='text-center text-3xl py-5 text-white font-semibold max-lg:text-1xl max-lg:px-10'>{movie.title}</h1>
                                    <hr className="text-center mx-12 my-4"/>
                                    <p className="text-center mx-40 text-lg max-xl:mx-20  max-lg:mx-5"><span className="font-bold text-xl">Sinopse:</span> {movie.overview}</p>
                                    <hr className="text-center mx-12  my-4"/>
                              <div className="flex justify-center text-lg py-12 ">
                                  <p className="px-16 max-lg:px-8"><span className="font-semibold">Release date:</span> {movie.release_date}</p>
                                  <p className="px-16 max-lg:px-8">⭐ {Math.floor(movie.vote_average*10)/10}</p>
                              </div>
                        </div>
                  </div>
              </div>
        </div>



  </div>










  );
}

export default MoviePage;
