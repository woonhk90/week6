import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoDetail from "../pages/TodoDetail";
import TodoForm from "../pages/TodoForm";
import TodoListPage from "../pages/TodoListPage";
import TodoLogin from "../pages/TodoLogin";
import TodoMain from "../pages/TodoMain";
import TodoMypage from "../pages/TodoMypage";
import TodoSignin from "../pages/TodoSignin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoLogin />} />
        <Route path='/list' element={<TodoListPage />} />
        <Route path='/form' element={<TodoForm />} />
        <Route path='/detail' element={<TodoDetail />} />
        <Route path='/main' element={<TodoMain />} />
        <Route path='/mypage' element={<TodoMypage />} />
        <Route path='/signin' element={<TodoSignin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
