import Layout from "../components/layout/Layout";
import MainButton from "../components/elements/MainpageButton";
import Header from "../components/layout/Header";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";
import { useNavigate } from "react-router-dom";

const TodoMain = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header />
      <MainButton writePage={true} text='게시글 작성' />
      <MainButton listPage={true} text='게시글 확인' />
      <CommonBlueButton
        text='로그인'
        margin='5%'
        onClick={() => navigate(`/login`)}
      />
      <CommonWhiteButton
        text='마이페이지'
        margin='5%'
        onClick={() => navigate(`/mypage/`)}
      ></CommonWhiteButton>
    </Layout>
  );
};

export default TodoMain;
