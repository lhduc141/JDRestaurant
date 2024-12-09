import { createSlice } from "@reduxjs/toolkit";
import { getMenuThunk } from "./userThunk";

const initialState = {
  check: "hello",
  menu: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuThunk.fulfilled, (state, action) => {
      state.menu = action.payload;
    });
  },
});

export const {} = userReducer.actions;

export default userReducer.reducer;
