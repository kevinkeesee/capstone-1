import React, {Fragment} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';

const Items = ({onChange, onSubmit, addToCart, searchView, input}) => {

    return (
        <Fragment>
        {/* Searchbar is seperate from the Navbar to prevent use outside Items page */}
        <form className='input' onSubmit={onSubmit}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value = {input}
                    onChange = {onChange}
                />
            </InputGroup>
        </form>
        
        {/* Makes a grid of items with all their relevent info from the inventory file */}
        <div className='invGrid'>
            {searchView.map((current, index) => 
                <div className='invItem' key={index.toString()}>
                    <div className='thumbnail'>
                        <img src = {process.env.PUBLIC_URL + `./images/${current.image}.png`} alt='A cool png'/>
                    </div>
                    <div className='specs'>
                        <p className='productName'>{current.name}</p>
                        <p>UPC: {current.upc}</p>
                        <p>Category: {current.category}</p>
                        <p>Manufactured by {current.manufacturer}</p>
                        <p className='price'>&#36;{current.price}</p>
                        <Button className='add' onClick={() => addToCart(current)}>Add to Cart</Button>
                    </div>
                </div>
            )}
        </div>
        </Fragment>
    )
}

export default Items;