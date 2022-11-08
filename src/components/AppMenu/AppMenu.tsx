import React, {MouseEvent, useState} from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Favorite} from '@mui/icons-material';
import {Button, Container} from '@mui/material';
import styles from './AppMenu.module.css';

const styleHandler = (data: boolean)=> {
    return data ? styles.menu__link_active : styles.menu__link
}


export const AppMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to="/profile" className={(data)=>styleHandler(data.isActive)}><MenuItem
        onClick={handleMenuClose}>Profile</MenuItem></NavLink>
      <NavLink to="/my-account" className={(data)=>styleHandler(data.isActive)}><MenuItem
        onClick={handleMenuClose}>My account</MenuItem></NavLink>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavLink to={'/messages'} className={(data)=>styleHandler(data.isActive)}>
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails"
                      color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon/>
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
      </NavLink>
      <NavLink to="/favorites"
               className={(data) => styleHandler(data.isActive)}>
        <MenuItem>
          <IconButton size="large" aria-label="show products from wishlist"
                      color="inherit">
            <Badge badgeContent={10} color="secondary">
              <Favorite/>
            </Badge>
          </IconButton>
          <p>Wishlist</p>
        </MenuItem>
      </NavLink>
      <NavLink to="/notifications"
               className={(data) => styleHandler(data.isActive)}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
      </NavLink>
      <NavLink to="/post-add"
               className={(data) => styleHandler(data.isActive)}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="post new add"
            color="inherit"
          >
            <Badge color="secondary">
              <AddIcon/>
            </Badge>
          </IconButton>
          <p>Post Add</p>
        </MenuItem>
      </NavLink>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{display: {xs:'block'}}}
            >
              <NavLink to={"/"} className={styles.menu__link}>Super Sales</NavLink>
            </Typography>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
              <NavLink to={'/messages'}
                       className={(data)=>styleHandler(data.isActive)}>
                <IconButton size="large" aria-label="show 4 new mails"
                            color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon/>
                  </Badge>
                </IconButton>
              </NavLink>
              <NavLink to={'/favorites'}
                    className={(data)=>styleHandler(data.isActive)}>
                <IconButton size="large"
                            aria-label="show products from wishlist"
                            color="inherit">
                  <Badge badgeContent={10} color="secondary">
                    <Favorite/>
                  </Badge>
                </IconButton>
              </NavLink>
  
              <NavLink to={'/notifications'} className={(data)=>styleHandler(data.isActive)}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon/>
                  </Badge>
                </IconButton>
              </NavLink>
              <NavLink to="/post-add" className={(data)=>styleHandler(data.isActive)}><Button
                style={{color: 'inherit', padding: '10px 8px'}}>Post
                Add</Button>
              </NavLink>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
            </Box>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon/>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
