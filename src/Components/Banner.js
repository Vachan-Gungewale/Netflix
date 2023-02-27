import React, { useState, useEffect } from 'react'
import axios from '../axios';
import request from '../request.js';

import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginal)
            setMovie(
                req.data.results[
                Math.floor(Math.random() * req.data.results.length - 1)
                ]
            )
            return request;
        }


        fetchData();

    }, [])
    console.log(movie);

    function truncate(str,n){
       return  str?.length > n ? str.substr(0,n-1)+"...":str
    }

    return (
        <header className='header_banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_content">
                <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(movie?.overview,150)}
                    {/* {movie?.overview} */}
                </h1>
            </div>
            <div className="banner_fadebottom"></div>
        </header>
    )
}

export default Banner