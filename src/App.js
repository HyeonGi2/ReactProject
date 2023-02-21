/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

    

    <button onClick={ ()=>{

      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy);
    } }>글 수정</button>


      <div className="list">
      <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }} >👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
      </div>


      <div className="list">
      <h4>{ 글제목[1] }</h4>
      <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4 onClick={()=>{ setModal(!modal) }} >{ 글제목[2] }</h4>
      <p>2월 17일 발행</p>
      </div>

      {/* {
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
          <h4 onClick={()=>{setModal(true)}}>{ 글제목[i] } <span onClick={()=>{ 따봉변경(따봉+1)}}>👍</span>{따봉 }</h4>
          <p>2월 17일 발행</p>
          </div>)
        })
      } */}

      <input onChange={(e)=> { console.log(e.target.value) }}></input>
      {
        //조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Moda title={title} 글제목={글제목}/> : null 
      }

    </div>
  );
}



 
function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
        <h4>{props.글제목[2]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App;
