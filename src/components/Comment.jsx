import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { __postComments, __getComments } from "../redux/modules/commentsSlice";

import { useParams } from "react-router-dom";
import CommentView from "./CommentView";

import Button from "./elements/Button";
import Input from "./elements/Input";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";

const Comment = () => {
  const dispatch = useDispatch();

  // const  {comments}  = useSelector((state) => state.todos);
  const comments = useSelector((state) => state.comments.comments);
  console.log("COMMENTS=>", comments);
  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const [comment, setComment] = useState({
    content: "",
  });
  const param = useParams();
  console.log("param=>", param);
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setComment({
      ...comment,
      userId: param.id,
      [name]: value,
    });
  };
  const postComment = (e) => {
    e.preventDefault();

    if (content === "") {
      window.alert("내용을 입력해주세요");
      return false;
    }
    dispatch(__postComments(comment));

    /* 초기화 */
    setComment({
      userName: "",
      content: "",
    });
  };
  const { userName, content } = comment;
  const [commentShow, setCommentShow] = useState(true);
  return (
    <>
      <CommentWrap commentShow={commentShow}>
        <div
          onClick={() => {
            setCommentShow(!commentShow);
          }}
        >
          <span style={{ fontSize: "25px" }}>
            {commentShow ? "댓글 올리기" : "댓글 내리기"}
          </span>
        </div>
        <ShowHideBox>
          <CommentForm onSubmit={postComment}>
            <CommentUser>작성자명:OO</CommentUser>
            <Input
              type='text'
              name='content'
              onChange={onChangeHandler}
              maxLength='100'
              placeholder='댓글을 추가하세요.(100자 이내)'
              width='500px'
              value={content}
              margin='0 30px 0 0'
            />
            <CommonWhiteButton type='submit' text='추가하기' />
            {/* <Button bgcolor='transparent'>추가하기</Button> */}
          </CommentForm>
          <CommentLists>
            {comments.map((v) =>
              Number(v.articleid) === Number(param.id) ? (
                <div key={v.id}>
                  <CommentView comment={v} />
                </div>
              ) : null
            )}
          </CommentLists>
        </ShowHideBox>
      </CommentWrap>
    </>
  );
};

export default Comment;

const CommentWrap = styled.div`
  background-color: white;
  border-top: 1px solid #eee;
  transform: translate(-50%, 90%);
  transform: ${({ commentShow }) =>
    commentShow ? "" : `translate(-50%, -10%)`};

  height: 400px;
  position: fixed;
  max-width: 1152px;
  width: 100%;
  bottom: 0%;
  left: 50%;
`;
const ShowHideBox = styled.div`
  height: 100%;
  width: 100%;
`;
const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const CommentLists = styled.div`
  overflow: auto;
  height: 80%;
  width: 100%;
`;

const CommentUser = styled.div``;
