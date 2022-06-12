import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.scss';
import CarrinhoContextProvider from './Context/carrinho';
import AppRouter from './AppRouter';
import { AppContextProvider } from './Context/AppContext';
import ThemeContextProvider from './Context/ThemeContextProvider';
import { Container } from '@mui/material';

ReactDOM.render(
  <ThemeContextProvider>
    <AppContextProvider>
      <CarrinhoContextProvider>
        <React.StrictMode>
          <Container sx={{ background: '#cccccc', height: '100vh' }}>
            <AppRouter />
          </Container>
        </React.StrictMode>
      </CarrinhoContextProvider>
    </AppContextProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
);
