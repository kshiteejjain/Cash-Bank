import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Calculation.css'

const Calculation = () => {

    const { selectedProduct } = useSelector(state => ({
        selectedProduct: state.productListReducer.selectedProduct
    }));
    const [productPrice, setProductPrice] = useState();
    const [val, setValue] = useState();
    const [returnValue, setReturnValue] = useState();

    useEffect(() => {
        setProductPrice(selectedProduct)

    }, [selectedProduct])

    const checkValue = () => {
        setReturnValue(val - productPrice)
    }


    return (
        <div className='calculateArea'>
            <h1>Product List</h1>
            <div className='calculateAreaWrapper'>
                <div className='calculateAreaInner'>
                    <label>Product Price: <span className='valueOutput'>{productPrice}</span></label>
                    <label>Customer Given:
                        <input
                            type='text'
                            value={val}
                            placeholder='Enter Amount'
                            onChange={(e) =>
                                setValue(() => (e.target.value))
                            }
                        />
                    </label>
                    <Button variant="warning" onClick={checkValue}>Check Now</Button>
                    <div className='returnValue'>
                        {returnValue && productPrice < val ? <label>Amount to Return: <span> {returnValue}</span> </label> : null}
                        {returnValue && productPrice > val ? <p style={{fontSize: 20}}> give more money &#128515;</p> : null}
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Calculation;