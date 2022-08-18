import styled from "styled-components";

const MypageTodo = () => {
  return (
    <StMypageTodoList>
      <StMypagetitle>제목</StMypagetitle>
    </StMypageTodoList>
  );
};

export default MypageTodo;

const StMypageTodoList = styled.div`
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

const StMypagetitle = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;
