import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  __deleteComments,
  __updateComments,
} from "../redux/modules/commentsSlice";
import Button from "./elements/Button";
import Input from "./elements/Input";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";

const CommentView = ({ comment }) => {
  const dispatch = useDispatch();

  const [editComment, setEditComment] = React.useState(false);

  let updateCommentInput = () => {
    if (editComment) {
      setEditComment(false);
    } else {
      setEditComment(true);
    }
  };

  const deleteBtn = (id) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      dispatch(__deleteComments(id));
    }
  };

  const [updateComment, setUpdateComment] = useState({
    id: "",
    content: comment.content,
  });

  const changeEvent = (e) => {
    setUpdateComment({
      id: comment.id,
      content: e.target.value,
    });
  };

  const updateCommentAction = () => {
    dispatch(__updateComments(updateComment));
    updateCommentInput();
  };
  return (
    <>
      <div>
        <CommentBox>
          <CommentContent>
            {!editComment ? (
              <div>
                <CommentBottom className='comment_view'>
                  {comment.content}
                </CommentBottom>
              </div>
            ) : (
              <Input
                onChange={changeEvent}
                name='content'
                type='text'
                value={updateComment.content}
              />
            )}
          </CommentContent>
          <CommentButton>
            {!editComment ? (
              <div>
                <Button
                  uibutton='edit'
                  btntype='ui-comment'
                  onClick={() => {
                    updateCommentInput();
                  }}
                />
                <Button
                  uibutton='delete'
                  btntype='ui-comment'
                  onClick={() => {
                    deleteBtn(comment.id);
                  }}
                />
              </div>
            ) : (
              <StCommentbox>
                <CommonWhiteButton
                  text='취소'
                  onClick={() => {
                    updateCommentInput();
                  }}
                ></CommonWhiteButton>
                <CommonBlueButton
                  text='저장'
                  onClick={() => {
                    updateCommentAction();
                  }}
                ></CommonBlueButton>
              </StCommentbox>
            )}
          </CommentButton>
        </CommentBox>
      </div>
    </>
  );
};

export default CommentView;

const CommentBox = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
`;
const CommentContent = styled.div`
  width: 80%;
`;

const CommentTop = styled.div`
  font-size: 10px;
`;
const CommentBottom = styled.div`
  font-size: 15px;
`;

const CommentButton = styled.div`
  display: flex;
  margin: 3px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StCommentbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
