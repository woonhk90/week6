import Layout from "../components/layout/Layout";
import MainButton from "../components/elements/MainpageButton";
import Header from "../components/layout/Header";

const TodoMain = () => {
  return (
    <Layout>
      <Header />
      <MainButton writePage={true} text='게시글 작성' />
      <MainButton listPage={true} text='게시글 확인' />
    </Layout>
  );
};

export default TodoMain;
