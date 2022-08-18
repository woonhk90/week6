import FormInput from "./elements/FormInput";
import CommonTextArea from "./elements/CommonTextArea";
import CommonWhiteButton from "./elements/CommonWhiteButton";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { __postTodos } from "../redux/modules/etcSlice";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import axios from "axios";
import {setRefreshTokenToCookie} from '../components/Login'

const Form = () => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });
  const {title,content}=todo;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cookies = new Cookies();

  const onSubmitHandler = async() => {
    if (todo.title === "" || todo.content === "") {
      alert("입력하지 않은 항목이 있는지 확인 후 다시 시도해주세요.");
    } else if (todo.title.length > 50) {
      alert("제목을 50자 이내로 입력해주세요.");
    } else if (todo.content.length > 200) {
      alert("내용을 200자 이내로 입력해주세요.");
    } else if (
      todo.title.length <= 50 &&
      todo.content.length <= 200 &&
      todo.user !== "" &&
      todo.title !== ""
    ) {
      // dispatch(__postTodos(todo));







        const refresh_token = cookies.get("Authorization");
        try {
          console.log("입력값",title,content,refresh_token);
          const data = await axios.post(`${process.env.REACT_APP_IP_ADDRESS}/article/auth`,{title,content},{
            headers: {
              Authorization: refresh_token+'123456'
            },
          });
          console.log("로그인성공데이터1:", data);
          /* 트루이면 */
          navigate('/list');
        } catch {
          // 오류 발생시 실행
      }








      navigate("/list");
    }
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
          <CommonWhiteButton
            text='추가하기'
            onClick={() => {
              onSubmitHandler(todo);
            }}
          />
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
