import './Sidebar.css'

/* 9월 7일-  버튼 이벤트로 사이드바 메뉴 만들기 */

function Sidebar({ open, children}){
  return(
    <div className={`sidebar ${open ? 'open' : '' }`}>
      <div className='sidebar-menus'>{children}</div>
    </div>
  )
}


export default Sidebar