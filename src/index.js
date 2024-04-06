import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import MyBookings from './pages/MyBookings/MyBookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "MyBookings",
        element: <MyBookings />,
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: '#2AA7FF',
      green: '#00A500'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
        contained: {
          color: "#fff",
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '90%',
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
