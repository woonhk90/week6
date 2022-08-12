import TodoLogin from '../pages/TodoLogin';
import { Routes, Route } from 'react-router-dom';

const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoLogin />} />
      {/* <Route path="/todolist" element={<TodoListPage />} />
      <Route path="/todoform" element={<TodoFormPage />} />
      <Route path="/tododetail/:id" element={<TodoDetailPage />} /> */}
    </Routes>
  );
};

export default TodoRouter;