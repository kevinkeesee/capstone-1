import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Items from './components/pages/Items';
import Cart from './components/pages/Cart';
import Navbar from './components/Navbar';
import data from "./inventory";
import './App.css';

const App = () => {

  // JSON file contains an array of objects and gets put into inv
  const [inv, setInv] = useState(data);
  // Search functionality creates a copy of the inv array that gets modified dynamically
  const [searchView, setSearchView] = useState(inv);
  const [input, setInput] = useState('');
  // Passing an array of items to the Cart page
  const [cart, setCart] = useState([]);

  // Functions for handling Items.jsx search functionality
  const onChange = (e) => {
    setInput(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchView(inv.filter(current => 
      current.name.toLowerCase().includes(input.toLowerCase()) ||
      current.category.toLowerCase().includes(input.toLowerCase()) ||
      current.upc === input ||
      current.price === input ||
      current.manufacturer.toLowerCase() === input.toLowerCase()
    ))
  }

  // For the Items.jsx grid elements, takes the current element as parameter to help find in inv[]
  const addToCart = (c) => {
    const addedItem = inv[inv.indexOf(c)];

    // User can only add items once and they start with a quantity of 1
    addedItem.quantity = 1;

    if (!cart.includes(addedItem)){
      cart.push(addedItem)
    }

    console.log(cart)
  }


  return (
    <Router>
      <div className="App">

        {/* Static between pages */}
        <Navbar />

        <div className='App-body'>
          <Route exact path='/'>
            <Items 
              onChange={onChange}
              onSubmit={onSubmit}
              addToCart={addToCart}
              searchView={searchView}
              input={input}
            />
          </Route>

          <Route path='/cart'>
            <Cart
              cart={cart}
            />
          </Route>

        </div>

      </div>
    </Router>
  );

}

export default App;