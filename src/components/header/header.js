import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <AppBar 
            position="sticky"
            color="grey">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h4"
                    component="div" sx={{ justifyContent: "center"}} >
                    When Did It All Go Wrong?
                </Typography>
                <Button 
                    variant="outlined" 
                    color="inherit"
                    href="https://github.com/dkuznetsov/help-ukraine"
                    float="right">
                    How To Help
                </Button>
            </Toolbar>
        </AppBar>
    );
}