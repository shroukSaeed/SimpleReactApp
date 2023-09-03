import axios from "axios"

const URL = 'http://localhost:3005/movies'

const getMovies = () => axios.get(URL)


const getMovieById = (movieId) => axios.get(`${URL}/${movieId}`)


const addMovie = (movie) => axios.post(URL, movie);


const editMovie = (movieId, movie) => axios.put(`${URL}/${movieId}`, movie)


const deleteMovie = (movieId) => axios.delete(`${URL}/${movieId}`)


export {
    getMovies,
    getMovieById,
    addMovie,
    editMovie,
    deleteMovie
}