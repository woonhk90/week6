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
          <Stheart
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            좋아요
          </Stheart>
        </StListtitleheart>

        <StListWriter>작성자:</StListWriter>

        <Stdeleteandtime>
          <CommonWhiteButton
            text='삭제하기'
            width='10ch'
            onClick={(e) => {
              e.stopPropagation();
              dispatch(__deleteTodos(props.todo.id));
            }}
          />
          <Stwritetime>2022.08.xx</Stwritetime>
        </Stdeleteandtime>
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

  &:hover {
    cursor: pointer;
  }
`;

const StListtitleheart = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const Stdeleteandtime = styled.div`
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

const Stheart = styled.button``;

const Stwritetime = styled.div``;
