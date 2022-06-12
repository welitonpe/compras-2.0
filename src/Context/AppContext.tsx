import { createContext, useState } from 'react';

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
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('OPEN', open);
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
