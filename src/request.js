const API_KEY = "a7a84a7effc07bec7ba348e87514c1ce";

const request = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginal : `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=14`
}

export default request;