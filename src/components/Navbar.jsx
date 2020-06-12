import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <header className="App-header">

            <div className='storeName'>
                <p className='name1'>SMALL</p><p className='name2'>ELECTRONICS</p>
                <p className='location'>Dallas, TX</p>
            </div>
            
            <div className='links'>
                <div className='pageLink'>
                    <Link to='/'>HOME</Link>
                </div>

                <div className='pageLink'>
                    <Link to='/cart'>CART</Link>
                </div>
            </div>

        </header>
    )
}

export default Navbar;