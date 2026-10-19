import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ContentCutRoundedIcon from '@mui/icons-material/ContentCutRounded'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import HighQualityOutlinedIcon from '@mui/icons-material/HighQualityOutlined'

const iconMap = {
  sell: SellOutlinedIcon,
  inventory: Inventory2OutlinedIcon,
  menu_book: MenuBookOutlinedIcon,
  auto_awesome: AutoAwesomeRoundedIcon,
  print: PrintOutlinedIcon,
  content_cut: ContentCutRoundedIcon,
  layers: LayersOutlinedIcon,
  workspace_premium: WorkspacePremiumOutlinedIcon,
  check_circle: CheckCircleOutlineRoundedIcon,
  tune: TuneRoundedIcon,
  high_quality: HighQualityOutlinedIcon,
  category: Inventory2OutlinedIcon,
  settings: SettingsOutlinedIcon,
  auto_fix_high: AutoAwesomeRoundedIcon,
}

function ServiceCard({ service }) {
  return (
    <Card sx={{ height: '100%', overflow: 'hidden', transition: 'transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 34px rgb(23 43 58 / 10%)' } }}>
      <CardMedia
        component="img"
        className="service-image"
        image={service.image}
        alt={service.alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
          event.currentTarget.nextElementSibling.style.display = 'grid'
        }}
      />
      <Box aria-hidden="true" className="service-image-fallback" sx={{ display: 'none' }}>
        <PrintOutlinedIcon sx={{ fontSize: 44, color: 'secondary.main' }} />
      </Box>
      <CardContent sx={{ p: 2.5 }}>
        <Typography component="h3" variant="h6" sx={{ fontSize: '1.04rem', fontWeight: 750 }}>{service.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{service.description}</Typography>
      </CardContent>
    </Card>
  )
}

function ProductCard({ product }) {
  const Icon = iconMap[product.icon]
  return (
    <Card className="product-card" sx={{ p: { xs: 2.5, md: 3 }, height: '100%', transition: 'border-color 180ms ease, transform 180ms ease', '&:hover': { transform: 'translateY(-3px)', borderColor: 'secondary.main' } }}>
      <Box sx={{ position: 'relative', display: 'grid', placeItems: 'center', width: 48, height: 48, borderRadius: 2, bgcolor: '#F5F4F0', color: 'primary.main' }}>
        <Icon />
      </Box>
      <Typography component="h3" variant="h6" sx={{ mt: 2.2, fontWeight: 750 }}>{product.title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{product.description}</Typography>
    </Card>
  )
}

function IconCard({ item }) {
  const Icon = iconMap[item.icon]
  return (
    <Card sx={{ p: 2.5, height: '100%', transition: 'transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 14px 28px rgb(23 43 58 / 8%)' } }}>
      <Box sx={{ display: 'grid', placeItems: 'center', width: 46, height: 46, borderRadius: 2, bgcolor: '#F5F4F0', color: 'secondary.dark' }}>
        <Icon />
      </Box>
      <Typography component="h3" variant="h6" sx={{ mt: 2, fontSize: '1.02rem', fontWeight: 750 }}>{item.title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>{item.description}</Typography>
    </Card>
  )
}

export { IconCard, ProductCard, ServiceCard }
