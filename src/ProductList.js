import React,{ Component } from "react";
import Product from './Product'

function ProductList ({products}){
  // console.log(products)
  return(
    products.map(product => {
      return(
        <Product
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        image_link={product.image_link}
        product_type={product.product_type}
        ></Product>

      )
      })
  )
}

export default ProductList