import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getErrorMessage, showToast } from "../../modules/utils";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    plans: [],        
    loading: false,   
  },
  reducers: {
    setPlans: (state, action) => {
      state.plans = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPlans, setLoading } = planSlice.actions;
export default planSlice.reducer;

export const fetchPlans = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await axios.get(
        "https://backend-botox.crestinfotech.com/api/plans"
      );

      dispatch(setPlans(response.data.data));
    } catch (error) {
      showToast(getErrorMessage(error), 0);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
