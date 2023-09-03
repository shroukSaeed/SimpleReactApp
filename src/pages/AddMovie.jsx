import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById, addMovie, editMovie } from '../API/movieAPI'
export default function AddMovie() {

    const { id } = useParams();

    const navigate = useNavigate()

    const [movie, setMovie] = useState({
        id: '',
        movieName: " ",
        director: "",
        imgSrc: "",
        author: ""
    })


    useEffect(() => {
        if (id != 0) {
            const fetchData = async () => {
                const response = await getMovieById(id)
                setMovie(response.data)
            }
            fetchData()
        }
    }, [])

    const AddMovie = async (e) => {
        e.preventDefault()
        // console.log(movie);
        if (id == 0) {
            await addMovie(movie)
        } else {
            //edit
            await editMovie(id, movie)
        }
        navigate('/movies')

    }

    const changeHandler = (e) => {

        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })

    }
    return (
        <div className='alert alert-dark p-4'>
            <div className='bg-dark my-5 text-light w-50 m-auto p-5'>
                <h1>Form</h1>
                <Form onSubmit={AddMovie}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Movie name" name='movieName' value={movie.movieName} onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Director</Form.Label>
                        <Form.Control type="text" placeholder="Director" name='director' value={movie.director} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>img</Form.Label>
                        <Form.Control type="text" placeholder="Image" name='imgSrc' value={movie.imgSrc} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author" name='author' value={movie.author} onChange={changeHandler} />
                    </Form.Group>


                    <Button variant="secondary" type="submit" >
                        {(id == 0) ? 'Add New movie' : 'Edit movie'}
                    </Button>
                </Form>
            </div>
        </div>
    )
}
