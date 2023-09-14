import React from "react";

function Child({name}){
  console.log('자식랜더링')
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export default Child