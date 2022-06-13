import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import RecipeReviewCard from "../Components/Card/RecipeReviewCard";
import TransitionsModal from "../Components/Modal/Modal";
import React from "react";

function Home() {
	console.log();
	return (
		<TransitionsModal>
			<RecipeReviewCard>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					<TextField
						color="primary"
						focused
						fullWidth
						label="Item Description"
						sx={{ pb: 2 }}
						variant="standard"
					/>

					<TextField
						// InputLabelProps={{
						// 	shrink: true,
						// }}
						color="primary"
						focused
						fullWidth
						label="Valor Unitario"
						sx={{ pb: 2, pr: 2 }}
						type="number"
						variant="standard"
					/>
					<TextField
						color="primary"
						focused
						fullWidth
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						label="Quantidade"
						sx={{ pb: 6, pr: 2 }}
						type="number"
						variant="standard"
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "flex-end",
							width: 1,
						}}
					>
						<Button sx={{}} variant="outlined">
							Cancelar
						</Button>
						<Button variant="contained">Adicionar</Button>
					</Box>
				</Box>
			</RecipeReviewCard>
		</TransitionsModal>
	);
}
export default Home;
