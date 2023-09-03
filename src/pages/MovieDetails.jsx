import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function MovieDetails() {
  let [movie, setMovie] = useState(null)
  const { id } = useParams()

  const URL = `http://localhost:3005/movies/${id}`

  useEffect(() => {

    const fetchData = async () => {
      let response = await axios.get(URL)
      setMovie(response.data);
    }

    fetchData();
  }, [])

  const navigate = useNavigate();

  const BacktoHome = () => {
    navigate('/')
  }
  return (
    <div className='alert alert-dark text-center'>
      <h1>Movie Id : {id} </h1>

      <img src={movie?.imgSrc} width={'50%'} alt="" />
      <p>Product Name :{movie?.movieName}</p>
      <p>Director :{movie?.director}</p>
      <p>Product Quantity : {movie?.author}</p>


      <button className='btn btn-dark' onClick={BacktoHome}>Back To Home</button>
    </div>
  )
}
