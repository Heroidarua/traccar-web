import { useMediaQuery, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';

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
  brand: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    color: '#F8FAFC',
  },
  owl: {
    display: 'block',
    width: 76,
    height: 76,
    flex: '0 0 auto',
    filter: 'drop-shadow(0 8px 20px rgba(34, 211, 238, 0.18))',
  },
  brandName: {
    fontSize: 'clamp(30px, 3.2vw, 43px)',
    lineHeight: 1,
    fontWeight: 800,
    letterSpacing: '0.075em',
    whiteSpace: 'nowrap',
    '& span': { color: '#22D3EE' },
  },
  mobileBrand: {
    display: 'none',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& $owl': { width: 48, height: 48 },
    '& $brandName': { fontSize: 27 },
    [theme.breakpoints.down('sm')]: { display: 'flex' },
  },
}));

const OwlMark = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Símbolo geométrico de coruja" fill="none">
    <defs>
      <linearGradient id="owlMetal" x1="12" y1="8" x2="88" y2="92" gradientUnits="userSpaceOnUse">
        <stop stopColor="#67E8F9" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <path d="M13 15 36 28 50 18 64 28 87 15 82 67 50 91 18 67 13 15Z" stroke="url(#owlMetal)" strokeWidth="4" strokeLinejoin="round" />
    <path d="m15 17 22 12-4 25-17-12M85 17 63 29l4 25 17-12" fill="#0B1C32" stroke="url(#owlMetal)" strokeWidth="3" strokeLinejoin="round" />
    <path d="M24 48 39 35 50 48 61 35 76 48 68 69 50 82 32 69 24 48Z" fill="#102A49" stroke="#93C5FD" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="38" cy="51" r="10" fill="#090E17" stroke="#67E8F9" strokeWidth="3" />
    <circle cx="62" cy="51" r="10" fill="#090E17" stroke="#67E8F9" strokeWidth="3" />
    <circle cx="38" cy="51" r="3.5" fill="#E0F2FE" />
    <circle cx="62" cy="51" r="3.5" fill="#E0F2FE" />
    <path d="m45 64 5-6 5 6-5 7-5-7Z" fill="#22D3EE" />
    <path d="m31 75 19 10 19-10" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Brand = ({ classes }) => (
  <div className={classes.brand}>
    <OwlMark className={classes.owl} />
    <div className={classes.brandName}>PROJETE<span>+</span></div>
  </div>
);

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const compact = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <main className={classes.root}>
      <div className={classes.sidebar}>
        {!compact && <Brand classes={classes} />}
      </div>
      <Paper className={classes.paper} elevation={0}>
        <form className={classes.form}>
          <div className={classes.mobileBrand}>
            <Brand classes={classes} />
          </div>
          {children}
        </form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
