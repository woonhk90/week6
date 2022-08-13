import styled from "styled-components";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";

const Comment = () => {
  return (
    <StCommentbox>
      <StCommentinput>
        <span>
          작성자
          <StCommentInput />
        </span>
        <CommonWhiteButton text='댓글추가' />
      </StCommentinput>
      <StCommentlist>
        내용
        <CommonWhiteButton text='삭제하기' />
      </StCommentlist>
    </StCommentbox>
  );
};

export default Comment;

const StCommentbox = styled.div``;

const StCommentinput = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 30px auto;
`;

const StCommentlist = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 30px auto;
`;

const StCommentInput = styled.input`
  width: 350px;
  height: 20px;
  margin-left: 20px;
`;
