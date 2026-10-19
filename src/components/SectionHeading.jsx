import { Box, Typography } from '@mui/material'

function SectionHeading({ eyebrow, title, description, align = 'left', maxWidth = 680 }) {
  return (
    <Box sx={{ maxWidth, textAlign: align, mx: align === 'center' ? 'auto' : 0, mb: { xs: 4, md: 5 } }}>
      <span className="section-kicker">{eyebrow}</span>
      <Typography component="h2" variant="h2" sx={{ mt: 1.5, fontSize: { xs: '2rem', md: '2.65rem' } }}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ mt: 1.6, maxWidth: align === 'center' ? 620 : 650, mx: align === 'center' ? 'auto' : 0 }}>
          {description}
        </Typography>
      )}
    </Box>
  )
}

export default SectionHeading
