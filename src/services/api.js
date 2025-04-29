const API_KEY = "84447261cd646a72083ba5e07e3d0cbd"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPoplularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};
export const searchMovies = async (query) =>{
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)
    }`)
    const data = await response.json()
    return data.results
};

