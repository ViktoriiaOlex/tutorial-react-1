// src/Product.jsx

const Product = ({img, productName, price, description, hasDiscount}) => {
    return (
    <div>
        <img 
        width={300}
        src={img}
        alt="" />
    <h3>{productName} 
    {hasDiscount ? <span>🎁 BIG SALE</span> : null}
    {/* 2 variant-> {hasDiscount && <span>🎁 BIG SALE</span>}
    якщо тут true то буде показуватись те, що після &&, якщо false то ні*/}
    </h3>
    <h4>Price: ${price}</h4>
    <p>{description}</p>

    <button type="button">Add to cart</button>
    <button type="button">😍</button>

    </div>
    );
    };
    
    export default Product;
    