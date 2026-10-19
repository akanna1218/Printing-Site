import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import company from '../config/company.js'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Services', 'services'],
  ['Products', 'products'],
  ['Capabilities', 'capabilities'],
  ['Our Process', 'process'],
  ['Contact', 'contact'],
]

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgb(255 255 255 / 96%)', color: 'primary.main', borderBottom: '1px solid #ECEBE7', backdropFilter: 'blur(14px)' }}>
      <Toolbar sx={{ minHeight: { xs: 68, md: 78 }, width: '100%', maxWidth: 1320, mx: 'auto', px: { xs: 2, sm: 3, lg: 5 } }}>
        <Box component="a" href="#home" onClick={closeDrawer} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, color: 'inherit', textDecoration: 'none', mr: 'auto' }}>
          <Box aria-hidden="true" sx={{ display: 'grid', placeItems: 'center', width: 37, height: 37, borderRadius: '10px 10px 10px 3px', bgcolor: 'primary.main', color: 'secondary.main', fontFamily: 'Manrope, sans-serif', fontSize: 20, fontWeight: 800 }}>X</Box>
          <Box>
            <Typography sx={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '1rem', lineHeight: 1.1 }}>{company.name}</Typography>
            <Typography sx={{ mt: 0.35, color: 'text.secondary', fontSize: '0.62rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>Print · Package · Present</Typography>
          </Box>
        </Box>

        <Box component="nav" aria-label="Main navigation" sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: { lg: 1.6, xl: 2.2 }, mr: 2 }}>
          {links.map(([label, id]) => (
            <Typography key={id} component="a" href={`#${id}`} sx={{ color: 'text.secondary', fontSize: '0.83rem', fontWeight: 600, textDecoration: 'none', '&:hover, &:focus-visible': { color: 'primary.main' } }}>
              {label}
            </Typography>
          ))}
        </Box>
        <Button component="a" href="#contact" variant="contained" color="secondary" sx={{ display: { xs: 'none', sm: 'inline-flex' }, minHeight: 42, px: 2.2 }}>
          Get a Quote
        </Button>
        <IconButton
          aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={drawerOpen}
          aria-controls="mobile-navigation"
          onClick={() => setDrawerOpen((open) => !open)}
          sx={{ display: { xs: 'inline-flex', lg: 'none' }, ml: 1, color: 'primary.main' }}
        >
          {drawerOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box id="mobile-navigation" component="nav" aria-label="Mobile navigation" sx={{ width: { xs: 290, sm: 340 }, p: 2.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, pb: 1 }}>
            <Typography fontWeight={800}>{company.name}</Typography>
            <IconButton aria-label="Close navigation menu" onClick={closeDrawer}><CloseRoundedIcon /></IconButton>
          </Box>
          <List>
            {links.map(([label, id]) => (
              <ListItemButton key={id} component="a" href={`#${id}`} onClick={closeDrawer} sx={{ borderRadius: 2, minHeight: 48 }}>
                <ListItemText primary={label} sx={{ '& .MuiListItemText-primary': { fontWeight: 600 } }} />
              </ListItemButton>
            ))}
          </List>
          <Button component="a" href="#contact" onClick={closeDrawer} variant="contained" color="secondary" fullWidth sx={{ mt: 1 }}>
            Get a Quote
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar
