import { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import BottomAppBar from '../BottonBar/idex';

const Footer: React.FC = () => {
  const { handleOpenModal } = useContext(AppContext);
  return (
    <>
      <BottomAppBar onClick={handleOpenModal}></BottomAppBar>
    </>
  );
};
export default Footer;
