import React from 'react'
import ReactDOM from 'react-dom/client'
import setup from './setup.ts';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Routers from './Routers.tsx';
import CssBaseline from "@mui/material/CssBaseline";

setup();
const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Routers/>
        </ThemeProvider>
    </React.StrictMode>,
)
