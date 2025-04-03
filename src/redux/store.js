import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./applicationSlice";

const store = configureStore({
  reducer: {
    applications: applicationReducer,
  },
});

export default store; // ✅ Ensure it's exported as default
