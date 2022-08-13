import TodoLogin from '../pages/TodoLogin';
import TodoSignin from '../pages/TodoSignin';
import { Routes, Route } from 'react-router-dom';


const TodoRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<TodoLogin />} />
        <Route path="/api/signup" element={<TodoSignin />} />
        <Route path="/api/login" element={<TodoLogin />} />
        {/* <Route path="/todolist" element={<TodoListPage />} />
        <Route path="/todoform" element={<TodoFormPage />} />
        <Route path="/tododetail/:id" element={<TodoDetailPage />} /> */}
      </Routes>

  );
};

export default Router;
