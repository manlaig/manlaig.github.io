import './layout.css'
import './navbar.css'
import { Link } from 'gatsby'
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    verticalAlign: 'middle',
  },
  grow: {
    flexGrow: 1,
  },

  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});


function NavBarLink(props)
{
  return (
    <Link
      to={props.to}
      style={{
        fontSize: '22px',
        textDecoration: 'none',
        color: 'rgba(255,255,255,0.75)',
        marginRight: '20px'
      }}>
        {props.title}
    </Link>
  );
}


function LinkMenuItem(props)
{
  return (
    <Link to={props.to} style={{textDecoration: 'none'}}>
      <MenuItem>
        <p style={{margin:0}}>{props.title}</p>
      </MenuItem>
    </Link>
  );
}


class PrimarySearchAppBar extends React.Component
{
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose} />
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose} >
          <LinkMenuItem to="/about" title="About" icon='<Face/>'/>
          <LinkMenuItem to="/projects" title="Projects"/>
          <LinkMenuItem to="/blog" title="Blog"/>
      </Menu>
    );

    return (
      <div className={classes.root} class="nav">
        <AppBar style={{background: "#363640"}}>
          <Toolbar>
            <Link to="/" title="Go to Home" style={{textDecoration:'none', color:'#FFF'}}><div class="name">Michael Ganzorig</div></Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <NavBarLink to="/about" title="About"/>
                <NavBarLink to="/projects" title="Projects"/>
                <NavBarLink to="/blog" title="Blog"/>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);