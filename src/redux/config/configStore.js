import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todoSlice";

export const store = configureStore({
<<<<<<< HEAD
  //   devTools : process.env.NODE_ENV !== "production",
  reducer: {
    todo,
  },
});

// export default store;
=======
//   devTools : process.env.NODE_ENV !== "production",
  reducer: {
		todo
  },
});

// export default store;
>>>>>>> main
