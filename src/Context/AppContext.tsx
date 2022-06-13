/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useReducer, useState } from "react";

const initialState = {
	open: false,
};
type AppContextType = {
	openModal: boolean;
	handleCloseModal: () => void;
	handleOpenModal: () => void;
};

const AppContext = createContext<AppContextType>({
	openModal: false,
	handleCloseModal: () => {},
	handleOpenModal: () => {},
});

export const AppContextProvider = ({
	children,
	...initialStateProps
}: {
	children: React.ReactNode;
}) => {
	// const [state, dispatch] = useReducer(reducer, {
	// 	...initialState,
	// 	...initialStateProps,
	// });

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	console.log("OPEN", open);
	return (
		<AppContext.Provider
			value={{
				openModal: open,
				handleOpenModal: handleOpen,
				handleCloseModal: handleClose,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppContext;
