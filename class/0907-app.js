import React, { Component } from 'react';
import './App.css';
import Button from './Button'

/* 리스트에서 특정 아이템 삭제 */
// import words from './dummyData';
// import Word from './Word'
// class App extends Component{
//   // 삭제해도 원본에서 계속불러와 클릭한 아이템만 삭제되기때문에 원본을 복사
//   state = {
//     words: words
//   }
  
//   handleRemove = (id, e) => {
//     const word = e.target.previousSibling.innerText
//     console.log(word)
//     console.log(id)
//     alert(`해당 단어를 삭제하시겠습니까? - ${word}`)

//     const words = this.state.words.filter((w, index) => index !== id)
//     //업데이트된 words를 새로 화면에 그려주기 위해 setState
//     this.setState({words}) // {words: words}
//   }
  
//   render(){
//     const { words } = this.state // 업데이트된 최신 단어장
//     const wordStyle = {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }
//     return(
//       <div className='App'>
//         <h1 style={{textAlign: 'center'}}>영단어장</h1>
//         {words.map((w, id) => {
//           // return(
//           //   <div key={id} style={wordStyle}>
//           //     <h2>{w.word}</h2>
//           //     <Button size='small' type='button' handleClick={(e) => this.handleRemove(id, e)}>삭제</Button>
//           //     {/* 콜백형태로 주어 클릭할때마다 실행하게 함 */}
//           //   </div>
//           // )
//           // Word컴포넌트를 만들어 위 코드를 리팩토링
//           return(
//             <Word key={id} w={w} handleRemove={(e) => this.handleRemove(id, e)}></Word>
//           )
//         })}
//       </div>
//     )
//   }
// }

/* 간단한 이미지 뷰어 만들기 */
// import imgData from './dummyData';

// class App extends Component{
//   state = {
//     index: 0
//   }

//   decreaseIndex = () => {
//     const nextIndex = this.state.index - 1
//     this.setState({index: (nextIndex < 0) ? imgData.length-1 : nextIndex}) //삼항연산자로 체크
//   }
//   increaseIndex = () => {
//     const nextIndex = this.state.index + 1
//     this.setState({index: (nextIndex > imgData.length - 1) ? 0 : nextIndex})
//   }
//   render(){
//     const { index } = this.state
//     const { decreaseIndex, increaseIndex } = this
//     const path = imgData[index].src
//     const title = imgData[index].title
//     return(
//       <div className='App'>
//         <div className='img-container'>
//           <img src={path} alt={title}></img>
//         </div>
//         <div className='control-btns'>
//           <Button handleClick={decreaseIndex}>이전</Button>
//           <Button handleClick={increaseIndex}>다음</Button>
//         </div>
//       </div>
//     )
//   }
// }

/* 버튼 이벤트로 사이드바 메뉴 만들기 */
// import Sidebar from './Sidebar';
// const menus = [ //메뉴 데이터 (서버에서 전달받아서 보여주는 데이터)
//   { icon: '♜', title: 'HOME' },
//   { icon: '♞', title: 'ABOUT' },
//   { icon: '☻', title: 'SETTING' },
//   { icon: '♜', title: 'HOME' },
//   { icon: '♞', title: 'ABOUT' },
//   { icon: '☻', title: 'SETTING' }
// ]
// class App extends Component{
//   state = {
//     toggle: false
//   }
//   toggleMenu = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   render(){
//     const { toggle } = this.state
//     return(
//       <div className='App'>
//         <Button handleClick={this.toggleMenu}>{toggle ? '사이드바 닫기' : '사이드바 열기'}</Button>
//         <Sidebar open={toggle}>
//           {menus.map((menu, id) => {
//             return <div className='menu' key={id}>{menu.icon} {menu.title}</div>
//           })}
//         </Sidebar>
//       </div>
//     )
//   }
// }

/* 사용자 입력 처리하기 */
// class App extends Component{
//   state = {
//     id: '',
//     password: ''
//   }

//   handleChange = (e) => {
//     //같은함수에서 id와 password를 구분하기위해 name 프로퍼티를 사용해 구분해준다
//     const { name, value } = e.target
//     console.log(name)
//     this.setState({ [name]: value}) 
//     // []를 주면 name과 state의 key와 같으면 일치시킬수 있다. (들어오는 값에따라 state이름 변경)
//     // e.target.name === 'id' => id 상태를 변경
//     // e.target.name === 'password' => password 상태를 변경


//     //위 코드를 풀어서 쓰면 아래와 같음(평소 쓰던 코드)
//     // if(e.target.name === 'id'){
//     //   this.setState({id: e.target.value})
//     // }else if(e.target.name === 'password'){
//     //   this.setState({password: e.target.value})
//     // }
//   }

//   login = (e) => {
//     e.preventDefault() //새로고침 방지 - 안하면 state값 사라짐
//     const { id, password } = this.state
//     alert(`
//     아래 정보로 로그인 하시겠습니까?
//     - ID : ${id} 
//     - PASSWORD: ${password}
//     `)

//   }

//   render(){
//     const { id, password } = this.state
//     return(
//       <div className='App'>
//         <form>
//           <label>
//             ID
//             <input type='text' name='id' placeholder='아이디를 입력하세요' onChange={this.handleChange} value={id}></input>
//             {/* value값을 설정해주어야한다 (state값) */}
//           </label>
//           <label>
//             PASSWORD
//             <input type='password' name='password' placeholder='비밀번호를 입력하세요' onChange={this.handleChange} value={password}></input>
//           </label>
//           <div>
//             <Button handleClick={this.login}>로그인</Button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

/* 간단한 드롭다운 메뉴 만들기 */
// const menus = [
//   {value: '서울', text: 'Seoul'},
//   {value: '대구', text: 'Deagu'},
//   {value: '부산', text: 'Busan'},
//   // {value: '대전', text: 'Degeon'},
//   // {value: '수원', text: 'suwon'},
// ]
// class App extends Component{
//   state = {
//     value: ''
//   }

//   handleChange = (e) => {
//     console.log(e.target.value)
//     this.setState({value: e.target.value})
//   }

//   render(){
//     const { value } = this.state
//     // return(
//     //   <div className='App'>
//     //     <select value={value} onChange={this.handleChange}>
//     //       <option value='서울'>Seoul</option>
//     //       <option value='대구'>Deagu</option>
//     //       <option value='부산'>Busan</option>
//     //     </select>
//     //     <p>{value}</p>
//     //   </div>
//     // )
//     /* 드롭다운 메뉴를 서버에서 가져올경우 - menus배열을 서버에서 가져온셈친다 */
//     return(
//       <div className='App'>
//         <select value={value} onChange={this.handleChange}>
//           {menus.length !== 0 && menus.map((menu, id) => {
//             return <option key={id} value={menu.value}>{menu.text}</option>
//           })}
//         </select>
//         <p>{value}</p>
//       </div>
//     )
//   }
// }

/* 드롭다운을 이용해 사용자가 특정지역 선택시 지도에 표시하기 */
//서버에서 넘어온 가상의 위치 데이터
// const coordinates = [
//   { "name": "서울 강남", "coordinate": [37.497944, 127.027618] }, //coordinate : [위도,경도]
//   { "name": "대구 동성로", "coordinate": [35.865467, 128.59336] },
//   { "name": "부산 해운대", "coordinate": [35.1884, 129.16695] },
// ]
// class App extends Component{
//   state = {
//     selectedValue: '', //사용자가 선택한 메뉴
//     map: null, //map 객체
//     marker: null, //marker 객체
//     info: '' //사용자가 선택한 위치정보
//   }

//   //데이터 가공
//   decomposeArgs = (args) => { //args는 coordinates의 배열중 하나
//     const { name, coordinate } = args
//     const [ lat, lon ] = coordinate //coordinate의 위도 경도 추출
//     return [ lat, lon, name ] //위치정보 반환(위도, 경도, 지역이름)
//   }

//   //지도에 선택한 위치정보 표시
//   displayLocation = (lat, lon, name, mapObj, marker) => {
//     const map = mapObj.setView([lat, lon], 13) //지도 초기설정 setView([위도,경도], 지도의 zoom) [위도,경도]가 지도의 가운데에온다
    
//     window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // (이미지를 온라인에서 가져옴)
//     //지도의 타일맵 스타일 설정
//     {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map) //타일맵을 map오브젝트에 붙혀줌
    
//     //사용자가 선택한 위치에 마커 표시
//     marker.setLatLng([lat, lon]) //마커 위치 설정한 [위도,경도]로 변경
//     .bindPopup(name) //마커위치에 대한 말풍선 표시 (클릭하면 뜸)
//     .openPopup() //로딩될때 말풍선 표시

//     //사용자가 선택한 위치정보를 화면에 보여주기
//     this.setState({info: `지역: ${name}, 위치: ${lat} (위도) / ${lon} (경도)`})
//   }

//   //화면에 지도 보여주기
//   display = (map, marker, location) => {
//     const [ lat, lon, name ] = this.decomposeArgs(location) //위치정보 파싱 (데이터 가공)
//     this.displayLocation(lat, lon, name, map, marker) 
//   }

//   //사용자가 선택한 위치 지도에 표시
//   selectItem = (e) => {
//     const { map, marker } = this.state
//     //사용자가 선택한 위치 정보 조회
//     console.log(e.target.selectedIndex) //select의 인덱스값 가져옴
//     const selectedLocation = coordinates[e.target.selectedIndex]
//     console.log(selectedLocation)
//     this.display(map, marker, selectedLocation)
//     this.setState({selectedValue: e.target.value})
//   }

//   //로딩후 첫화면에 지도 표시
//   componentDidMount(){
//     const map = window.L.map('map') //지도 객체 조회하기
//     const marker = window.L.marker([0,0]).addTo(map) //마커 객체 조회하기 - [0,0]으로 초기화후 marker추가
//     const firstLocation = coordinates[0] //초기 위치정보
    
//     this.display(map, marker, firstLocation) //지도에 초기 위치정보 디스플레이
//     this.setState({map, marker}) //map과 marker 정보 저장
//   }

//   render(){
//     const { selectedValue, map, marker, info } = this.state
//     return(
//       <div className='App'>
//         <select value={selectedValue} onChange={this.selectItem}>
//           {coordinates.length !== 0 && coordinates.map((coord, id) => {
//             return <option key={id} value={coord.name}>{coord.name}</option>
//           })}
//         </select>
//         <div id='map'></div> {/* 지도를 보여줄 컨테이너(지도api에 있는 내용) */}
//         <p>{info}</p>
//       </div>
//     )
//   }
// }

/* 연습문제 1 */
// import youtubeVideos from './YoutubeVideos'
// class App extends Component{
//   state = {
//     index: 0
//   }

//   decrease = () => {
//     const { index } = this.state
//     const nextIndex = index - 1
//     this.setState({index: (nextIndex < 0 ) ? youtubeVideos.length -1 : nextIndex})
//   }
//   increase = () => {
//     const { index } = this.state
//     const nextIndex = index + 1
//     this.setState({index: (nextIndex > youtubeVideos.length -1) ? 0 : nextIndex})
//   }


//   render(){
//     console.log(youtubeVideos)
//     const { index } = this.state
//     const videoSrc = youtubeVideos[index].src
//     const videoTitle = youtubeVideos[index].title
//     return(
//       <div className='App'>
//         <div className='img-container'>
//         <video src={videoSrc} alt={videoTitle}></video>
//         </div>
//         <h2>{videoTitle}</h2>
//         <Button handleClick={this.decrease}>이전</Button>
//         <Button handleClick={this.increase}>다음</Button>
//       </div>
//     )
//   }
// }

// /* 연습문제 2,3 */
// import loginData from './LoginData';
// import Modal from './Modal'

// class App extends Component{
//     state = {
//       id: '',
//       password: '',
//       login: false,
//       modal: true
//     }
  
//     handleChange = (e) => {
//       const { name, value } = e.target
//       // console.log(name)
//       this.setState({ [name]: value}) 
//     }
  
//     login = (e) => {
//       e.preventDefault() //새로고침 방지 - 안하면 state값 사라짐
//       const { id, password } = this.state
//       alert(`
//       아래 정보로 로그인 하시겠습니까?
//       - ID : ${id} 
//       - PASSWORD: ${password}
//       `)
//       console.log(id)
//       console.log(loginData.USER_ID)
//       if(id === loginData.USER_ID && password === loginData.USER_PASSWORD) {
//         this.setState({login: true})
//       }else{
//         console.log('로그인실패')
//         this.setState({modal: false})
//       }
//     }

//     close = () => {
//       this.setState({modal: true})
//     }
    
//     render(){
//       const { id, password, login, modal } = this.state
//       // console.log(loginData)
//       console.log(modal)
//       return(
//         <div className='App'>
//           <form>
//             <label>
//               ID
//               <input type='text' name='id' placeholder='아이디를 입력하세요' onChange={this.handleChange} value={id}></input>
//             </label>
//             <label>
//               PASSWORD
//               <input type='password' name='password' placeholder='비밀번호를 입력하세요' onChange={this.handleChange} value={password}></input>
//             </label>
//             <div>
//               <Button handleClick={this.login}>로그인</Button>
//             </div>
//           </form>
//             {login ? <div className='con'>홈페이지</div> : ''}
//             <Modal close={modal}>
//               <div className='Modal-body'>너 로그인 실패했어</div>
//               <div className='Modal-footer'><Button handleClick={this.close}>닫기</Button></div>
//             </Modal> 
//         </div>
//       )
//     }
//   }

/* 연습문제 4 */
// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       fileName: [],
//       imgSrc: [],
//       fileArr: []
//     }
//     this.fileInput = React.createRef()
//   }

//   isValid = (type) => {
//     return type === 'image'
//   }
  
//   handleChange = (e) => {
//     const files = e.target.files
//     console.log(files)


//     const fileNameArr = []
//     for(let file of files){
//       console.log(file)
//       const imgSrc =  URL.createObjectURL(file)
//       if(this.isValid(file.type.split('/')[0])){
//         fileNameArr.push({fileName:file.name , imgSrc })
//       }
//       console.log(file.type.split('/')[0])
//     }
//     console.log(fileNameArr)
//     return this.setState({fileArr: fileNameArr})

//   }

//   openFileWindow = () => {
//     this.fileInput.current.click()
//   }
  
//   render(){
//     const { fileName, imgSrc, fileArr } = this.state
//     fileName.map(name =>console.log(name.name))
//     return(
//       <div className='App'>
//         {fileArr.map(file => {
//           console.log(file)
//           return (
//             <div key={file.index}>
//               <h1>{file.fileName}</h1>
//               <img src={file.imgSrc} alt='preview-img' width='300px' height='400px'></img>
//             </div>
//           )
//           })}
//         <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*" multiple></input>
//         <Button handleClick={this.openFileWindow}>Upload</Button>
//       </div>
//     )
//   }
// }

/* 연습문제 5,6 */
// import Sidebar from './Sidebar';
// const menus = [ //메뉴 데이터 (서버에서 전달받아서 보여주는 데이터)
//   { icon: '♜', title: 'HOME' },
//   { icon: '♞', title: 'ABOUT' },
//   { icon: '☻', title: 'SETTING' },
//   { icon: '♜', title: 'HOME' },
//   { icon: '♞', title: 'ABOUT' },
//   { icon: '☻', title: 'SETTING' }
// ]
// class App extends Component{
//   state = {
//     toggle: false
//   }
//   toggleMenu = () => {
//     this.setState({toggle: !this.state.toggle})
//   }

//   menuClick = (e) => {
//     // console.log(e.target)
//     this.setState({toggle: !this.state.toggle})
//   }

//   windowClick = (e) => {
//     return this.state.toggle ? this.setState({toggle: !this.state.toggle}) : ''
//   }

//   render(){
//     const { toggle } = this.state
//     return(
//       <div className='App' onClick={this.windowClick}>
//         <Button handleClick={this.toggleMenu}>{toggle ? '사이드바 닫기' : '사이드바 열기'}</Button>
//         <Sidebar open={toggle} >
//           {menus.map((menu, id) => {
//             return <div className='menu' onClick={this.windowClick} key={id}>{menu.icon} {menu.title}</div>
//           })}
//         </Sidebar>
//       </div>
//     )
//   }
// }


export default App;

