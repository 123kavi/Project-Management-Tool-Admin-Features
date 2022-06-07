import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import ApiService3 from '../services/api.service3';

function Header(props) {
  const logout = () => {
    ApiService3.logout().then(res => {
      if(res.success) {
        props.history.push('/');
      }
    });
  }

  return (
    <AppBar className="app-bar" position="static">
      <Toolbar>
        <Typography variant="h6" className="header">
          Dashboard3
        </Typography>
        <Button className="logout-btn" onClick={logout} color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
