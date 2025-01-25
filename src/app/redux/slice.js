const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
	users: JSON.parse(localStorage.getItem("users")) || [],
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
			let usersData = JSON.stringify(current( state.users ));
			localStorage.setItem("users", usersData);
		},
		removeUser: (state, action) => {
			const data = state.users.filter((user) =>{ return user.id !== action.payload});
			state.users = data;
			const usersData = JSON.stringify(data)
      		localStorage.setItem("users", usersData);
		}
	},
});

export const { AddUser, removeUser } = Slice.actions;
export default Slice.reducer;
