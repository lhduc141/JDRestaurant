import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./userService";
import { message } from "antd";

export const menuThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload) => {
    try {
      const data = await userService.postLogin(payload);
      return data.data.content;
    } catch (error) {
      message.success(error);
    }
  }
);

export const getMenuThunk = createAsyncThunk(
  "userReducer/getMenu",
  async () => {
    try {
      const data = await userService.showMenu();
      return data.data.content;
    } catch (error) {
      message.success(error);
    }
  }
);
