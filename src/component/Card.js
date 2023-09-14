import React, { Component } from "react";
import dummyData from './ex'
import './Card.css'

class Card extends Component{
  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  }

  componentDidMount(){
    setInterval(this.increaseCount,1000)
  }
  
  render(){
    const { count } = this.state
    const word = dummyData[Math.floor(Math.random() *dummyData.length )]
    console.log(word)
    return(
      <div className='App'>
        <h1>Flash Card</h1>
        <div className="Card"> 
          <h2>{word.word}</h2>
          <h2>{word.meaning}</h2>
        </div>
      </div>
    )
  }
}

export default Card