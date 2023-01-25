import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Calculation.css'

const Calculation = () => {

    const [productPrice, setProductPrice] = useState();
    const [val, setValue] = useState();
    const [returnValue, setReturnValue] = useState();

    const { selectedProduct } = useSelector(state => ({
        selectedProduct: state.productListReducer.selectedProduct, 
    }));

    const sumOfPricing = (a, b) => a + b;

    const reset = () => {
        window.location.reload()
    }
    
    useEffect(() => {
        setProductPrice(selectedProduct.reduce(sumOfPricing, 0));
        setReturnValue(val - productPrice);
        return;
    }, [productPrice, selectedProduct, val])

    

    return (
        <div className='calculateArea'>
            <h1>Product List</h1>
            <div className='calculateAreaWrapper'>
                <div className='calculateAreaInner'>
                    <label>Product Price: <span className='valueOutput'>{productPrice}</span></label>
                    <label>Customer Given:
                        <input
                            type='text'
                            value={undefined}
                            placeholder='Enter Amount'
                            onChange={(e) =>
                                setValue(() => (e.target.value))
                            }
                        />
                    </label>
                    <Button variant="warning" onClick={reset}>Reset</Button>
                    <div className='returnValue'>
                        {productPrice <= val ? <label>Amount to Return: <span> {returnValue} </span> </label> : null }
                        {productPrice > val && val !== '' && productPrice !== val ? <p style={{fontSize: 20}}> Give more money &#128515;</p> : null}
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Calculation;