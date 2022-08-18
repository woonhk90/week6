import React, { useEffect } from "react";
import MypageTodo from "./MypageTodo";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { __getTodos } from "../redux/modules/etcSlice";

const cookies = new Cookies();


const Mypage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infos = useSelector((state) => state);
  console.log(infos);
  const todos = useSelector((state) => state.etc.todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

   

  return (
    <div>
      <div>
        <h1>닉네임</h1>
      </div>
      <div>내 게시글 확인</div>
      {todos?.map((todo) => (
        console.log(todo)
          // <MainTodo key={todo.id} todo={todo} />
          // <MypageTodo />
        ))}
    </div>
  );
};

export default Mypage;
