import "./App.css";

// src/App.jsx

import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
      title="Taco Vita" 
      img="https://images.pexels.com/photos/15486370/pexels-photo-15486370/free-photo-of-mexican-tacos-ona-serving-dish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      price={10.99}
      description="Tacom cu vita si legume proaspete"
      />
      <Product 
      title="Taco Pork" 
      img="https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      price={8.99}
      description="Tacom cu pork si legume proaspete"/>
      <Product
      title="Taco Pui" 
      img="https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      price={9.99}
      description="Tacom cu pui si legume prajita si castraveti marinati"/>
    </div>
  );
}


// export default App;
