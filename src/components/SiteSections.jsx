import { Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { capabilities, features, processSteps, products, services } from '../data/siteContent.js'
import SectionHeading from './SectionHeading.jsx'
import { IconCard, ProductCard, ServiceCard } from './Cards.jsx'

function AboutSection() {
  return (
    <Box id="about" component="section" className="site-section" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeading eyebrow="About XXXX Graphics" title="Print that brings your brand together." />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.06rem' } }}>
              XXXX Graphics is a Tamil Nadu-based printing and packaging company serving businesses, brands, manufacturers, food companies, retailers and other organisations.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              From customized labels and packaging to everyday commercial print, we focus on professional presentation, accurate finishing and dependable service. Tell us what you need, and we’ll discuss the right print options for your project.
            </Typography>
            <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
              {['Custom printing', 'Product presentation', 'Careful finishing'].map((item) => (
                <Box key={item} sx={{ px: 1.6, py: 0.8, borderRadius: 99, bgcolor: '#F5F4F0', color: 'primary.main', fontSize: '0.82rem', fontWeight: 700 }}>{item}</Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function ServicesSection() {
  return (
    <Box id="services" component="section" className="site-section" sx={{ py: { xs: 7, md: 11 }, bgcolor: '#F5F4F0' }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="What we do" title="Printing for every part of your business." description="Thoughtful print and packaging options to help your products and everyday business materials look their best." />
        <Grid container spacing={2.5}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

function ProductsSection() {
  return (
    <Box id="products" component="section" className="site-section" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Product range" title="The details that make it yours." description="Explore our print categories. Each order can be discussed around your specific artwork, product and intended use." align="center" />
        <Grid container spacing={2.5}>
          {products.map((product) => (
            <Grid key={product.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

function CapabilitiesSection() {
  return (
    <Box id="capabilities" component="section" className="site-section" sx={{ py: { xs: 7, md: 11 }, bgcolor: '#F5F4F0' }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Print & finishing" title="The right finish makes a difference." description="Production and finishing options to suit a range of print requirements, from custom shapes to metallic details." />
        <Grid container spacing={2}>
          {capabilities.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <IconCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

function ProcessSection() {
  return (
    <Box id="process" component="section" className="site-section" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Our process" title="From your idea to finished print." description="A clear, collaborative path from the first conversation to preparing your finished products." align="center" />
        <Grid container spacing={2}>
          {processSteps.map((step, index) => (
            <Grid key={step.title} size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Box sx={{ height: '100%', px: { xs: 1, md: 1.5 } }}>
                <Box className="process-number">{String(index + 1).padStart(2, '0')}</Box>
                <Typography component="h3" variant="h6" sx={{ mt: 2, fontWeight: 750 }}>{step.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>{step.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

function WhyChooseUsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#F5F4F0' }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Why XXXX Graphics" title="Practical print expertise, thoughtfully finished." description="We bring different print needs together with customized options, attentive production and finishing selected to suit each job." />
        <Grid container spacing={2}>
          {features.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 2.4 }}>
              <IconCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

function CTASection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Card sx={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, p: { xs: 3, md: 5 }, color: '#fff', bgcolor: 'primary.main', border: 0, borderRadius: { xs: 3, md: 4 }, '&::after': { content: '""', position: 'absolute', width: 230, height: 230, border: '1px solid rgb(201 163 78 / 25%)', borderRadius: '50%', right: { xs: -100, md: 110 }, top: -125, pointerEvents: 'none' } }}>
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 630 }}>
            <Typography component="h2" variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>Let&apos;s Print Your Next Idea.</Typography>
            <Typography sx={{ mt: 1.4, color: 'rgb(255 255 255 / 76%)' }}>Tell us about your printing and packaging requirements. We&apos;ll help you explore the options.</Typography>
          </Box>
          <Button component="a" href="#contact" variant="contained" color="secondary" endIcon={<ArrowForwardRoundedIcon />} sx={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>Get a Quote</Button>
        </Card>
      </Container>
    </Box>
  )
}

export {
  AboutSection,
  CapabilitiesSection,
  CTASection,
  ProcessSection,
  ProductsSection,
  ServicesSection,
  WhyChooseUsSection,
}
