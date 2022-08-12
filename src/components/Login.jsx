import React from "react";
import styled from "styled-components";
import CommonInput from "../components/elements/CommonInput";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import CommonBlueButton from "../components/elements/CommonBlueButton";
const Login = () => {
  return (
    <StConatainer>
      <form>
        <h1>Login</h1>
        <StInput>
          <CommonInput label='ID' />
        </StInput>

        <StInput>
          <CommonInput label='PASSWORD' />
        </StInput>

        <Stbutton>
          <CommonWhiteButton varient='로그인' />
        </Stbutton>

        <Stbutton>
          <CommonBlueButton varient='회원가입' />
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
