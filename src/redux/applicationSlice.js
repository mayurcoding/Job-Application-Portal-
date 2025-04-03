import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "applications",
  initialState: [],
  reducers: {
    addApplication: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
    editApplication: (state, action) => {
      const index = state.findIndex(app => app.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addApplication, editApplication } = applicationSlice.actions;
export default applicationSlice.reducer;
