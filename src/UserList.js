import React, { useEffect } from 'react'

/* React.memo: props가 변경이 될때만 리랜더링 수행 */
const User = React.memo(function User({ user, onRemove, onToggle }){
  useEffect(() => {
    // console.log('user값이 설정됨')
    console.log(user)

    // return () => {
    //   console.log('user가 바뀌기 전...')
    //   console.log(user)
    // }
  },[user]) //user props, 의존성배열을 넣는 이유 - 최신값을 가지고 실행함
  
  return (
    <div>
      <b 
        onClick={() => onToggle(user.id)}
        style={{
          cursor:'pointer', 
          color: user.active ? 'green' : 'black'
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
})

function UserList({ users, onRemove, onToggle }){
  return (
    <div>
      {users.map(user => (
      <User 
        user={user} 
        key={user.id} 
        onRemove={onRemove} 
        onToggle={onToggle} 
      />
      ))}
    </div>
  )
}


export default React.memo(UserList)