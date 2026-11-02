import { Fragment } from 'react';
import {
  List,
  ListItemText,
  ListItemIcon,
  Divider,
  ListSubheader,
  ListItemButton,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const SideNav = ({ routes }) => {
  const location = useLocation();

  return (
    <List
      disablePadding
      sx={{
        py: 1.5,
        px: 0.5,
        '& .MuiListSubheader-root': {
          background: 'transparent',
          color: 'text.secondary',
          fontSize: '0.68rem',
          fontWeight: 800,
          letterSpacing: '0.12em',
          lineHeight: '38px',
          textTransform: 'uppercase',
          px: 2.5,
        },
        '& .MuiDivider-root': { borderColor: 'divider', my: 1 },
      }}
    >
      {routes.map((route) =>
        route.subheader ? (
          <Fragment key={route.subheader}>
            <Divider />
            <ListSubheader>{route.subheader}</ListSubheader>
          </Fragment>
        ) : (
          <ListItemButton
            disableRipple
            component={Link}
            key={route.href}
            to={route.href}
            selected={location.pathname.match(route.match || route.href) !== null}
            sx={{
              minHeight: 44,
              px: 2,
              '& .MuiListItemText-primary': { fontSize: '0.875rem', fontWeight: 600 },
              '&.Mui-selected:before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 9,
                bottom: 9,
                width: 3,
                borderRadius: '0 4px 4px 0',
                backgroundColor: 'primary.main',
              },
              '& .MuiListItemIcon-root': { color: 'inherit' },
            }}
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItemButton>
        ),
      )}
    </List>
  );
};

export default SideNav;
