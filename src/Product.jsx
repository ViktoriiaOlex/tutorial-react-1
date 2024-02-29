// src/Product.jsx

const Product = (props) => {
    return (
    <div>
        <img 
        width={300}
        src={props.img}
        alt="" />
    <h2>{props.title}</h2>
    <h3>Price: ${props.price}</h3>
    <p>{props.description}</p>

    <button type="button">Add to cart</button>
    <button type="button">😍</button>

    </div>
    );
    };
    
    export default Product;
    