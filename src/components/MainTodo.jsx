import styled from "styled-components";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";

const MainTodo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <StWorryList onClick={() => navigate(`/detail/`)}>
      <StTextContainer>
        <StListtitle>제목:</StListtitle>
        <StListWriter>작성자:</StListWriter>
        <CommonWhiteButton
          text='삭제하기'
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </StTextContainer>
    </StWorryList>
  );
};

export default MainTodo;

const StWorryList = styled.div`
  margin-top: 15px;
  border: solid 1px black;
  border-radius: 10px;
  outline-color: #eee;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const StListtitle = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const StListWriter = styled.div`
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StTextContainer = styled.div``;
