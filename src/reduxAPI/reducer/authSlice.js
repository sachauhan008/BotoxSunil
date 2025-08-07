import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getErrorMessage,
  getLocalItem,
  setLocalItem,
  showToast,
} from "../../modules/utils";

const initialToken = getLocalItem("token") || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: initialToken,
    loading: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setToken, setLoading } = authSlice.actions;
export default authSlice.reducer;


export const loginUser = (data, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await axios.post(
        "https://backend-botox.crestinfotech.com/api/auth/login",
        data
      );

      const {  token } = response.data.data;
      const successMessage = response.data.message;

      dispatch(setToken(token));
      setLocalItem("token", token);

      showToast(successMessage, 1); 
      navigate("/training-module");
    } catch (error) {
      showToast(getErrorMessage(error), 0);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const registerOrganizationUser = (formData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await axios.post(
        "https://backend-botox.crestinfotech.com/api/register/organization",
        formData
      );

      const {  token } = response.data.data;
      const successMessage = response.data.message;

      dispatch(setToken(token));
      setLocalItem("token", token);

      showToast(successMessage, 1);
      navigate("/organization-subscription");
    } catch (error) {
      const msg = getErrorMessage(error);
      showToast(msg, 0);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const registerStudentUser = (formData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await axios.post(
        "https://backend-botox.crestinfotech.com/api/register/student",
        formData
      );

      const { token } = response.data.data;
      const successMessage = response.data.message;

      dispatch(setToken(token));
      setLocalItem("token", token);

      showToast(successMessage, 1);
      navigate("/student-subscription");
    } catch (error) {
      const msg = getErrorMessage(error);
      showToast(msg, 0);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const logoutUser = (navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const token = getState().auth.token;

      await axios.post(
        "https://backend-botox.crestinfotech.com/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      dispatch(setToken(null));

      navigate("/");
      showToast("Logged out successfully!", 1);
    } catch (err) {
      console.error("Logout error:", err);
      showToast(getErrorMessage(err), 0);
    } finally {
      dispatch(setLoading(false));
    }
  };
};


