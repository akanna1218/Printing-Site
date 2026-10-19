import { Box, Button, Container, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined'

function HeroSection() {
  return (
    <Box id="home" component="section" className="site-section" sx={{ py: { xs: 6, md: 10, lg: 12 }, bgcolor: '#F5F4F0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' }, alignItems: 'center', gap: { xs: 4, md: 7, lg: 9 } }}>
          <Box sx={{ maxWidth: 540 }}>
            <span className="section-kicker">Printing & packaging · Tamil Nadu</span>
            <Typography component="h1" variant="h1" sx={{ mt: 2.4, fontSize: { xs: '2.65rem', sm: '3.4rem', md: '3.75rem', lg: '4.15rem' } }}>
              Your Brand.<br />
              <Box component="span" sx={{ color: 'secondary.main' }}>Our Printing.</Box>
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2.4, fontSize: { xs: '1rem', md: '1.1rem' }, maxWidth: 500 }}>
              Customized printing, labels, stickers, packaging, and commercial printing solutions for your business.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3.5, maxWidth: { xs: 320, sm: 'none' } }}>
              <Button component="a" href="#services" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>Explore Services</Button>
              <Button component="a" href="#contact" variant="outlined" sx={{ borderColor: 'primary.main', color: 'primary.main' }}>Get a Quote</Button>
            </Stack>
            <Stack direction="row" spacing={2.5} sx={{ mt: 4, pt: 3, borderTop: '1px solid #E3E0D8', maxWidth: 470 }}>
              {['Stickers & labels', 'Custom packaging', 'Business print'].map((item) => (
                <Typography key={item} variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, lineHeight: 1.5 }}>{item}</Typography>
              ))}
            </Stack>
          </Box>
          <Box className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=1400&q=90"
              alt="Printed paper goods and packaging materials arranged on a studio table"
              fetchPriority="high"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                event.currentTarget.nextElementSibling.style.display = 'grid'
              }}
            />
            <Box aria-hidden="true" className="hero-image-fallback">
              <PrintOutlinedIcon sx={{ fontSize: 76, color: 'secondary.main' }} />
            </Box>
            <Box className="hero-photo-caption">
              <strong>Made for your brand.</strong>
              <span>From the first label to the final finish.</span>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
