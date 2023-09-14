import React, { Component } from "react";
import PropTypes from 'prop-types'

function YoutubeVideo({ videoId, videoName, videoLength, videoDescription, videoAuthor, children}){ //props값 구조분해
  return(
    <div id={videoId}>
      <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1> 
      {/* 1000으로 나눠 MB단위로 바꿔주고 소수점1자리까지만(toFixed) 남긴다 */}
      <h3>작성자 - {videoAuthor}</h3>
      <p>{videoDescription}</p>
      {children}
      {/* children은 소문자임!! - 이름을 바꿀수 없음 */}
    </div>
  )
}

export default YoutubeVideo

// 데이터 타입 검증 (개발시 필요한 코드) - 경고만 해주고 에러나지 않음
YoutubeVideo.propTypes = {
  videoId: PropTypes.string, 
  videoName: PropTypes.string, 
  videoLength: PropTypes.string, 
  videoDescription: PropTypes.string
}

//props 데이터 기본값 설정
YoutubeVideo.defaultProps = {
  videoAuthor: '디폴트 작성자' // videoAuthor: null 또는 undefined
}