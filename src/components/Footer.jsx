import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import company from '../config/company.js'
import { services } from '../data/siteContent.js'

const footerLinks = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Products', 'products'],
  ['Capabilities', 'capabilities'],
  ['Our Process', 'process'],
  ['Contact', 'contact'],
]

function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 5, md: 7 }, bgcolor: 'primary.main', color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ pb: 5 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography component="a" href="#home" sx={{ color: '#fff', textDecoration: 'none', fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '1.2rem' }}>{company.name}</Typography>
            <Typography sx={{ mt: 1.5, maxWidth: 330, color: 'rgb(255 255 255 / 70%)', fontSize: '0.9rem' }}>
              Customized printing, labels, stickers, packaging and commercial print for your business.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography sx={{ mb: 1.5, color: 'secondary.main', fontSize: '.76rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>Quick Links</Typography>
            <Stack spacing={1}>
              {footerLinks.map(([label, id]) => <a className="footer-link" href={`#${id}`} key={id}>{label}</a>)}
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography sx={{ mb: 1.5, color: 'secondary.main', fontSize: '.76rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>Services</Typography>
            <Stack spacing={1}>
              {services.slice(0, 4).map((service) => <Typography key={service.title} sx={{ color: 'rgb(255 255 255 / 72%)', fontSize: '.9rem' }}>{service.title}</Typography>)}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ mb: 1.5, color: 'secondary.main', fontSize: '.76rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>Contact</Typography>
            <Stack spacing={1}>
              <Typography sx={{ color: 'rgb(255 255 255 / 72%)', fontSize: '.9rem' }}>{company.address}</Typography>
              <Typography sx={{ color: 'rgb(255 255 255 / 72%)', fontSize: '.9rem' }}>{company.phone}</Typography>
              <Typography sx={{ color: 'rgb(255 255 255 / 72%)', fontSize: '.9rem' }}>{company.email}</Typography>
              <a className="footer-link" href={company.whatsapp.url} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              <Typography sx={{ color: 'rgb(255 255 255 / 72%)', fontSize: '.9rem' }}>{company.location}</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: 'rgb(255 255 255 / 16%)' }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ pt: 2.5, justifyContent: 'space-between' }}>
          <Typography variant="caption" sx={{ color: 'rgb(255 255 255 / 62%)' }}>© {new Date().getFullYear()} {company.name}. All rights reserved.</Typography>
          <Typography variant="caption" sx={{ color: 'rgb(255 255 255 / 62%)' }}>Print · Package · Present</Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
