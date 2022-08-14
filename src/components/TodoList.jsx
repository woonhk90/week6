import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MainTodo from "../components/MainTodo";
import { __getTodos } from "../redux/modules/etcSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const worries = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <div>
      <StTodoList>
        {worries?.map((todo) => (
          <MainTodo key={todo.id} todo={todo}></MainTodo>
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
