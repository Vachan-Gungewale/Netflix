import React from 'react'
import MovieRow from './MovieRow'
import request from "../request"
import Banner from './Banner'
import Nav from './Nav'

function MoviePage() {
    return (
    <div style={{display:"flex", flexDirection:"column", backgroundColor:"black", color:"white"}}>
        <Nav />
        <Banner />


        <MovieRow title={"NETFLIX ORIGINALS"} fetchUrl={request.fetchNetflixOriginal} isLargeRow/>
        <MovieRow title={"Trending Now"} fetchUrl={request.fetchTrending}/>
        <MovieRow title={"Top Rated"} fetchUrl={request.fetchTopRated}/>
        <MovieRow title={"Action Movies"} fetchUrl={request.fetchActionMovie}/>
        <MovieRow title={"Comedy Movies"} fetchUrl={request.fetchComedyMovie}/>
        <MovieRow title={"Horror Movies"} fetchUrl={request.fetchHorrorMovie}/>
        <MovieRow title={"Romance Movies"} fetchUrl={request.fetchRomanceMovie}/>
        <MovieRow title={"Fantacy"} fetchUrl={request.fetchDocumentaries}/>
    </div>
  )
}

export default MoviePage