import { Routes, Route } from "react-router-dom";
import TodoDetail from "../pages/TodoDetail";
import TodoForm from "../pages/TodoForm";
import TodoListPage from "../pages/TodoListPage";
import TodoLogin from "../pages/TodoLogin";
import TodoMain from "../pages/TodoMain";
import TodoMypage from "../pages/TodoMypage";
import TodoSignup from "../pages/Todosignup";
import TodoDetailChange from "../pages/TodoDetailChange";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<TodoMain />} />
      <Route path='/list' element={<TodoListPage />} />
      <Route path='/form' element={<TodoForm />} />
      <Route path='/detail/:id' element={<TodoDetail />} />
      <Route path='/main' element={<TodoMain />} />
      <Route path='/mypage' element={<TodoMypage />} />
      <Route path='/signup' element={<TodoSignup />} />
      <Route path='/login' element={<TodoLogin />} />
      <Route path='/detail/:id/change' element={<TodoDetailChange />} />
    </Routes>
  );
};

export default Router;
