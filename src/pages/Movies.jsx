import React, { useEffect, useState } from 'react'
import { getMovies, deleteMovie } from '../API/movieAPI'
import { NavLink, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


export default function Movies() {


    const [isError, isLoading, movies, setMovies] = useFetch(getMovies)

    const navigate = useNavigate()

    const addMovie = () => {
        navigate("/movies/0/edit")
    }

    const deleteMovieHandler = async (id) => {
        await deleteMovie(id)
        let newMovies = movies.filter((movie) => movie.id != id);
        setMovies(newMovies)

    }
    return (
        <div className='alert alert-dark '>
            <h1 className='text-dark text-center p-4 '>Movies</h1>
            <div className="container">
                <div className="row">

                        {movies && movies.map((movie) => {
                            return (
                                <div className='col-md-3' key={movie.id}>
                                    <div className="img-holder  img-fluid" >
                                        <img src={movie.imgSrc}  className='w-100  img-fluid' alt="" />
                                    </div>
                                    <h5>Movie Name: {movie.movieName}</h5>
                                    <p>Director:{movie.director}</p>
                                    <p>Author:{movie.author}</p>
                                    <NavLink to={`/movies/${movie.id}`}><i className="fs-4 mx-1 text-warning bi bi-eye-fill"></i></NavLink>
                                    <NavLink to={`/movies/${movie.id}/edit`} ><i className="fs-4 mx-1 text-primary bi bi-pencil-square"></i></NavLink>
                                    <i onClick={() => { deleteMovieHandler(movie.id) }} className="fs-4 mx-1 text-danger bi bi-trash"></i>
                                </div>
                            )
                        })}
                    
                    <button className='btn btn-primary' onClick={addMovie}>Add Movies</button>

                </div>

            </div>



        </div>
    )
}
