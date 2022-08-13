import React from "react";
import styled from "styled-components";

import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import LoginInput from "../components/elements/LoginInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postLogin } from "../redux/modules/todoSlice";
<<<<<<< HEAD
import Button from './elements/Button';
import styled from 'styled-components';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, setLogin] = React.useState({
        userId: '',
        userPw: '',
    });
    const onSubmitEventHandler = () => {

    }
    const onChangeEventHandler = (e) => {
        const { name, value } = e.target;
        dispatch(__postLogin(login));
    }
    return (
        <>
            <LoginWrap>
                <LoginTitle>로그인</LoginTitle>
                <LoginForm>
                    <div>
                        <label htmlFor="user_id">아이디: </label>
                        <input id='user_id' name='user_id' className='user_id' type="text" onChange={onChangeEventHandler} placeholder="아이디를 입력하세요." />
                    </div>
                    <div>
                        <label htmlFor="user_pw">비밀번호: </label>
                        <input id='user_pw' name='user_pw' className='user_pw' type="text" onChange={onChangeEventHandler} placeholder="비밀번호를 입력하세요." />
                    </div>
                    {/* <button onClick={()=>(onSubmitEventHandler())}>로그인</button> */}
                    <Button btntype="login" onClick={() => (onSubmitEventHandler())}>로그인</Button>
                    <Button btntype="signup" onClick={() => (navigate('/api/signup'))}>회원가입</Button>
                </LoginForm>
            </LoginWrap>
        </>
    )
}

export default Login;

const LoginWrap = styled.div`
    width:800px;
    height:500px;
    margin:50px auto 0;
    background-color:purple;
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
    width:600px;
    padding:15px;
    box-sizing:border-box;
    margin:0 auto;
    background-color:white;
    text-align:center;
`;
=======
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState({
    userId: "",
    userPw: "",
  });
  const onSubmitEventHandler = () => {};
  const onChangeEventHandler = (e) => {
    const { name, value } = e.target;
    dispatch(__postLogin(login));
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <div>
          <label htmlFor='user_id'>아이디: </label>
          <input
            id='user_id'
            name='user_id'
            className='user_id'
            type='text'
            onChange={onChangeEventHandler}
          />
        </div>
        <div>
          <label htmlFor='user_pw'>비밀번호: </label>
          <input
            id='user_pw'
            name='user_pw'
            className='user_pw'
            type='text'
            onChange={onChangeEventHandler}
          />
        </div>
        <button onClick={() => onSubmitEventHandler()}>로그인</button>
        <button onClick={() => navigate("/api/signup")}>회원가입</button>
      </div>
    </div>
  );
};
export default Login;
>>>>>>> f61c8ad66faf263a99042204503f74cf33cd022a
