import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { __postUserInfo, __postOverlapChk } from "../redux/modules/todoSlice";
import styled from 'styled-components';
import Button from './elements/Button';
import Input from './elements/Input';
import Header from './layout/Header';

import bgImg from '../img/bg_img.jpg';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userNic: '',
    password: '',
    passwordConfirm: '',
    idOverlap: false,
  })
  // const  {comments}  = useSelector((state) => state.todos);
  const stateInfo = useSelector((state) => state.todo);
  console.log('true로 떨어질까?=>', stateInfo.overChk);
  const [overlapChk, setOverlapChk] = useState(stateInfo.overChk);


  const [pwChk, setPwChk] = useState('');

  // const comments = useSelector((state) => state); //리턴값 받을꺼임

  const onChangeEventHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })

    if (name === "userId") {
      setOverlapChk(false);
    }
    /* 비밀번호 일치 하는지 안하는지 */
    if (name === 'passwordConfirm') {
      if (userInfo.password === value) {
        setPwChk("비밀번호가 일치합니다.");
      } else {
        setPwChk("비밀번호가 일치하지 않습니다");
      }
    }
  }

  const onSubmitEventHandler = () => {
    if (userInfo.userId === "") {
      window.alert("아이디를 입력해주세요.");
      return false;
    }
    console.log("아이디유효성검사", overlapChk);
    if (!overlapChk) {
      window.alert("아이디 중복검사를 해주세요.");
      return false;
    }
    if (userInfo.userNic === "") {
      window.alert("닉네임을 입력해주세요.");
      return false;
    }
    let idReg = /^[A-za-z0-9]{5,15}/g;
    if (!idReg.test(userInfo.userId)) {
      alert("아이디를 영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자");
      return false;
    }

    let nicReg = /^[A-za-z0-9]{5,15}/g;
    if (!nicReg.test(userInfo.userNic)) {
      alert("닉네임을 영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자");
      return false;
    }

    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!pwReg.test(userInfo.password)) {
      alert("비밀번호를 최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자");
      return false;
    }



    if (userInfo.password === '' || userInfo.passwordConfirm === '') {
      window.alert("비밀번호를 확인해주세요.");
    }


    dispatch(__postUserInfo(userInfo));
    console.log('userInfo=>', userInfo);
    // navigate('/todolist');
  }

  const onClickOverlap = (flag) => {
    if (flag === 'idChk') {
      dispatch(__postOverlapChk({ flag, val: userInfo.userId }));
      setOverlapChk(stateInfo.overChk);
      console.log("넣기전:", stateInfo.overChk);

    }
  }
  return (
    <>
      <ImgDiv>a
        <SigninWrap>
          <Header />
          <SigninTitle>회원가입</SigninTitle>
          <SigninForm>
            <div>
              <label htmlFor="userId">아이디: </label>
              <Input type={"text"} width={'600px'} name={"userId"} id={"userId"} onChange={onChangeEventHandler} placeholder={'영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자'} /><span onClick={() => { onClickOverlap('idChk') }}>중복확인</span>
            </div>
            <div>
              <label htmlFor="userNic">닉네임: </label>
              <Input type={"text"} width={'600px'} name={"userNic"} id={"userNic"} onChange={onChangeEventHandler} placeholder={'영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자'} />
            </div>
            <div>
              <label htmlFor="password">비밀번호 입력: </label>
              <Input type={"password"} width={'600px'} name={"password"} id={"password"} onChange={onChangeEventHandler} placeholder={'최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자'} />
            </div>
            <div>
              <label htmlFor="passwordConfirm">비밀번호 확인: </label>
              <Input type={"password"} width={'600px'} name={"passwordConfirm"} id={"passwordConfirm"} onChange={onChangeEventHandler} />
              <PwDoubleChk>{pwChk}</PwDoubleChk>
            </div>
            <ButtonBox>
              <Button btntype="signSubmit" onClick={() => { onSubmitEventHandler() }}>회원가입</Button>
              <Button btntype="back" onClick={() => { navigate('/api/login'); }}>뒤로가기</Button>
            </ButtonBox>
          </SigninForm>
        </SigninWrap>
      </ImgDiv>
    </>
  );
};

export default Signin;

const ImgDiv = styled.div`
  width:100vw;
  height:100vh;
  overflow:hidden;
  background:url(${bgImg}) no-repeat 50% 50%;background-size:cover;
  color:#fff;

  display:flex;
  justify-content:center;
  align-items:center;
`;

const SigninWrap = styled.div`
  width:1000px;
  background-color:rgba(0,0,0,0.4);
  text-align:center;
  display:flex;
  flex-direction:column;
`;

const SigninTitle = styled.h1`
  font:40px/80px 'Arial','sans-serif';
  letter-spacing: 10px;
`;

const SigninForm = styled.div`
  font:20px/60px 'Arial','sans-serif';
  letter-spacing: 5px;
  padding:15px;
  box-sizing:border-box;
`;

const PwDoubleChk = styled.div`
  color:rgb(255,0,0);
  font:20px/50px 'Arial','sans-serif';
  width:80%;
  height:15px;
  margin:0 auto;
`;

const ButtonBox = styled.div`
  position:relative;
  bottom:0%;
  margin-top:50px;
`;