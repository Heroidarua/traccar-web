export default {
  MuiUseMediaQuery: {
    defaultProps: {
      noSsr: true,
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: '#090E17',
        scrollbarColor: '#334155 #0B1220',
        scrollbarWidth: 'thin',
      },
      '*::-webkit-scrollbar': { width: '8px', height: '8px' },
      '*::-webkit-scrollbar-track': { background: '#0B1220' },
      '*::-webkit-scrollbar-thumb': {
        background: '#334155',
        borderRadius: '8px',
        border: '2px solid #0B1220',
      },
      '*::-webkit-scrollbar-thumb:hover': { background: '#475569' },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: 'none',
        border: theme.palette.mode === 'dark' ? '1px solid rgba(148, 163, 184, 0.10)' : 'none',
      }),
      rounded: { borderRadius: 14 },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.paper,
        borderBottom: '1px solid',
        borderColor: theme.palette.divider,
        boxShadow: '0 8px 28px rgba(0, 0, 0, 0.16)',
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        margin: '3px 8px',
        transition: 'background-color 160ms ease, color 160ms ease',
        '&.Mui-selected': {
          backgroundColor: 'rgba(59, 130, 246, 0.16)',
          color: theme.palette.primary.light,
        },
        '&.Mui-selected:hover': {
          backgroundColor: 'rgba(59, 130, 246, 0.23)',
        },
        '&:hover': {
          backgroundColor: 'rgba(148, 163, 184, 0.09)',
        },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 38,
        color: 'inherit',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#0B1422' : '#FFFFFF',
        borderRadius: 10,
        '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#64748B' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
          borderWidth: 1,
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: { borderRadius: 10, textTransform: 'none', fontWeight: 600 },
      sizeMedium: { height: '40px' },
      containedPrimary: { boxShadow: '0 5px 16px rgba(59, 130, 246, 0.22)' },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: { borderRadius: 10, transition: 'background-color 160ms ease' },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 14, backgroundImage: 'none' },
    },
  },
  MuiFormControl: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      enterDelay: 500,
      enterNextDelay: 500,
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.palette.divider,
        '@media print': {
          color: theme.palette.alwaysDark.main,
        },
      }),
      head: { fontWeight: 700 },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: { borderRadius: 16, backgroundImage: 'none' },
    },
  },
  MuiBottomNavigation: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderTop: '1px solid',
        borderColor: theme.palette.divider,
      }),
    },
  },
};
