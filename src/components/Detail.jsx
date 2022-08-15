import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Comment from "../components/Comment";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import { useNavigate } from "react-router-dom";

const CommentList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Stbox>
        <StDetailcommentbox>
          <CommonWhiteButton
            text='이전으로'
            width='100px'
            onClick={() => navigate(`/list`)}
          />
        </StDetailcommentbox>
        <Stdetailtitle>123</Stdetailtitle>
        <Stdetailcontent>123</Stdetailcontent>
      </Stbox>
      <StDetailcommentbox>
        <CommonWhiteButton text='본문수정' width='100px' />
        <CommonBlueButton text='본문삭제' width='100px' />
      </StDetailcommentbox>
      <Comment />
    </div>
  );
};

export default CommentList;

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
  justify-content: right;
  margin-top: 20px;
`;
