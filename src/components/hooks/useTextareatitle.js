import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useTextareatitle = () => {
  const param = useParams();
  const todos = useSelector((state) => state.etc.todos);
  const todo = todos.find((todo) => todo.id === parseInt(param.id));

  const [title, setTitle] = useState(todo?.title);

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [title, handler];
};
export default useTextareatitle;
