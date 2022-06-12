import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Container } from '@mui/material';
import AppContext from '../../Context/AppContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
};

type TransitionsModalProps = {
  children: React.ReactNode;
};
const TransitionsModal: React.FC<TransitionsModalProps> = ({ children }) => {
  const { openModal, handleCloseModal } = React.useContext(AppContext);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
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
