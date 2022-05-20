import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
    return (
        <AppBar 
            position="sticky"
            color="grey"
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5"
                    component="div" sx={{ flexGrow: 1 }}>
                    When Did It All Go Wrong?
                </Typography>
                <Button color="inherit">Donate</Button>
            </Toolbar>
        </AppBar>
    );
}