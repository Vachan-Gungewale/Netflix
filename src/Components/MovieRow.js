import React, {useState , useEffect} from 'react'
import axios from "../axios"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

import './MovieRow.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"

function MovieRow({title, fetchUrl, isLargeRow}) {
    const [movies , setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState();

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(request.data.results);
            return request;
        }
        fetchData()
    },[fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.original_title|| movie?.name ||movie?.title || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search)
                
                setTrailerUrl(urlParams.get("v"))
            })
            .catch(error => console.log(error));
            // https://youtube.com/v=fyhgfjksd
        }
    };
  return (
    <div className='row'>
        {trailerUrl && <YouTube className='youtube' videoId={trailerUrl} opts={opts}/>}
        <h3>{title}</h3>
        <div className="row_poster">
            {
                movies.map(movie => (
                    <img 
                    onClick={()=>handleClick(movie)}
                    key={movie.id}
                    className={`row_image ${isLargeRow && "row_post"}`}
                    src={`${baseUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie?.name || movie?.title || movie?.original_name} />
                ))
            }
        </div>
        
    </div>
  )
}

export default MovieRow