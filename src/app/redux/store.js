import { use } from "react";
import usersreducer from "./slice";
import todoReducer from "./todoSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
	reducer: {
		usersData: usersreducer,
		todosData: todoReducer,
	}
});
