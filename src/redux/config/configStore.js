import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todoSlice";
import etcSlice from "../modules/etcSlice";

export const store = configureStore({
  //   devTools : process.env.NODE_ENV !== "production",
  reducer: {
    todo,
    etc: etcSlice,
  },
});

// export default store;

//   devTools : process.env.NODE_ENV !== "production",
// reducer: {
//   todo;
// }

// export default store;
