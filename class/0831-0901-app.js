// import logo from './logo.svg';
import './App.css';
// import Person from './Person' //js확장자는 없어도 된다.
// import Todo from './Todo' 
// import Animal from './Animal'
import React, { Component } from 'react';
// import Counter from './Counter';
// import YoutubeVideo from './YoutubeVideo';
import dummyData from './dummyData';
import Child from './Child';

// 배열 (API 데이터) -> JSX 엘리먼트 로 변환

class App extends Component{
  state = {
    name: '부모',
    childName: '자식'
  }

  // changeName = () => {
  //   this.setState({ name: '부모 변경함'})
  // }

  changeName = () => {
    this.setState({name: '부모이름 변경', childName: '자식이름 변경'})
  }
  render(){
    console.log('부모 랜더링')
    const { name, childName } = this.state
    return(
      <div className='App'>
        {/* <h1>{name}</h1>
        <button onClick={this.changeName}>이름변경버튼</button>
        <Counter user='sunrise'/> */}
        {/* <YoutubeVideo videoId="1234567890" videoName="최신가요" videoLength="23765" videoDescription="요즘 뜨고 있는 최신가요 모음"> */}
          {/* 컨텐츠 */}
        {/* </YoutubeVideo> */}
        {/* {dummyData.map(d => { //{안에서는 js문법처럼 쓸수있지만 if문, for문은 안됨}
          return(
            <YoutubeVideo 
            key={d.videoId} 
            //몽고디비id값같은것 입력, 리액트에서 무언가 업데이트 되었을때 해당 아이템을 빠르게 찾음(인덱싱)
            //key가 없는 경우 : 맨 처음 아이템부터 순차적으로 찾아감(느리게 찾는다)
            videoId={d.videoId} 
            videoName={d.videoName} 
            videoLength={d.videoLength} 
            videoDescription={d.videoDescription}
            videoAuthor={d.videoAuthor}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/HjGF1ga1ijc?si=eCAkPbnPYKVrkIt6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </YoutubeVideo>
          )
        })} */}
        <h1>{name}</h1>
        <Child name={childName}></Child>
        <button onClick={this.changeName}>이름변경</button>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       리액트 프로젝트
//       {/* <Person name='사용자' age='27'></Person>  */} {/* = <person/> */}
//       {/* <Todo user='사용자' name='청소하기' done={true} description='퇴근 하고 방 청소하기' ></Todo>  */} {/* 종료태그가 항상 있어야함 */}
//       {/* true false값이나 숫자는 {}안에 써주면 됨 */}
//       {/* <Animal></Animal> */}
//       {/* <Friends name='victoria' age={13} city='seoul'></Friends>
//       <Friends name='sun' age={34} city='busan'></Friends>
//       <Friends name='johseb' age={25} city='busan'></Friends>
//       <Friends name='syleemomo' age={9} city='seoul'></Friends>
//       <Friends name='hannah' age={41} city='daegu'></Friends>
//       <Friends name='shara' age={37} city='seoul'></Friends>
//       <Friends name='martin' age={28} city='daegu'></Friends>
//       <Friends name='gorgia' age={39} city='seoul'></Friends>
//       <Friends name='nana' age={24} city='busan'></Friends>
//       <Friends name='dannel' age={19} city='seoul'></Friends> */}
//       {/* <Person></Person> */}
//       {/* <Book/> */}
//       {/* <Animal type='cat'  name='meyow' size='samll' sound='low' appearence='cute'/> */}
//       <Counter/>
//     </div>
//   );
// }

export default App;
