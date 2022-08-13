import styled from "styled-components";

const TodoList = () => {
  return <StWorryList>asd</StWorryList>;
};

export default TodoList;

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
