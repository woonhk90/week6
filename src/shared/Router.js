import { Routes, Route } from "react-router-dom";
import TodoDetail from "../pages/TodoDetail";
import TodoForm from "../pages/TodoForm";
import TodoListPage from "../pages/TodoListPage";
import TodoLogin from "../pages/TodoLogin";
import TodoMain from "../pages/TodoMain";
import TodoMypage from "../pages/TodoMypage";
import TodoSignup from "../pages/Todosignup";
import TodoDetailChange from "../pages/TodoDetailChange";
import Cookies from "universal-cookie";
import {Navigate} from "react-router-dom";
const Router = () => {
  const cookies = new Cookies();
  const refresh_token = cookies.get("Authorization");
  return (
    <Routes>
      <Route path='/' element={<TodoMain />} />
      <Route path='/list' element={<TodoListPage />} />
      <Route path='/form' element={<TodoForm />} />
      {/* {refresh_token !== undefined ?  <Route path='/form' element={<TodoForm />} />: <Route path='/form' element={<Navigate to="/main" />} />} */}
      <Route path='/detail/:id' element={<TodoDetail />} />
      <Route path='/main' element={<TodoMain />} />
      {refresh_token !== undefined ?  <Route path='/mypage' element={<TodoMypage />} />: <Route path='/mypage' element={<Navigate to="/main" />} />}
      <Route path='/signup' element={<TodoSignup />} />
      <Route path='/login' element={<TodoLogin />} />
      <Route path='/detail/:id/change' element={<TodoDetailChange />} />
    </Routes>
  );
};

export default Router;
