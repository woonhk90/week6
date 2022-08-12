import React from "react";
import MypageTodo from "./MypageTodo";

const Mypage = () => {
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
