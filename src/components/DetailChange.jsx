import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos, __putTodos } from "../redux/modules/etcSlice";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import CommonTextArea from "../components/elements/CommonTextArea";
import useTextarea from "../components/hooks/useTextarea";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";

const DetailChange = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.etc.todos);
  const todo = todos.find((todo) => todo.id === parseInt(param.id));
  // custom hook 사용(useInput)
  const [updateContent, handleContent] = useTextarea("");
  const [updateTitle, handleTitle] = useTextarea("");

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __putTodos({
        ...todo,
        id: param.id,
        title: updateTitle,
        content: updateContent,
      })
    );
    dispatch(__getTodos());
    navigate(`/detail/${param.id}`);
  };

  return (
    <DetailTotal onSubmit={onSubmitHandler}>
      <DetailContainer>
        <DetailTop>
          <h3>제목 수정</h3>
          <CommonTextArea value={updateTitle} onChange={handleTitle} />
        </DetailTop>
        <StTextArea>
          <h3>내용 수정</h3>
          <CommonTextArea value={updateContent} onChange={handleContent} />
        </StTextArea>
        <DetailBottom>
          <CommonWhiteButton type='submit' text='수정하기' />
        </DetailBottom>
      </DetailContainer>
    </DetailTotal>
  );
};
export default DetailChange;

const DetailTotal = styled.form``;

const DetailContainer = styled.div`
  /* height: calc(100vh - 45px); */
  background-color: rgb(255, 255, 255);
  padding: 24px;
`;

const DetailTop = styled.div``;

const StTextArea = styled.div``;
const DetailBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  min-height: 550px;
`;

const DetailComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 50px;
  padding: 0px 12px;
  border-top: 1px solid rgb(238, 238, 238);
`;
