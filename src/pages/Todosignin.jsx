import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { __postUserInfo, __postOverlapChk } from "../redux/modules/todoSlice";

const TodoSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputIVal = useRef();
  const inputPVal = useRef();
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userNic: '',
    userPw: '',
    userPwChk: '',
  })

  const onChangeEventHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })

    if (name === 'userPwChk') {
      if (userInfo.userPw === value) {
        console.log("일치!!!!");
      } else {
        console.log("불일치!!");
      }
    }
  }
  const onSubmitEventHandler = () => {
    console.log("문자길이", userInfo.userName.length);

    let idReg = /^[A-za-z0-9]{5,15}/g;
    if (!idReg.test(userInfo.userName)) {
      alert("영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자");
      return false;
    }

    var reg = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
    if (!reg.test(userInfo.userPw)) {
      alert("최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자");
      return false;
    }

    dispatch(__postUserInfo(userInfo));
    console.log('userInfo=>', userInfo);
    // navigate('/todolist');
  }

//  useRef
  const onClickOverlap = (flag) => {
    if (flag === 'idChk') {
      dispatch(__postOverlapChk({ flag,val:inputIVal.current.value }));
    } else if (flag === "pwChk") {
      dispatch(__postOverlapChk({ flag,val:inputPVal.current.value }));
    }
  }
  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <div>
          <label htmlFor="userName">아이디: </label>
          <input type="text" name="userName" id="userName" onChange={onChangeEventHandler} className="user_Id" ref={inputIVal}/><span onClick={() => { onClickOverlap('idChk') }}>중복확인</span>
        </div>
        <div>
          <label htmlFor="userNic">닉네임: </label>
          <input type="text" name="userNic" id="userNic" onChange={onChangeEventHandler} className="user_Nic" ref={inputPVal}/><span onClick={() => { onClickOverlap('pwChk') }}>중복확인</span>
        </div>
        <div>
          <label htmlFor="userPw">비밀번호 입력: </label>
          <input type="password" name="userPw" id="userPw" onChange={onChangeEventHandler} className="user_Pw" />
        </div>
        <div>
          <label htmlFor="userPwChk">비밀번호 확인: </label>
          <input type="password" name="userPwChk" id="userPwChk" onChange={onChangeEventHandler} className="user_Pw_Chk" />
        </div>
        <button onClick={() => { onSubmitEventHandler() }}>회원가입</button>
        <button onClick={() => { navigate(-1); }}>뒤로가기</button>
      </div>
    </div>
  );
};

export default TodoSignin;