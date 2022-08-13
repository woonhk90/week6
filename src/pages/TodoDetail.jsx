import Detail from "../components/Detail";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Comment from "../components/Comment";

const TodoDetail = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Detail />
        <Comment />
      </Layout>
    </div>
  );
};

export default TodoDetail;
