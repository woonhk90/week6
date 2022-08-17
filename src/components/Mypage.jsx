import React, { useEffect } from "react";
import MypageTodo from "./MypageTodo";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();


const Mypage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    __getUserInfo()
  },[])

  const refresh_token = cookies.get("Authorization");
  const __getUserInfo = async() => {
    try {
      const data = await axios.get(`http://13.125.252.187/api/login`, {
        headers: {
          Authorization: refresh_token
        },
      });
      console.log("로그인성공데이터1:", data);
      if(!data){navigate("/login")}
    } catch {
      // 오류 발생시 실행
    }
  }

  

  return (
    <div>
      <div>
        <h1>닉네임</h1>
      </div>
      <div>내 게시글 확인</div>
      <MypageTodo />
    </div>
  );
};

export default Mypage;
