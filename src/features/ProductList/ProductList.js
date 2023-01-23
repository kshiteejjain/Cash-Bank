import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectedProduct } from './ProductListSlice';
import Table from 'react-bootstrap/Table';

import './ProductList.css';


const ProductList = () => {
    const { products, loading } = useSelector((state) => state.productListReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    
    const seeSummary = (e) => {
        dispatch(selectedProduct(e))
    }

    return (
        <>
            {loading ? 'Loading' :
                <div className='productListArea'>
                    <h1>Product List</h1>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((item) => (
                                <tr key={item.id}  onClick={() => seeSummary(item.price)}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    {/* <td> {item.images.map(img => (
                                    <img src={img} alt={item.id} key={item} className="productImage" />
                                ))
                            }
                            </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}
        </>
    )
};

export default ProductList;