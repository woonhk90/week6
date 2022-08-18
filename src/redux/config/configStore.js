import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todoSlice";
import etcSlice from "../modules/etcSlice";
import commentsSlice from "../modules/commentsSlice";

export const store = configureStore({
  //   devTools : process.env.NODE_ENV !== "production",
  reducer: {
    //todo,
    etc: etcSlice,
    comments: commentsSlice,
  },
});

// export default store;

//   devTools : process.env.NODE_ENV !== "production",
// reducer: {
//   todo;
// }

// export default store;
