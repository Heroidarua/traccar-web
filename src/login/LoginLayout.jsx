import { Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100dvh',
    width: '100%',
    overflow: 'hidden',
    color: '#F8FAFC',
    background: '#050B16',
    [theme.breakpoints.down('md')]: {
      minHeight: '100dvh',
      height: 'auto',
      overflow: 'visible',
      flexDirection: 'column',
    },
  },
  sidebar: {
    position: 'relative',
    isolation: 'isolate',
    display: 'flex',
    flex: '0 0 58%',
    minWidth: 0,
    minHeight: '100dvh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 'clamp(34px, 5vw, 76px)',
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at 12% 75%, rgba(0, 113, 255, .28), transparent 42%), radial-gradient(ellipse at 82% 18%, rgba(0, 195, 255, .12), transparent 35%), linear-gradient(135deg, #071326 0%, #050B16 58%, #081B35 100%)',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      width: 'min(72vw, 820px)',
      aspectRatio: '1',
      left: '-18%',
      bottom: '-42%',
      borderRadius: '50%',
      border: '1px solid rgba(56, 189, 248, .2)',
      boxShadow: '0 0 0 26px rgba(37, 99, 235, .035), 0 0 0 70px rgba(37, 99, 235, .03), 0 0 100px rgba(0, 126, 255, .18)',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      opacity: .22,
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(125deg, transparent 0 78%, rgba(14, 165, 233, .22) 78.1%, transparent 78.5%), linear-gradient(125deg, transparent 0 83%, rgba(14, 165, 233, .14) 83.1%, transparent 83.4%)',
    },
    [theme.breakpoints.down('lg')]: { flexBasis: '52%', padding: '42px' },
    [theme.breakpoints.down('md')]: {
      flex: '0 0 auto',
      minHeight: 0,
      padding: '36px 24px 24px',
    },
  },
  brand: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(16px, 2vw, 28px)',
    animation: '$rise .8s ease both',
  },
  owlWrap: {
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    width: 'clamp(76px, 9vw, 116px)',
    aspectRatio: '1',
    flex: '0 0 auto',
    borderRadius: '50%',
    border: '1px solid rgba(56, 189, 248, .65)',
    background: 'radial-gradient(circle, rgba(14, 116, 204, .22), rgba(3, 15, 32, .75) 68%)',
    boxShadow: '0 0 26px rgba(14, 165, 233, .22), inset 0 0 24px rgba(14, 165, 233, .12)',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      inset: '-8px',
      borderRadius: '50%',
      border: '1px dashed rgba(56, 189, 248, .32)',
    },
    '&:after': { inset: '-15px', borderStyle: 'solid', borderColor: 'rgba(37, 99, 235, .16)' },
  },
  owl: {
    width: '76%',
    height: '76%',
    filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, .38))',
  },
  brandDivider: {
    width: 1,
    height: 'clamp(58px, 7vw, 82px)',
    background: 'linear-gradient(transparent, rgba(255,255,255,.8), transparent)',
  },
  brandText: { minWidth: 0 },
  brandName: {
    fontSize: 'clamp(32px, 4vw, 58px)',
    lineHeight: .98,
    fontWeight: 900,
    fontStyle: 'italic',
    letterSpacing: '-.055em',
    whiteSpace: 'nowrap',
    color: '#F8FAFC',
    textShadow: '0 4px 24px rgba(0,0,0,.35)',
    '& span': { color: '#22D3EE' },
  },
  tagline: {
    marginTop: 10,
    color: '#DCEBFA',
    fontSize: 'clamp(9px, 1vw, 13px)',
    fontWeight: 700,
    letterSpacing: '.22em',
    whiteSpace: 'nowrap',
  },
  subTagline: {
    marginTop: 6,
    color: '#22D3EE',
    fontSize: 'clamp(9px, .9vw, 12px)',
    fontWeight: 800,
    letterSpacing: '.25em',
  },
  planetScene: {
    position: 'absolute',
    zIndex: -1,
    width: 'min(66vw, 760px)',
    left: '-12%',
    bottom: '2%',
    opacity: .82,
    pointerEvents: 'none',
    filter: 'drop-shadow(0 0 38px rgba(0, 112, 255, .25))',
    [theme.breakpoints.down('md')]: { display: 'none' },
  },
  featureGrid: {
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: 12,
    marginTop: 'auto',
    paddingTop: 'clamp(180px, 27vh, 300px)',
    [theme.breakpoints.down('lg')]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', paddingTop: 140 },
    [theme.breakpoints.down('md')]: { paddingTop: 28, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
    [theme.breakpoints.down('sm')]: { gap: 8 },
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    minWidth: 0,
    padding: '13px 11px',
    borderRadius: 13,
    border: '1px solid rgba(96, 165, 250, .22)',
    background: 'linear-gradient(145deg, rgba(10, 30, 56, .82), rgba(4, 13, 27, .72))',
    backdropFilter: 'blur(12px)',
    boxShadow: 'inset 0 1px rgba(255,255,255,.035), 0 8px 24px rgba(0,0,0,.16)',
    transition: 'border-color .25s, transform .25s, box-shadow .25s',
    '&:hover': { transform: 'translateY(-3px)', borderColor: 'rgba(34,211,238,.55)', boxShadow: '0 8px 24px rgba(0,112,255,.12)' },
  },
  featureIcon: {
    display: 'grid',
    placeItems: 'center',
    width: 34,
    height: 34,
    flex: '0 0 auto',
    borderRadius: 9,
    color: '#38BDF8',
    background: 'rgba(14, 116, 204, .17)',
    border: '1px solid rgba(56, 189, 248, .22)',
    '& svg': { fontSize: 19 },
  },
  featureText: { color: '#DCEBFA', fontSize: 11, lineHeight: 1.3, fontWeight: 650 },
  paper: {
    position: 'relative',
    display: 'flex',
    flex: '1 1 42%',
    minWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'clamp(28px, 4vw, 64px)',
    background: 'radial-gradient(ellipse at 85% 15%, rgba(15, 75, 145, .18), transparent 38%), linear-gradient(145deg, #07101F, #050A14)',
    [theme.breakpoints.down('md')]: { flex: '1 1 auto', padding: '28px 18px 40px' },
  },
  form: {
    width: '100%',
    maxWidth: 470,
    boxSizing: 'border-box',
    padding: 'clamp(26px, 3.2vw, 46px)',
    borderRadius: 28,
    border: '1px solid rgba(59, 130, 246, .42)',
    background: 'linear-gradient(145deg, rgba(11, 27, 49, .94), rgba(5, 14, 27, .96))',
    boxShadow: '0 0 0 1px rgba(34,211,238,.055), 0 20px 70px rgba(0,0,0,.4), 0 0 42px rgba(0, 112, 255, .12), inset 0 1px rgba(255,255,255,.05)',
    animation: '$rise .8s .08s ease both',
    '& .MuiInputLabel-root': { color: '#A8BCD4' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#67E8F9' },
    '& .MuiOutlinedInput-root': {
      color: '#F8FAFC',
      borderRadius: 12,
      background: 'rgba(3, 13, 27, .62)',
      '& fieldset': { borderColor: 'rgba(96, 165, 250, .28)' },
      '&:hover fieldset': { borderColor: 'rgba(56, 189, 248, .65)' },
      '&.Mui-focused fieldset': { borderColor: '#22D3EE', borderWidth: 1.5, boxShadow: '0 0 16px rgba(34,211,238,.12)' },
    },
    '& .MuiInputAdornment-root': { color: '#C8D8EB' },
    '& .MuiButton-contained': {
      minHeight: 52,
      borderRadius: 12,
      fontWeight: 800,
      textTransform: 'none',
      fontSize: 15,
      color: '#fff',
      background: 'linear-gradient(100deg, #1769E8, #08B9D8)',
      boxShadow: '0 8px 24px rgba(0, 128, 255, .28)',
      transition: 'transform .2s, box-shadow .2s, filter .2s',
      '&:hover': { transform: 'translateY(-2px)', filter: 'brightness(1.08)', boxShadow: '0 12px 30px rgba(0, 174, 255, .35)' },
      '&:disabled': { color: 'rgba(255,255,255,.65)', background: 'linear-gradient(100deg, #24518b, #176b7c)' },
    },
    '& .MuiLink-root': { color: '#67DDF2' },
  },
  '@keyframes rise': {
    from: { opacity: 0, transform: 'translateY(14px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

const OwlMark = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Coruja geométrica PROJETE+" fill="none">
    <defs>
      <linearGradient id="projeteOwlMetal" x1="10" y1="8" x2="90" y2="92" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A5F3FC" />
        <stop offset=".52" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <path d="M10 13 35 26 50 15 65 26 90 13 84 68 50 92 16 68 10 13Z" stroke="url(#projeteOwlMetal)" strokeWidth="3.5" strokeLinejoin="round" />
    <path d="m14 18 23 12-5 25-17-13M86 18 63 30l5 25 17-13" fill="#0B2442" stroke="#38BDF8" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M20 48 39 34 50 46 61 34 80 48 70 72 50 85 30 72 20 48Z" fill="#102D50" stroke="#93C5FD" strokeWidth="2" strokeLinejoin="round" />
    <path d="M27 50 40 40 49 51 40 63 27 50ZM73 50 60 40 51 51 60 63 73 50Z" fill="#061321" stroke="#67E8F9" strokeWidth="2.5" />
    <circle cx="39" cy="51" r="4" fill="#CFFAFE" />
    <circle cx="61" cy="51" r="4" fill="#CFFAFE" />
    <path d="m45 65 5-7 5 7-5 8-5-8Z" fill="#22D3EE" />
    <path d="m32 76 18 9 18-9" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const PlanetScene = ({ className }) => (
  <svg className={className} viewBox="0 0 820 560" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="projeteEarth" cx="50%" cy="38%" r="62%">
        <stop offset="0" stopColor="#174D83" />
        <stop offset=".58" stopColor="#0B2B51" />
        <stop offset="1" stopColor="#030B19" />
      </radialGradient>
      <linearGradient id="projeteRim" x1="90" y1="110" x2="680" y2="470">
        <stop stopColor="#38BDF8" />
        <stop offset=".5" stopColor="#1D4ED8" />
        <stop offset="1" stopColor="#071A35" />
      </linearGradient>
      <clipPath id="projeteEarthClip"><circle cx="360" cy="370" r="270" /></clipPath>
      <filter id="projeteGlow"><feGaussianBlur stdDeviation="8" /></filter>
    </defs>
    <circle cx="360" cy="370" r="282" stroke="#168BFF" strokeOpacity=".35" strokeWidth="12" filter="url(#projeteGlow)" />
    <circle cx="360" cy="370" r="270" fill="url(#projeteEarth)" stroke="url(#projeteRim)" strokeWidth="2.5" />
    <g clipPath="url(#projeteEarthClip)">
      <path d="m170 210 52-44 49 18 28 41-20 29-47 9-18 42-39 4-25-43-36-14 10-42 46 0ZM330 260l55-35 72 15 31 46-31 31-17 57-42 34-32-20-8-60-39-27 11-41ZM530 175l58 20 43 54-26 36-50-4-28-43 3-63ZM120 410l60-25 42 20 15 51-41 38-62-20-14-64ZM440 440l60-35 63 25 35 59-46 37-73-20-39-66Z" fill="#1B5685" fillOpacity=".58" stroke="#48B8F4" strokeOpacity=".24" />
      <path d="M95 330Q360 95 625 330M100 420Q365 180 625 420M165 155Q360 370 555 155M160 535Q365 300 560 535" stroke="#38BDF8" strokeOpacity=".23" strokeWidth="1.5" />
      <g fill="#FDE68A" opacity=".95">
        <circle cx="245" cy="258" r="3"/><circle cx="267" cy="272" r="2"/><circle cx="295" cy="245" r="2.5"/><circle cx="405" cy="315" r="3"/><circle cx="432" cy="344" r="2"/><circle cx="472" cy="292" r="2"/><circle cx="550" cy="270" r="2.5"/><circle cx="195" cy="430" r="2"/><circle cx="350" cy="470" r="2.5"/><circle cx="490" cy="445" r="2"/>
      </g>
      <g stroke="#22D3EE" strokeWidth="2" strokeOpacity=".8" fill="none">
        <path d="M245 258Q360 95 550 270"/><path d="M295 245Q365 365 472 292"/><path d="M195 430Q330 300 432 344"/>
      </g>
      <g fill="#22D3EE" stroke="#CFFAFE" strokeWidth="1.5">
        <path d="M245 240c-10 0-17 8-17 17 0 13 17 31 17 31s17-18 17-31c0-9-7-17-17-17Z"/><circle cx="245" cy="257" r="5" fill="#08345C" stroke="none"/>
        <path d="M472 274c-9 0-16 7-16 16 0 12 16 29 16 29s16-17 16-29c0-9-7-16-16-16Z"/><circle cx="472" cy="290" r="5" fill="#08345C" stroke="none"/>
        <path d="M550 252c-8 0-14 6-14 14 0 11 14 26 14 26s14-15 14-26c0-8-6-14-14-14Z"/><circle cx="550" cy="266" r="4.5" fill="#08345C" stroke="none"/>
      </g>
    </g>
    <path d="M90 365Q350 15 705 315" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="5 9"/>
    <circle cx="90" cy="365" r="4" fill="#67E8F9"/><circle cx="705" cy="315" r="4" fill="#67E8F9"/>
  </svg>
);

const features = [
  { icon: '⌖', label: 'Rastreamento em Tempo Real' },
  { icon: '▥', label: 'Histórico Completo' },
  { icon: '♧', label: 'Alertas Inteligentes' },
  { icon: '◇', label: 'Mais Segurança para Você' },
];

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <section className={classes.sidebar} aria-label="Identidade PROJETE+">
        <div className={classes.brand}>
          <div className={classes.owlWrap}><OwlMark className={classes.owl} /></div>
          <div className={classes.brandDivider} />
          <div className={classes.brandText}>
            <div className={classes.brandName}>PROJETE<span>+</span></div>
            <div className={classes.tagline}>RASTREAMENTO INTELIGENTE</div>
            <div className={classes.subTagline}>SEMPRE AO SEU LADO</div>
          </div>
        </div>
        <PlanetScene className={classes.planetScene} />
        <div className={classes.featureGrid}>
          {features.map((feature) => (
            <div className={classes.feature} key={feature.label}>
              <div className={classes.featureIcon}><span aria-hidden="true">{feature.icon}</span></div>
              <div className={classes.featureText}>{feature.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Paper className={classes.paper} elevation={0}>
        <form className={classes.form}>
          {children}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 28, color: '#8EA5C0', fontSize: 11, letterSpacing: '.04em' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#5EE0A0' }}>
              <span aria-hidden="true">◆</span> Conexão Segura
            </span>
            <span style={{ color: 'rgba(148,163,184,.4)' }}>•</span>
            <span>PROJETE+ v1.0</span>
          </div>
        </form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
