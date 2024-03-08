import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import Data from "../UserInfo/Data";
import Badge from '@mui/material/Badge';
import { Switch } from "antd";
import { dark } from "@mui/material/styles/createPalette";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: 'rgb(65, 42, 168)',
      fontSize: '15px',
      height: '35px',
      width: '35px'
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Header =()=>{

  const darkmode =()=>{
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  }


  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  let local = localStorage;
    const navigate = useNavigate();
    const [logout, setLogout] = React.useState(false);
    React.useEffect(()=>{
        if(!local.getItem("user_info")) navigate('/login');
    }, [logout]);

    const logoutBTN =(e)=>{
      e.preventDefault();
      local.removeItem("user_info");

      setLogout(true);
    }


    return(
      <div className="header">
        <div>
        <div className="title">
            <div className="logo">P</div>
            <div className="name">PROTON</div>
        </div>

        <div className="search">
          <div><i className="fas fa-search"/><input type="text" placeholder="Search"/></div>
        </div>
        </div>

        <div>
        <div className="notifications">
          <div>
          <Badge badgeContent={Data.messages.number} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 10, height: 16, minWidth: 16 } }}>
           <i className="fas fa-envelope"/>
          </Badge>
          </div>
          <div>
          <Badge badgeContent={Data.notification.number} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: 10, height: 16, minWidth: 16 } }}>
           <i className="fas fa-bell"/>
          </Badge>
          </div>
        </div>
      
      <div className="user">
        <div className="avatar">
        <Stack direction="row" >
          <Avatar alt="Remy Sharp" src={Data.userInfo.ProfilePic}
        sx={{ width: 28, height: 28 }}/>
      {/* <Avatar sx={{ backgroundColor: '#fff' }} {...stringAvatar('Andrew Hayford')} /> */}
    </Stack>
        </div>

    <div className="user-name">
    <h6>{Data.userInfo.FirstName} {Data.userInfo.LastName}</h6>
    <p>{Data.userInfo.Program}</p>
    </div>

    <div className="">
    <Dropdown>
      <MenuButton className="Menu-Button" sx={{ backgroundColor: 'var(--container-color)', border: 'none', hover: '#fff', padding: '3px' }}><i className="fas fa-chevron-down" style={{ color: 'var(--text-color)' }}></i></MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Language settings')}>
          Language settings
        </MenuItem>
        <MenuItem onClick={logoutBTN}>Log out</MenuItem>
        <span style={{ paddingLeft: '8px' }} >Dark Mode <Switch onClick={darkmode} style={{ marginLeft: '30px' }}/></span>
      </Menu>
    </Dropdown>
    </div>
    </div>

      </div>
      </div>
    );
};

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };
  z-index: 1;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
);
export default Header;