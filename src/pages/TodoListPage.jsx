import MainTodo from "../components/MainTodo";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";

const TodoListPage = () => {
  return (
    <div>
      <Layout>
        <Header />
        <MainTodo />
      </Layout>
    </div>
  );
};

export default TodoListPage;
