import styled from "styled-components";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __postComments,
  __getComments,
  __deleteComments,
} from "../redux/modules/commentsSlice";

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const [comment, setComment] = useState({
    comment: "",
  });

  const onClickAddComment = (comment) => {
    dispatch(__postComments(comment));
  };
  const onClickDeleteComment = (commentId) => {
    dispatch(__deleteComments(commentId));
  };

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  return (
    <div>
      <StCommentbox>
        <StUser>작성자명</StUser>
        <StCommentInput
          type='text'
          placeholder='댓글을 입력해주세요.'
          onChange={(e) => {
            const { value } = e.target;
            setComment({
              ...comment,
              comment: value,
            });
          }}
        />
        <CommonWhiteButton
          text='댓글추가'
          onClick={() => onClickAddComment(comment)}
        />
      </StCommentbox>

      <div>
        {comments?.map((comment) => {
          return (
            <StAddCommentbox key={comment.id}>
              <Sttitlebtn>
                <StUser>작성자명</StUser>
                <StbtnSet>
                  <CommonBlueButton text='수정하기' />
                  <CommonWhiteButton
                    text='삭제하기'
                    onClick={() => {
                      onClickDeleteComment(comment.id);
                    }}
                  />
                </StbtnSet>
              </Sttitlebtn>
              <Stcomment>{comment.comment}</Stcomment>
            </StAddCommentbox>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;

const StUser = styled.div``;

const StCommentbox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 30px auto;
`;

const StAddCommentbox = styled.div`
  border: 1px solid black;
  margin-top: 15px;
`;

const StCommentInput = styled.input`
  width: 350px;
  height: 20px;
  margin-left: 20px;
`;

const Stcomment = styled.div``;

const Sttitlebtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StbtnSet = styled.div`
  display: flex;
  flex-direction: row;
`;
