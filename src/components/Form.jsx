import FormInput from "./elements/FormInput";
import CommonTextArea from "./elements/CommonTextArea";
import CommonWhiteButton from "./elements/CommonWhiteButton";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { __postTodos } from "../redux/modules/etcSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    isDone: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    dispatch(__postTodos(todo));
    navigate("/list");
  };

  const handleinputTitle = (e) => {
    const { value } = e.target;
    setTodo({
      ...todo,
      title: value,
    });
  };

  const handleinputContent = (e) => {
    const { value } = e.target;
    setTodo({ ...todo, content: value });
  };

  return (
    <StFormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <FormInput
          labeltext='제목'
          text='제목을 입력해주세요.(50자 이내)'
          onChange={handleinputTitle}
        />

        <div>
          <CommonTextArea
            labeltext={"내용"}
            text='내용을 입력해주세요(200자 이내)'
            size='140px'
            variant='outlined'
            margin='5% 0 0 0'
            onChange={handleinputContent}
          />
        </div>

        <Stbox>
          <CommonWhiteButton text='추가하기' onClick={onSubmitHandler} />
        </Stbox>
      </form>
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
