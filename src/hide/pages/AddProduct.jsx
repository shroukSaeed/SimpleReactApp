import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import {getProductById , addProduct , editProduct} from '../API/productAPI'
export default function AddProduct() {

    const {id} = useParams();

    const navigate = useNavigate()

    const[product , setProduct] = useState( {
        productName : '',
        price : '',
        Quantity: '',
        hasDiscount: false
    } )
    

    useEffect(()=>{
        if( id != 0 ){
            const fetchData = async()=>{
                const response = await getProductById(id)
                setProduct(response.data)
            }
            fetchData()
        }
    },[])

    const addProduct =async (e)=>{
        e.preventDefault()
        // console.log(product);
        if(id==0){
            await addProduct(product)
        }else{
            //edit
            await editProduct(id , product)
        }
        navigate('/products')

    }

    const changeHandler = ( e )=>{
        if(e.target.name == 'hasDiscount'){
            setProduct({
                ...product,
                [e.target.name] : e.target.checked
            })
        }else{
            setProduct({
                ...product,
                [e.target.name]: e.target.value
            })
        }
    }
    return (
        <div className='bg-dark mt-5 text-light w-50 m-auto p-5'>
            <h1>Form</h1>
            <Form onSubmit={addProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control  type="text" placeholder="Enter product name"  name='productName' value={product.productName} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" name='price' value={product.price} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Quantity" name='Quantity' value={product.Quantity} onChange={changeHandler}/>
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" name='hasDiscount' checked={product.hasDiscount} onChange={changeHandler}/>
                </Form.Group>
                <Button variant="secondary" type="submit" >
                    {(id==0) ?'Add New Product' : 'Edit product'}
                </Button>
            </Form>
        </div>
    )
}
