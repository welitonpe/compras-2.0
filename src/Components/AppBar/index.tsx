import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
const ButtonAppBar: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						aria-label="menu"
						color="inherit"
						edge="start"
						size="large"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					{/* <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
						News
					</Typography> */}
					{/* <Button color="inherit">Login</Button> */}
					<Box sx={{ flexGrow: 1 }} />

					<LocalGroceryStoreIcon />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default ButtonAppBar;
