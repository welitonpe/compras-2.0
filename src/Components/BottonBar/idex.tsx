import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { list } from "../../Constants/InitialState";
import { Container } from "@mui/material";
import { LiveTv } from "@mui/icons-material";

const StyledFab = styled(Fab)({
	position: "absolute",
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: "0 auto",
});

type BottomAppBarProps = {
	onClick: () => void;
};

function formatConverter(value: number): string {
	const dollarUS = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
		useGrouping: false,
	});
	return dollarUS.format(value);
}
const BottomAppBar: React.FC<BottomAppBarProps> = ({ onClick }) => {
	return (
		<React.Fragment>
			<Container sx={{ background: "#cccccc", height: "100%" }}>
				<CssBaseline />

				{LiveTv.length && (
					<Paper square sx={{ pb: "50px" }}>
						<Typography
							component="div"
							gutterBottom
							sx={{ p: 2, pb: 0 }}
							variant="h5"
						>
							Inbox
						</Typography>
						<List sx={{ mb: 2 }}>
							{list.length ? (
								list.map(({ id, productName, quantity, unitaryValue }) => (
									<React.Fragment key={id}>
										{id === 1 && (
											<ListSubheader sx={{ bgcolor: "background.paper" }}>
												Today
											</ListSubheader>
										)}
										{id === 3 && (
											<ListSubheader sx={{ bgcolor: "background.paper" }}>
												Yesterday
											</ListSubheader>
										)}
										<ListItem button divider>
											<ListItemAvatar>
												<Avatar
													alt="Profile Picture"
													src="https://i.pravatar.cc/300"
												/>
											</ListItemAvatar>
											<div style={{ width: "100%" }}>
												<div
													style={{
														display: "flex",
														flexDirection: "row",
														justifyContent: "space-between",
													}}
												>
													<Typography>{productName}</Typography>

													<div
														style={{
															display: "flex",
															flexDirection: "row",
														}}
													>
														<Typography>{unitaryValue}</Typography>
													</div>
												</div>
												<div
													style={{
														display: "flex",
														flexDirection: "row",
														justifyContent: "space-between",
													}}
												>
													<Typography>Quantidade</Typography>
													<Typography>{quantity}</Typography>
												</div>
												<div
													style={{
														display: "flex",
														flexDirection: "row",
														justifyContent: "space-between",
													}}
												>
													<Typography>Valor Total</Typography>
													<Typography>{unitaryValue * quantity}</Typography>
												</div>
											</div>
										</ListItem>
									</React.Fragment>
								))
							) : (
								<></>
							)}
						</List>
					</Paper>
				)}
				<AppBar
					color="primary"
					position="fixed"
					sx={{ top: "auto", bottom: 0 }}
				>
					<Toolbar>
						{/* <IconButton aria-label="open drawer" color="inherit">
							<MenuIcon />
						</IconButton> */}
						<StyledFab aria-label="add" color="success" onClick={onClick}>
							<AddIcon />
						</StyledFab>
						{/* <IconButton color="inherit">
							<MoreIcon />
						</IconButton> */}
						<Box sx={{ flexGrow: 1 }} />
						{/* <IconButton color="inherit">
							<SearchIcon />
						</IconButton> */}
						<Typography variant="h6">{formatConverter(150.0)}</Typography>
					</Toolbar>
				</AppBar>
			</Container>
		</React.Fragment>
	);
};
export default BottomAppBar;
