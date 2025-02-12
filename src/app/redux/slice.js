import { act } from "react";
import reducer from "./todoSlice";

const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  userApiData: [],
  users: JSON.parse(localStorage.getItem("users")) || [],
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
	console.log("action");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

const Slice = createSlice({
  name: "AddUserSlices",
  initialState,
  reducers: {
    AddUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.users.push(data);
      let usersData = JSON.stringify(current(state.users));
      localStorage.setItem("users", usersData);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      state.users = data;
      const usersData = JSON.stringify(data);
      localStorage.setItem("users", usersData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
	  console.log("reducer");
      state.isloading = false;
      state.userApiData = action.payload;
    });
  },
});

export const { AddUser, removeUser } = Slice.actions;
export default Slice.reducer;
