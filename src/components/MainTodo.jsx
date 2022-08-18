import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import { __deleteTodos } from "../redux/modules/etcSlice";

const MainTodo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <StTodoList onClick={() => navigate(`/detail/${props.todo.id}`)}>
      <StTextContainer>
        <StListtitleheart>
          <StListtitle>제목:{props.todo.title}</StListtitle>

          <Stwritetime>2022.08.xx</Stwritetime>
        </StListtitleheart>

        <Stdeleteanduser>
          <StListWriter>작성자:</StListWriter>

          <CommonWhiteButton
            text='삭제하기'
            width='10ch'
            onClick={(e) => {
              e.stopPropagation();
              dispatch(__deleteTodos(props.todo.id));
            }}
          />
        </Stdeleteanduser>
      </StTextContainer>
    </StTodoList>
  );
};

export default MainTodo;

const StTodoList = styled.div`
  margin-top: 15px;
  border: solid 1px black;
  border-radius: 10px;
  outline-color: #eee;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const StListtitleheart = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const Stdeleteanduser = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const StListtitle = styled.div``;

const StListWriter = styled.div`
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StTextContainer = styled.div``;

const Stwritetime = styled.div`
  margin-bottom: 50px;
`;
