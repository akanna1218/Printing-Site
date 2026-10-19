import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import company from '../config/company.js'
import SectionHeading from './SectionHeading.jsx'

const serviceOptions = [
  'Stickers & Labels',
  'Hang Tags',
  'Food Product Printing & Packaging',
  'Customized Boxes',
  'Commercial Printing',
  'Other',
]

function ContactSection() {
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const enquiry = new FormData(form)
    const service = enquiry.get('service')
    const subject = `Printing enquiry${service ? ` - ${service}` : ''}`
    const body = [
      `Name: ${enquiry.get('name')}`,
      `Phone: ${enquiry.get('phone')}`,
      `Email: ${enquiry.get('email')}`,
      `Product or service: ${service}`,
      '',
      'Message:',
      enquiry.get('message'),
    ].join('\n')
    const emailUrl = `mailto:${company.enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setFormMessage('Your email app should open with the enquiry details addressed to kannaajith112@gmail.com. Review and send the email to submit your enquiry.')
    window.location.href = emailUrl
  }

  return (
    <Box id="contact" component="section" className="site-section" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Contact us" title="Let’s talk about your print." description="Share a few details about your project and the print products you’re looking for." />
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 750 }}>XXXX Graphics</Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>Printing and packaging for businesses, brands and organisations across Tamil Nadu.</Typography>
            <Stack spacing={2.2} sx={{ mt: 3.5 }}>
              <ContactDetail icon={<LocationOnOutlinedIcon />} label="Address" value={company.address} />
              <ContactDetail icon={<PhoneIphoneOutlinedIcon />} label="Phone" value={company.phone} />
              <ContactDetail icon={<EmailOutlinedIcon />} label="Email" value={company.email} />
              <ContactDetail
                icon={<WhatsAppIcon />}
                label="WhatsApp"
                value="Chat on WhatsApp"
                href={company.whatsapp.url}
                displayNumber={company.whatsapp.displayNumber}
              />
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
              Contact details will be updated when the company’s confirmed information is available.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box component="form" onSubmit={handleSubmit} noValidate={false} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField label="Name" name="name" autoComplete="name" required slotProps={{ htmlInput: { minLength: 2 } }} />
              <TextField
                label="Phone number"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                slotProps={{ htmlInput: { minLength: 7, pattern: '(?=(?:\\D*\\d){7,})[0-9+().\\s-]+' } }}
                helperText="Use at least 7 digits; spaces, +, parentheses and hyphens are allowed."
              />
              <TextField label="Email" name="email" type="email" autoComplete="email" required />
              <TextField label="Product or service required" name="service" select required defaultValue="">
                {serviceOptions.map((service) => <MenuItem key={service} value={service}>{service}</MenuItem>)}
              </TextField>
              <TextField
                label="Message"
                name="message"
                required
                multiline
                minRows={4}
                sx={{ gridColumn: { xs: 'auto', sm: '1 / -1' } }}
                slotProps={{ htmlInput: { minLength: 10 } }}
                helperText="Include sizes, quantities, artwork or any other useful details."
              />
              {formMessage && (
                <Alert severity="info" role="status" sx={{ gridColumn: { xs: 'auto', sm: '1 / -1' } }}>
                  {formMessage}
                </Alert>
              )}
              <Button type="submit" variant="contained" endIcon={<SendRoundedIcon />} sx={{ justifySelf: 'start' }}>
                Validate Enquiry
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ gridColumn: { xs: 'auto', sm: '1 / -1' } }}>
                Submitting opens your default email app with the entered details. You must send the prepared email; the website does not send it automatically.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function ContactDetail({ icon, label, value, href, displayNumber }) {
  return (
    <Stack direction="row" spacing={1.8} sx={{ alignItems: 'flex-start' }}>
      <Box sx={{ display: 'grid', placeItems: 'center', flexShrink: 0, width: 42, height: 42, borderRadius: 2, bgcolor: '#F5F4F0', color: 'secondary.dark' }}>{icon}</Box>
      <Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '.04em' }}>{label}</Typography>
        <Typography
          component={href ? 'a' : 'p'}
          href={href}
          target={href ? '_blank' : undefined}
          rel={href ? 'noopener noreferrer' : undefined}
          aria-label={href ? `Chat with XXXX Graphics on WhatsApp at ${displayNumber}` : undefined}
          sx={{
            m: 0,
            color: href ? 'primary.main' : 'inherit',
            fontWeight: 650,
            textDecoration: href ? 'underline' : 'none',
            textUnderlineOffset: '3px',
            '&:hover': href ? { color: 'secondary.dark' } : undefined,
          }}
        >
          {value}
          {displayNumber && <Box component="span" sx={{ display: 'block', color: 'text.secondary', fontSize: '.875rem', fontWeight: 400 }}>{displayNumber}</Box>}
        </Typography>
      </Box>
    </Stack>
  )
}

export default ContactSection
