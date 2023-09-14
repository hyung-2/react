import React from "react";
import './Dropdown.css'

function Dropdown({items, id, clickMenu}){
  console.log(items)
  const drop = items.map(item => {
    // console.log(item)
    // console.log(Object.keys(item)[0])
    const result = Object.values(item)[0].map(menu => {
      // console.log(menu)
      return(
        <> 
          <div className="drop-menu">{menu}</div>
        </>
      )

    })
  console.log(clickMenu)
  //   const clickMenu = (e) => {
  //     console.log(closeMenu)
  //     const menus = document.querySelectorAll('.menu')
  //     console.log(e.target)
  //     console.log(e.target.className)
  //     console.log(menus)
  //     console.log(e.target.nextElementSibling)
  //     if(e.target.className === 'menu'){
  //       return(
  //         e.target.nextElementSibling.classList.add('dropflex'),
  //         e.target.classList.add('menucolor')
  //       )
  //     }else{
  //       return(
  //         e.target.nextElementSibling.classList.remove('dropflex'),
  //         e.target.classList.remove('menucolor')
  //       )
  //     }
  // }
    return (
    <div className="menu-container" key={id}>
      <div className="menu" onClick={clickMenu}>{Object.keys(item)[0]}</div>
      <div className="drop">{result}</div>
    </div>
    )
  })
  return drop
}


export default Dropdown