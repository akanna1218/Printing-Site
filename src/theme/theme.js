import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const baseTheme = createTheme({
  palette: {
    primary: { main: '#172B3A', contrastText: '#FFFFFF' },
    secondary: { main: '#C9A34E', contrastText: '#172B3A' },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    text: { primary: '#172B3A', secondary: '#414B54' },
    divider: '#E8E7E2',
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Manrope', sans-serif", fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.08 },
    h2: { fontFamily: "'Manrope', sans-serif", fontWeight: 750, letterSpacing: '-0.035em', lineHeight: 1.15 },
    h3: { fontFamily: "'Manrope', sans-serif", fontWeight: 700, letterSpacing: '-0.025em' },
    h4: { fontFamily: "'Manrope', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' },
    button: { fontWeight: 700, textTransform: 'none' },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { minHeight: 46, paddingInline: 22, borderRadius: 8, boxShadow: 'none' },
        containedPrimary: { '&:hover': { backgroundColor: '#243f52', boxShadow: 'none' } },
        containedSecondary: { '&:hover': { backgroundColor: '#d7b564', boxShadow: 'none' } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: '1px solid #ECEBE7', borderRadius: 14, boxShadow: '0 8px 24px rgb(23 43 58 / 5%)' },
      },
    },
    MuiTextField: {
      defaultProps: { size: 'medium', fullWidth: true },
    },
  },
})

const theme = responsiveFontSizes(baseTheme)

export default theme
