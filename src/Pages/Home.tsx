import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import RecipeReviewCard from '../Components/Card/RecipeReviewCard';
import TransitionsModal from '../Components/Modal/Modal';

function Home() {
  return (
    <TransitionsModal>
      <RecipeReviewCard>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            sx={{ pb: 2 }}
            label="Item Description"
            color="primary"
            focused
            fullWidth
            variant="standard"
          />

          <TextField
            sx={{ pb: 2, pr: 2, maxWidth: '50%' }}
            label="Valor Unitario"
            color="primary"
            focused
            variant="standard"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            sx={{ pb: 6, pr: 2, maxWidth: '50%' }}
            label="Quantidade"
            color="primary"
            focused
            variant="standard"
            type="number"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: 1,
            }}
          >
            <Button variant="outlined" sx={{}}>
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
