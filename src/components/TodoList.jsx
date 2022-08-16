import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MainTodo from "../components/MainTodo";
import { __getTodos } from "../redux/modules/etcSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.etc.todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <div>
      <StTodoList>
        {todos?.map((todo) => (
          <MainTodo key={todo.id} todo={todo} />
        ))}
      </StTodoList>
    </div>
  );
};

export default TodoList;

const StTodoList = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  outline-color: #eee;

  &:hover {
    cursor: pointer;
  }
`;
