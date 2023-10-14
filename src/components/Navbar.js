import { AppBar, Toolbar, Button, Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { blue } from "@mui/material/colors";

function Navbar() {
    const theme = createTheme({
        palette: {
          primary: {
            main: blue[600]
          }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <CssBaseline />
                <AppBar position="static" color="primary">
                <Toolbar>
                    <Button
                    LinkComponent={NavLink}
                    to="/"
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? "darkblue" : "" };
                    }}
                    sx={{ color: "white" }}
                    >
                    Home
                    </Button>

                    <Button
                    LinkComponent={NavLink}
                    to="/testing"
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? "darkblue" : "" };
                    }}
                    sx={{ color: "white" }}
                    >
                    Testing
                    </Button>

                    <Button
                    LinkComponent={NavLink}
                    to="/supplies"
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? "darkblue" : "" }
                    }}
                    sx={{ color: "white" }}
                    >
                    Supplies
                    </Button>

                </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default Navbar;