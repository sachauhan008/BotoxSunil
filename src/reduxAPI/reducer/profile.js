import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const profileReducer = createSlice({
  name: "profile",
  initialState: {
    profileData: {},
    loading: false,
  },
  reducers: {
    setProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
const { setProfileData, setLoading } = profileReducer.actions;
export default profileReducer.reducer;


export const getUserProfile = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const token = getState().auth.token;

      const response = await axios.get(
        "https://backend-botox.crestinfotech.com/api/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userData = response.data.data;
      dispatch(setProfileData(userData));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};