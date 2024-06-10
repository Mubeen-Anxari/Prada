import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  value: number;
}

const initialState: UserState = {
  value: 0,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
