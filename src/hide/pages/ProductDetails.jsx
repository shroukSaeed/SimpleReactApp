import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
  let [product, setProduct] = useState( null)
  const { id } = useParams()

  const URL = `http://localhost:3005/products/${id}`

  useEffect(() => {

    const fetchData = async () => {
      let response = await axios.get(URL)
      setProduct(response.data);
    }

    fetchData();
  }, [])

  const navigate = useNavigate();
  const BacktoHome = () => {
    navigate('/')
  }
  return (
    <div className='alert alert-dark text-center'>
      <h1>Product Id : {id} </h1>

      
          <p>Product Name :{product?.productName}</p>
        <p>Product Price :{product?.price}</p>
        <p>Product Quantity : {product?.Quantity}</p>
        
      <button className='btn btn-info' onClick={BacktoHome}>Back To Home</button>
    </div>
  )
}
