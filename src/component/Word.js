import Button from "./Button"
import './Word.css'

/* 9월 7일 리스트에서 특정 아이템 삭제 - 리팩토링위해 컴포넌트 설계 */
// function Word({ handleRemove, w }){
//   const wordStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }

//   return(
//     <div style={wordStyle}>
//       <h2>{w.word}</h2>
//       <Button size='small' type='button' handleClick={(e) => handleRemove(e)}>삭제</Button>
//       {/* 콜백형태로 주어 클릭할때마다 실행하게 함 */}
//     </div>

//   )

// }

/* 9월 11일 연습문제 6 */
function Word({r_link, r_word, r_hanja, r_des}){
  return(
    <div className="item">
      <div className="word">
        <a href={r_link}>{r_word} {r_hanja}</a>
      </div>
      <p className="description">{r_des}</p>
    </div>
  )
}

export default Word