import React from "react";
import FormInput from "./elements/FormInput";
import CommonTextArea from "./elements/CommonTextArea";
import CommonWhiteButton from "./elements/CommonWhiteButton";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Form = () => {
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    navigate("/list");
  };

  return (
    <StFormContainer>
      <FormInput labeltext='제목' text='제목을 입력해주세요.(50자 이내)' />

      <div>
        <CommonTextArea
          labeltext={"내용"}
          text='내용을 입력해주세요(200자 이내)'
          size='140px'
          variant='outlined'
          margin='5% 0 0 0'
        />
      </div>

      <Stbox>
        <CommonWhiteButton text='추가하기' onClick={onSubmitHandler} />
      </Stbox>
    </StFormContainer>
  );
};

export default Form;

const StFormContainer = styled.div`
  margin-top: 50px;
`;

const Stbox = styled.div`
  margin-top: 25px;
`;
