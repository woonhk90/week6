import TodoList from "../components/TodoList";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";

const TodoListPage = () => {
  return (
    <div>
      <Layout>
        <Header />
        <TodoList />
      </Layout>
    </div>
  );
};

export default TodoListPage;
