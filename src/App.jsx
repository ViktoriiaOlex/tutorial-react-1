import ProductCard from './Components/ProductCard/ProductCard';

import MailBox from './Components/MailBox/MailBox';

import "./App.css";
import { useState } from 'react';

const productData = [
  {
    id: "1_productCard",
    productName:"Taco Vita",
      img:"https://images.pexels.com/photos/15486370/pexels-photo-15486370/free-photo-of-mexican-tacos-ona-serving-dish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price:10.99,
      quantity: 4,
      hasDiscount: true,
      description:"Taco cu vita si legume proaspete",
  },
  {
    id: "2_product",
    productName:"Taco Pork",
      img:"https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price:8.99,
      quantity: 7,
      hasDiscount: false,
      description:"Taco cu pork si legume proaspete",
  },
  {
    id: "3_productCard",
    productName:"Taco Pui",
      img:"https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price:9.99,
      quantity: 2,
      hasDiscount: false,
      description:"Taco cu pui si legume proaspete",
  }
];

const emailsData = [
  {id: "1", email: "foo@bar.com"},
  {id: "2", email: "falexa65@bar.com"},
  {id: "3", email: "rs1963@bar.com"},
];

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 0; 
  const [emails, setEmails] = useState(emailsData);
  const [showMailBox, setShowMailBox] = useState(false);

  const onLogEmail = () => {
    console.log("Email was sent");
    setCounter((prevState) => prevState + 1);

    //setCounter(counter + 1);❌
    // counter = counter +1; ❌
    // setCounter((prevState) => prevState + 1) ✅
  }

  const handleDelete = (mailId) => {
    console.log("mailId: ", mailId);
    setEmails((prevState) => prevState.filter((email) => email.id !== mailId));
    // setEmails(emails.filter(email => email.id !== mailId));
    // ex.
    //mailId = 3
    // [{id: 1}, {id: 2}, {id: 3}]
    // [{id: 1}, ] 1 !== 3 // true
    // [{id: 1}, {id: 2}] 2 !== 3 // true
    // [{id: 1}, {id: 2}] 3 !== 3 // false
    }

    const handleToggleMailBox = () => {
      setShowMailBox((prevState) => !prevState);
    };

  return (
    <div>
      {productData.map((item => {
const isPromotional = item.quantity <= 2; 

        return (
        <ProductCard 
        key={item.id}
        productName={item.productName} 
        img={item.img}
        price={item.price}
        quantity={item.quantity}
        hasDiscount={item.hasDiscount}
        description={item.description}
        promotional={isPromotional}

        // promotional={item.quantity <= 2 ? true : false} переробляємо на константу і пропс
        />
        );
      }))}
      
      {/*
<ProductCard
      productName="Taco Vita" 
      img="https://images.pexels.com/photos/15486370/pexels-photo-15486370/free-photo-of-mexican-tacos-ona-serving-dish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      price={10.99}
      hasDiscount={false}
      description="Tacom cu vita si legume proaspete"
      />
      <Product 
      productName="Taco Pork" 
      img="https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      price={8.99}
      hasDiscount={false}
      description="Tacom cu pork si legume proaspete"/>
      <Product
      productName="Taco Pui" 
      img="https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      price={9.99}
      hasDiscount={true}
      description="Tacom cu pui si legume prajita si castraveti marinati"/>
    */} 

<h2 style={{color: "red"}}>Emails Counter: {counter} </h2>
<button onClick={handleToggleMailBox}>
        {showMailBox ? "Hide" : "Show"} MailBox
</button>

{showMailBox ? (<MailBox 
emails={emails}
emailCounter={counter} 
onLogEmail={onLogEmail} 
onDeleteEmail={handleDelete}/>
) : null}

    </div>
  );
}

export default App;
