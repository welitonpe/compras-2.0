import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Container, SxProps } from "@mui/material";
import AppContext from "../../Context/AppContext";
import { theme } from "../../Context/ThemeContextProvider";

const style: SxProps = {
	backgroundColor: theme.palette.primary.light,
	position: "absolute" as const,
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90%",
};

type TransitionsModalProps = {
	children: React.ReactNode;
};
const TransitionsModal: React.FC<TransitionsModalProps> = ({ children }) => {
	const { openModal, handleCloseModal } = React.useContext(AppContext);
	return (
		<div>
			<Modal
				BackdropProps={{
					timeout: 500,
				}}
				BackdropComponent={Backdrop}
				aria-describedby="transition-modal-description"
				aria-labelledby="transition-modal-title"
				closeAfterTransition
				onClose={handleCloseModal}
				open={openModal}
			>
				<Fade in={openModal}>
					<Container maxWidth="sm">
						<Box sx={style}>{children}</Box>
					</Container>
				</Fade>
			</Modal>
		</div>
	);
};
export default TransitionsModal;
