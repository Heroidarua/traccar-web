import { useMediaQuery, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import LogoImage from './LogoImage';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    background: '#090E17',
    [theme.breakpoints.down('md')]: { minHeight: '100dvh', height: 'auto' },
  },
  sidebar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: 'radial-gradient(circle at 50% 45%, #1D4ED8 0%, #10264B 38%, #0B1422 78%)',
    paddingBottom: theme.spacing(5),
    width: theme.dimensions.sidebarWidth,
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 360,
      height: 360,
      border: '1px solid rgba(96, 165, 250, 0.18)',
      borderRadius: '50%',
      boxShadow: '0 0 0 45px rgba(96, 165, 250, 0.035), 0 0 0 90px rgba(96, 165, 250, 0.025)',
    },
    [theme.breakpoints.down('lg')]: { width: theme.dimensions.sidebarWidthTablet },
    [theme.breakpoints.down('sm')]: { display: 'none' },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
    color: '#E8EEF8',
    background: 'radial-gradient(circle at 75% 20%, rgba(30, 64, 175, 0.12), transparent 34%), #090E17',
    boxShadow: '-2px 0px 32px rgba(0, 0, 0, 0.28)',
    [theme.breakpoints.up('lg')]: { padding: theme.spacing(0, 25, 0, 0) },
    [theme.breakpoints.down('md')]: { minHeight: '100dvh', padding: theme.spacing(3, 0) },
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: '100%',
    boxSizing: 'border-box',
    '& .MuiInputLabel-root': { color: '#94A3B8' },
    '& .MuiLink-root': { color: '#60A5FA' },
  },
}));

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <main className={classes.root}>
      <div className={classes.sidebar}>
        {!useMediaQuery(theme.breakpoints.down('lg')) && <LogoImage color="#FFFFFF" />}
      </div>
      <Paper className={classes.paper} elevation={0}>
        <form className={classes.form}>{children}</form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
