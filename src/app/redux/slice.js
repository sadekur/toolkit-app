const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
	users: [],
};

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
		},
		removeUser: (state, action) => {
			const data = state.users.filter((user) =>{ return user.id !== action.payload});
			state.users = data;
		}
	},
});

export const { AddUser, removeUser } = Slice.actions;
export default Slice.reducer;
