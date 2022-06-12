import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const messages: any[] = [
  {
    id: 1,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 8,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 9,
    primary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Feijão Macassar</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>R$ 3,50</div>
            </div>
          </div>
        </Typography>
      </>
    ),
    secondary: (
      <>
        <Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Quantidade</div>
            <div>10</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Valor Total</div>
            <div>R$ 35,00</div>
          </div>
        </Typography>
      </>
    ),
    person: '/static/images/avatar/1.jpg',
  },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});
type BottomAppBarProps = {
  onClick: () => void;
};
const BottomAppBar: React.FC<BottomAppBarProps> = ({ onClick }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.length ? (
            messages.map(({ id, primary, secondary, person }) => (
              <React.Fragment key={id}>
                {id === 1 && (
                  <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                    Today
                  </ListSubheader>
                )}
                {id === 3 && (
                  <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                    Yesterday
                  </ListSubheader>
                )}
                <ListItem button divider>
                  <ListItemAvatar>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                    {/* <Avatar alt="Profile Picture" src={<AddShoppingCartIcon/>} /> */}
                  </ListItemAvatar>
                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography>Feijão Macassar</Typography>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                      >
                        <Typography>R$ 3,50</Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography>Quantidade</Typography>
                      <Typography>10</Typography>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography>Valor Total</Typography>
                      <Typography>R$ 35,00</Typography>
                    </div>
                  </div>
                  {/* <ListItemText primary={primary} secondary={secondary} />
                   */}
                </ListItem>
              </React.Fragment>
            ))
          ) : (
            <></>
          )}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="success" aria-label="add" onClick={onClick}>
            <AddIcon />
          </StyledFab>
          {/* <IconButton color="inherit">
						<MoreIcon />
					</IconButton> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <IconButton color="inherit">
						<SearchIcon />
					</IconButton> */}
          <Typography>Total: R$ 150,00</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default BottomAppBar;
