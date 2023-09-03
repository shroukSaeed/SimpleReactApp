import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import {getProducts , deleteProduct} from '../API/productAPI'
import { NavLink, useNavigate} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


export default function Products() {


    const [isError , isLoading , products , setProducts] = useFetch(getProducts)

    const navigate = useNavigate()

    const AddProduct = () => {
        navigate("/products/0/edit")
    }

    const deleteProductHandler = async (id) => {
        await deleteProduct(id)
        let newProducts = products.filter((product) => product.id != id);
        setProducts(newProducts)

    }
    return (
        <div className='alert alert-secondary'>
            <h1 className='text-dark text-center p-4 '>Products</h1>

            <Table hover>
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.Quantity}</td>
                                <td>
                                    <NavLink to={`/products/${product.id}`}><i className="fs-4 mx-1 text-warning bi bi-eye-fill"></i></NavLink>
                                    <NavLink to={`/products/${product.id}/edit`} ><i className="fs-4 mx-1 text-primary bi bi-pencil-square"></i></NavLink>
                                    <i onClick={() => { deleteProductHandler(product.id) }} className="fs-4 mx-1 text-danger bi bi-trash"></i>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <button className='btn btn-primary' onClick={AddProduct}>Add Product</button>
            {/* <NavLink className='nav-link' to="/product/0/edit">Add Product</NavLink> */}

        </div>
    )
}
