import React from "react";

const Comment = () => {
  return <Stid></Stid>;
};

export default Comment;

const StId = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
`;

const StUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const StTitle = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  height: 50px;
  margin: 20px auto;
  text-align: center;
`;

const StContent = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  height: 250px;
  margin: 20px auto;
  text-align: center;
`;

const StButton = styled.button`
  padding: 10px;
`;

const StButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin: 0px auto;
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StEditContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StTextarea = styled.textarea`
  width: 100%;
  height: 250px;
  box-sizing: border-box;
`;

const StTextareaTitle = styled.textarea`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`;
