import React from "react";
import styled from "styled-components";

import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import LoginInput from "../components/elements/LoginInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postLogin } from "../redux/modules/todoSlice";
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
