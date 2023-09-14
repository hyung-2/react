import React, { Component, useMemo, useRef, useState, useCallback, useReducer, useEffect } from 'react';
import './App.css';
import Button from './Button'
import ProductList from './ProductList'
import Modal from './Modal'
import Nav from './Nav'

const menu = [
  {'HOME' : ['홈', '홈홈', '홈홈홈']},
  {'ABOUT' : ['회사소개', '제품소개', '아몰라']},
  {'CONNECT' : ['연락처1', '연락처2', '연락처3', '연락처4']},
]

const initialState = {
  toggle: false,
  products: [],
  keyword: '',
  close: true,
}

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_TOGGLE':
      return  !action.toggle //toggle반전
    case 'SEARCH_WORD':
      return //keyword뽑기
    case 'FETCHING':
      return action.products
    default:
      return state 
  }
}


function App(){
  const [ state, dispatch ] = useReducer(reducer, initialState)
  console.log(state)
  const { toggle, products, keyword, close } = state
  console.log(products)

  const changeToggle = useCallback(() => {
    dispatch({
      type: 'CHANGE_TOGGLE',
      toggle,
    })
  }, [])

  const searching = useCallback((keyword, e) => {
    dispatch({
      type: 'SEARCH_WORD',
      keyword,
    })
  }, [])

  const handleScroll = () => {
    const nav = document.querySelector('nav')
    window.pageYOffset > 100 ? nav.classList.add('shadow') : nav.classList.remove('shadow')
  }

  const totop = () => {
    return window.scrollTo({top:0, behavior: 'smooth'})
  }

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res => res.json())
    .then(result => {
      console.log(result)
      dispatch({
        type: 'FETCHING',
        products: result
      })
      dispatch({
        type: 'CLOSE_MODAL',
        close
      })
    })
  })
  console.log(products)
  const sortProducts = [...products]
  const copyProducts = [...products]
  const filtered = copyProducts.filter((pro) => {
    const lowerName = pro.name.toLowerCase()
    const upperName = pro.name.toUpperCase()
    return lowerName.includes(keyword) || upperName.includes(keyword)
  })



  return(
    <>
      <Nav toggle={toggle} items={menu} changeToggle={changeToggle} ></Nav>
      {keyword === '' ?
        toggle ? 
        <ProductList products={sortProducts.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={products}/>  
        :
        toggle ? 
        <ProductList products={filtered.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={filtered}/>
      }
      <Modal close={close}>데이터 로드 완료!</Modal>
      <Button btnclass='totop' totop={totop}>To top</Button>
    </>
  )
}


export default App;



