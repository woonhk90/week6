import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import Header from './layout/Header';
=======
>>>>>>> a083abaa92bca3f8c87897d04915509126abdfa6

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postLogin } from "../redux/modules/todoSlice";
import Button from './elements/Button';
import Input from './elements/Input';

import bgImg from '../img/bg_img.jpg';
<<<<<<< HEAD


import Cookies from "universal-cookie";
const cookies = new Cookies();

export function setRefreshTokenToCookie(data) {
  let now = new Date();
  let after1m = new Date();
  after1m.setMinutes(now.getMinutes() + 10);
  cookies.set("authorization", data, { path: "/", expires: after1m });
  }

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState({
    userId: '',
    password: '',
  });
  const onSubmitEventHandler = () => {
    dispatch(__postLogin(login));
  }
  const onChangeEventHandler = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    })
  }
  return (
    <>
      <ImgDiv>
        <LoginWrap>
          <Header />
          <LoginTitle>로그인</LoginTitle>
          <LoginForm>
            <div>
              <Input type={'text'} width={'500px'} id={'userId'} name={'userId'} maxLength={'20'} onChange={onChangeEventHandler} placeholder={"아이디를 입력하세요."} autoFocus={'autoFocus'} />
            </div>
            <div>
              <Input type={'password'} width={'500px'} id={'password'} name={'password'} maxLength={'20'} onChange={onChangeEventHandler} placeholder={"비밀번호를 입력하세요."} />
            </div>
            <Button btntype="login" onClick={() => (onSubmitEventHandler())}>로그인</Button>
            <Button btntype="signup" onClick={() => (navigate('/api/signup'))}>회원가입</Button>
          </LoginForm>
        </LoginWrap>
      </ImgDiv>
    </>
  )
=======

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, setLogin] = React.useState({
        userId: '',
        password: '',
    });
    const onSubmitEventHandler = () => {
        dispatch(__postLogin(login));
    }
    const onChangeEventHandler = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        })
    }
    return (
        <>
            <ImgDiv>
                <LoginWrap>
                    <LoginTitle>로그인</LoginTitle>
                    <LoginForm>
                        <div>
                            <Input type={'text'} width={'500px'} id={'userId'} name={'userId'} maxLength={'20'} onChange={onChangeEventHandler} placeholder={"아이디를 입력하세요."} autoFocus={'autoFocus'}/>
                        </div>
                        <div>
                            <Input type={'password'} width={'500px'} id={'password'} name={'password'} maxLength={'20'} onChange={onChangeEventHandler} placeholder={"비밀번호를 입력하세요."} />
                        </div>
                        <Button btntype="login" onClick={() => (onSubmitEventHandler())}>로그인</Button>
                        <Button btntype="signup" onClick={() => (navigate('/api/signup'))}>회원가입</Button>
                    </LoginForm>
                </LoginWrap>
            </ImgDiv>
        </>
    )
>>>>>>> a083abaa92bca3f8c87897d04915509126abdfa6
}

export default Login;

const ImgDiv = styled.div`
  width:100vw;
  height:100vh;
  overflow:hidden;
  background:url(${bgImg}) no-repeat 50% 50%;background-size:cover;

  display:flex;
  justify-content:center;
  align-items:center;
<<<<<<< HEAD
  color:#fff;
=======
>>>>>>> a083abaa92bca3f8c87897d04915509126abdfa6
`;

const LoginWrap = styled.div`
    width:1000px;
    background-color:rgba(0,0,0,0.4);
    text-align:center;
    display:flex;
    flex-direction:column;
`;
const LoginTitle = styled.h1`
    line-height:80px;
    font:40px/80px 'Arial','sans-serif';
    letter-spacing: 10px;
`;
const LoginForm = styled.div`
    font:20px/80px 'Arial','sans-serif';
    letter-spacing: 5px;
    padding:15px;
    box-sizing:border-box;
`;
