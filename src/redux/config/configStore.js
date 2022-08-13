import etcSlice from "../modules/etcSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    etc: etcSlice,
  },
});

export default store;
