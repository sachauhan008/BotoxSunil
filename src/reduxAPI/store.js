import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import profileReducer from "./reducer/profile";
import planReducer from "./reducer/plan";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    plan: planReducer,
  },

});

