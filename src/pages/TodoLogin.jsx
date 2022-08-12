import React from "react";
import Login from "../components/Login";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";

const TodoLogin = () => {
  return (
    <Layout>
      <Header />
      <Login />
    </Layout>
  );
};

export default TodoLogin;
