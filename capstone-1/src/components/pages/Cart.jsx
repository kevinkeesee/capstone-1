import React, {useState} from 'react';
import { InputGroup, FormControl} from 'react-bootstrap';

const Cart = ({cart}) => {
    
    // Simple number-oriented function to aid with adding the prices
    const arrTotal = (arr) => {
        let total = 0;
        for (const i of arr){
            total += Number(i);
        }
        return total.toFixed(2);
    }

    // And speak of the devil, here's my middle step to make setTotalCost function simpler.
    const [prices, setPrices] = useState(cart.map(current => current.price));

    const [totalCost, setTotalCost] = useState(arrTotal(prices));

    // Sales Tax in Texas is 6.25%
    const [salesTax, setSalesTax] = useState((totalCost * 0.0625).toFixed(2));
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return(
        <div className='cartGrid'>
            <div className='cartSummary'>

                <div className='cartTitle'>
                    <p className='cartTitleText'>Cart Items</p>
                </div>

                {/* List to the side showing the quantities of items and the total cost */}
                <div className='quantities'>
                    {cart.map((current, index) => 
                        <div className='qItem' key={index.toString()}>
                            <p className='qItemName'>{current.name}</p>

                            {/* I made this an arrow function to keep it within the scope of the current element and call its values, 
                                there's probably a way to pass the value of the current element with onSubmit but I don't know any. */}
                            <form className='qInput' onSubmit={
                                e => {e.preventDefault()
                                    current.quantity = input
                                    {/* Update all values on submit */}
                                    setPrices(cart.map(c => c.price * c.quantity))
                                    setTotalCost(arrTotal(prices))
                                    setSalesTax((totalCost * 0.0625).toFixed(2))
                                }
                                }>

                                {/* Used the handy defaultValue to make it a fun interactive text field. */}
                                <InputGroup size='sm' className="mb-3">
                                    <FormControl
                                        type='number'
                                        min='0'
                                        aria-label="Update quantity"
                                        aria-describedby="basic-addon2"
                                        defaultValue = {current.quantity}
                                        onChange = {onChange}
                                    />
                                </InputGroup>
                            </form>
                        </div>
                    )}
                </div>
                <div className='totals'>
                    <div className='totalRow'>
                        <p className='totalText'>Subtotal</p><p className='totalText'>&#36;{totalCost}</p>
                    </div>
                    <div className='totalRow'>
                        <p className='totalText'>Tax</p><p className='totalText'>&#43;  &#36;{salesTax}</p>
                    </div>
                    <div className='grandTotal'>
                        <p className='totalText'>Grand Total</p><p className='totalText'>&#36;{(Number(totalCost) + Number(salesTax)).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            
            {/* Bit of decoration, showing an alternative view of the item panels */}
            <div className='cartItems'>
                {cart.map((current, index) => 
                <div className='cartItem' key={index.toString()}>
                    <div className='cartThumbnail'>
                        <img src = {process.env.PUBLIC_URL + `./images/${current.image}.png`} />
                    </div>
                    <div className='cartSpecs'>
                        <p className='productName'>{current.name}</p>
                        <p>UPC: {current.upc}</p>
                        <p>Category: {current.category}</p>
                        <p>Manufactured by {current.manufacturer}</p>
                        <p className='price'>&#36;{current.price}</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Cart;