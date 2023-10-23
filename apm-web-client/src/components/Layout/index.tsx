import GlobalStyles from "@mui/material/GlobalStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Outlet, useNavigate} from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1, cursor: 'pointer'}} onClick={() => navigate('/products')}>
                        Company name
                    </Typography>
                    <Button variant="outlined" onClick={() => navigate('/')}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    )
}