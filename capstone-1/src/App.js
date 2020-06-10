import React, {useState} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import data from "./inventory";
import './App.css';

const App = () => {

  const [inv, setInv] = useState(data);

  const [searchView, setSearchView] = useState(inv);

  const [input, setInput] = useState('');

  const [cart, setCart] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <div className='storeName'>
          <p className='name1'>SMALL</p><p className='name2'>ELECTRONICS</p>
          <p className='location'>Dallas, TX</p>
        </div>

        <form className='input' onSubmit={onSubmit}>
          <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            value = {input}
            onChange = {onChange}
          />
          <InputGroup.Append>
            <Button variant="outline-light">Go</Button>
          </InputGroup.Append>
          </InputGroup>
        </form>

        <div className='cart'>
          <Button variant="outline-light">CART</Button>
        </div>
      </header>

      <div className='App-body'>
        <div className='invGrid'>
          {searchView.map((current, index) => 
            <div className='invItem' key={index.toString()}>
              <div className='thumbnail'>
                <img src = {process.env.PUBLIC_URL + `./images/${current.image}.png`} />
              </div>
              <div className='specs'>
                <p className='productName'>{current.name}</p>
                <p>UPC: {current.upc}</p>
                <p>Category: {current.category}</p>
                <p>{current.quantity > 10 ? '10+' : current.quantity} in stock</p>
                <p>Manufactured by {current.manufacturer}</p>
                <p className='price'>&#36;{current.price}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );

}

export default App;
