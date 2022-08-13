import Layout from "../components/layout/Layout";
import MainButton from "../components/elements/MainpageButton";
import Header from "../components/layout/Header";
import CommonBlueButton from "../components/elements/CommonBlueButton";
import CommonWhiteButton from "../components/elements/CommonWhiteButton";

const TodoMain = () => {
  return (
    <Layout>
      <Header />
      <MainButton writePage={true} text='게시글 작성' />
      <MainButton listPage={true} text='게시글 확인' />
      <CommonBlueButton text='로그인' margin='5%' />
      <CommonBlueButton text='로그아웃' margin='5%' />
      <CommonWhiteButton text='마이페이지' margin='5%'></CommonWhiteButton>
    </Layout>
  );
};

export default TodoMain;
