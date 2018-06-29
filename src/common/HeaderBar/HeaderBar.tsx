import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./HeaderBar.scss";

class HeaderBar extends React.Component {
    public render() {
        return (
            <div className="header-bar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" className="menu-button"><MenuIcon /></IconButton>
                        <Typography variant="title" color="inherit" className="flex">Title</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default HeaderBar;
