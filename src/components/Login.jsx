import React from "react";
import styled from "styled-components";

import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import LoginInput from "../components/elements/LoginInput";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    navigate("/main");
  };

  return (
    <StConatainer>
      <form>
        <h1>Login</h1>
        <StInput>
          <LoginInput label='ID' />
        </StInput>

        <StInput>
          <LoginInput label='PASSWORD' />
        </StInput>

        <Stbutton>
          <CommonWhiteButton text='로그인' onClick={onSubmitHandler} />
        </Stbutton>

        <Stbutton>
          <CommonBlueButton text='회원가입' />
        </Stbutton>
      </form>
    </StConatainer>
  );
};

export default Login;

const StConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StInput = styled.div`
  margin-top: 15px;
`;

const Stbutton = styled.div`
  margin-top: 15px;
`;
