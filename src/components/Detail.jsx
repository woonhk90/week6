import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getTodos } from "../redux/modules/etcSlice";
import { __deleteTodos } from "../redux/modules/etcSlice";
import { __updateComments } from "../redux/modules/commentsSlice";
import styled from "styled-components";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import Comment from "../components/Comment";

const Detail = () => {
  let param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.etc.todos);
  const todo = todos.find((todo) => todo.id === parseInt(param.id));

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
console.log("AAAAAAA",todo);
  return (
    <div>
      <Stbox>
        <StDetailcommentbox>
          <div>작성자: {todo?.userNic}</div>
          <CommonWhiteButton
            text='이전으로'
            width='100px'
            onClick={() => navigate(`/list`)}
          />
        </StDetailcommentbox>
        <Stdetailtitle>제목: {todo?.title}</Stdetailtitle>
        <Stdetailcontent>내용: {todo?.content}</Stdetailcontent>
      </Stbox>
      <StDetailcommentbox>
        <CommonWhiteButton
          text='본문수정'
          width='100px'
          type='submit'
          onClick={() => {
            navigate(`/detail/${param.id}/change`);
          }}
        />
        <CommonBlueButton
          text='본문삭제'
          width='100px'
          onClick={(e) => {
            e.stopPropagation();
            dispatch(__deleteTodos(todo.id));
            navigate("/list");
          }}
        />
      </StDetailcommentbox>
      <Comment userNic={todo?.userNic}/>
    </div>
  );
};

export default Detail;

const Stdetailtitle = styled.div`
  border: 1px solid black;
  margin-top: 15px;
  height: 50px;
  border-radius: 5px;
`;

const Stdetailcontent = styled.div`
  margin-top: 15px;
  border: 1px solid black;
  height: 250px;
  border-radius: 5px;
`;

const Stbox = styled.div``;

const StDetailcommentbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
