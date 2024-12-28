"use client";
const { Provider } = require("react-redux");
import React, { use } from "react";
import { store } from "./store";

export default function Providers({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
