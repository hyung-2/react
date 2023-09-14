import React from "react";
import './Product.css'

function Product({ id, name, price, description, image_link, product_type }){

  return(
    <>
      <div className="product-box" key={id}>
        <div className='imgbox'>
          <img src={image_link} alt={name}></img>
        </div>
        <h3>{name} ({price})</h3>
        <p>{description}</p>
        <p>{product_type}</p>
      </div>
    </>
  )
}

export default Product