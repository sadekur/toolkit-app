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
	},
});

export const { AddUser } = Slice.actions;
export default Slice.reducer;
