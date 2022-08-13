import Form from "../components/Form";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";

const TodoForm = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Form />
      </Layout>
    </div>
  );
};

export default TodoForm;
