import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __postLogin } from "../redux/modules/todoSlice";
import Button from './elements/Button';
import Input from './elements/Input';

import bgImg from '../img/bg_img.jpg';

import axios from "axios";
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
    username: '',
    password: '',
  });

  const onSubmitEventHandler = async () => {
    // const refresh_token = cookies.get("Authorization");
    try {
      const data = await axios.post(`http://15.165.160.40/api/login`, login, {
        headers: {
          // Authorization: refresh_token
        },
      });
      console.log("로그인성공데이터1:", data);
      /* 트루이면 */
      navigate('/main');
      const token = data.headers.authorization;
      setRefreshTokenToCookie(token);
    } catch {
      // 오류 발생시 실행
    }


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
              <Input type={'text'} width={'500px'} id={'username'} name={'username'} maxLength={'20'} onChange={onChangeEventHandler} placeholder={"아이디를 입력하세요."} autoFocus={'autoFocus'} />
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
  color:#fff;
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
