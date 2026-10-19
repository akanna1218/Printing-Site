Act as a senior React frontend developer and build a complete, professional, fully responsive business website for **XXXX Graphics**, a Tamil Nadu-based printing and packaging company.

Use the supplied company brochure as the source of truth for the website content.

## 1. Technology Stack

- React with Vite
- JavaScript and JSX, not TypeScript
- Material UI (MUI) for UI components
- MUI Icons
- Emotion for MUI styling
- React functional components and hooks
- MUI theming using `createTheme`, `ThemeProvider`, `CssBaseline`, and `responsiveFontSizes`
- Responsive layouts using MUI Grid, Container, Box, Stack, and breakpoints
- Plain CSS only where necessary for custom layouts or animations
Do not use shadcn/ui. Use Material UI consistently throughout the application.

Do not use Next.js, Redux, Zustand, or unnecessary third-party libraries.

Inspect the existing project and `package.json` before making changes. Install only missing dependencies.

Required dependencies:

`npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`

## 2. Design Requirements
Create a premium, modern B2B corporate website for a printing and packaging business.

Use this colour palette:

- Primary: Dark navy `#172B3A`
- Secondary: Warm gold `#C9A34E`
- Background: White `#FFFFFF`
- Alternate background: Light neutral `#F5F4F0`
- Body text: Dark grey `#414B54`
Design requirements:

- Professional typography and visual hierarchy.
- Generous whitespace and consistent spacing.
- High-quality printing and packaging imagery.
- Subtle card shadows and hover transitions.
- Rounded corners used consistently.
- Clear calls to action.
- Consistent section headings.
- A polished desktop, tablet, and mobile experience.
Avoid excessive gradients, excessive animations, cluttered layouts, and generic-looking template designs.

## 3. Website Sections
Build a single-page website with these sections in order:

### Navbar

- Company name or logo.
- Home, About, Services, Products, Capabilities, Our Process, Contact.
- Get a Quote button.
- Desktop navigation using MUI AppBar and Toolbar.
- Mobile navigation using MUI Drawer and an accessible hamburger button.
- Smooth scrolling to sections.
- Close the Drawer when a navigation link is selected.
- Add appropriate hover and keyboard-focus states.

### Hero Section
Heading: "Your Brand. Our Printing."

Supporting text:
"Customized printing, labels, stickers, packaging, and commercial printing solutions for your business."

Include:

- Explore Services button.
- Get a Quote button.
- Large, high-quality printing or packaging hero image.
- Two-column layout on desktop.
- Vertically stacked layout on mobile.
- Responsive heading sizes and spacing.

### About Us
Explain that XXXX Graphics is a Tamil Nadu-based printing and packaging company serving businesses, brands, manufacturers, food companies, retailers, and other organisations.

Highlight customized printing, professional presentation, accurate finishing, and dependable service.

### Our Services
Build a reusable ServiceCard component using MUI Card, CardMedia, CardContent, and Button where appropriate.

Display these services:

- Customized Stickers & Labels.
- Customized Hang Tags.
- Food Product Printing & Packaging.
- Customized Food Boxes.
- Customized Boxes.
- Commercial Printing.
Each card should support an image, title, description, and optional action.

Render cards using data arrays and `.map()`.

### Product Range
Create reusable product category cards for:

1. Stickers & Labels: product labels, masala stickers, custom-shaped stickers, barcode stickers, food labels, beverage stickers, promotional stickers, and brand labels.
2. Packaging: customized boxes, branded packaging, food product boxes, custom-printed boxes, and product packaging.
3. Business Printing: brochures, books, notices, receipts, catalogues, promotional materials, and product manuals.
4. Specialty Printing: hang tags, laminated prints, custom labels, plotter-cut products, and customized stickers.
Use reusable components and data-driven rendering rather than duplicated JSX.

### Printing & Finishing Capabilities
Display reusable capability cards for:

- Digital production printing machine (13 × 19 inches).
- Plotter machine for custom-shaped stickers and labels.
- Thermal lamination.
- Customized gold foil finishing.
- Customized silver foil finishing.
- Professional finishing options.
Use relevant MUI Icons and concise descriptions based on the brochure.

### Our Process
Display five steps:

1. Discuss — understand the customer's printing requirements.
2. Design — use supplied artwork or discuss design requirements.
3. Print — produce the requested materials.
4. Finish — apply relevant cutting, plotter processing, or lamination.
5. Deliver — prepare the finished products according to requirements.
Use MUI Stepper or another suitable responsive layout. Ensure the steps remain easy to read on mobile.

### Why Choose Us
Build reusable feature cards for:

- Customized Solutions.
- Quality Printing.
- Multiple Products.
- Flexible Production.
- Professional Finishing.
Use concise descriptions grounded in the brochure. Do not invent certifications, customer counts, awards, production volumes, or unsupported claims.

### Call to Action
Heading: "Let's Print Your Next Idea."

Supporting text should invite visitors to discuss their printing and packaging requirements.

Include a prominent Get a Quote button that navigates to the Contact section.

### Contact Section
Create a responsive contact section containing:

- Company name.
- Address.
- Phone number.
- Email.
- Optional WhatsApp contact link.
- Enquiry form.
Form fields:

- Name.
- Phone number.
- Email.
- Product or service required.
- Message.
Use MUI TextField, Select, Button, and appropriate validation.

Provide helpful validation messages and accessible field labels.

The brochure does not provide complete contact details. Store missing details as clearly labelled placeholders in a central configuration file. Never invent real contact information.

Do not pretend the enquiry form submits successfully. If no backend exists, implement client-side validation and explain that a backend or form service is needed to deliver enquiries.

### Footer
Include:

- Company name and short description.
- Quick navigation links.
- Service categories.
- Contact placeholders.
- Copyright notice.
Use a dark navy background and responsive columns.

## 4. Reusable Component Architecture
Use a clean folder structure similar to:

src/
components/
Navbar.jsx
HeroSection.jsx
SectionHeading.jsx
ServiceCard.jsx
ServiceGrid.jsx
ProductCard.jsx
ProductGallery.jsx
CapabilityCard.jsx
CapabilitiesSection.jsx
ProcessStep.jsx
ProcessSection.jsx
FeatureCard.jsx
WhyChooseUs.jsx
CTASection.jsx
ContactSection.jsx
Footer.jsx
data/
services.js
products.js
capabilities.js
processSteps.js
features.js
config/
company.js
theme/
theme.js
styles/
global.css
App.jsx
main.jsx

Adjust this structure if the existing project has a better established organisation.

Responsibilities:

- Each component should have a clear, focused purpose.
- Reuse cards and section headings wherever possible.
- Pass content through props.
- Store repeated content in data files.
- Render collections using `.map()` and stable keys.
- Keep company contact details in one central configuration file.
- Avoid oversized components and duplicated JSX.
- Do not create abstractions that add complexity without providing reuse.

## 5. Material UI Theme
Create a shared MUI theme in `src/theme/theme.js`.

Configure:

- Primary and secondary colours.
- Typography variants and responsive font sizes.
- Consistent button styles.
- Card border radius and elevation.
- TextField defaults.
- Consistent component styling.
- Suitable background and text colours.
Wrap the application in ThemeProvider and use CssBaseline.

Prefer MUI's `sx` prop and theme breakpoints for component-level styling. Keep complex or repeated styles in shared CSS files.

Avoid mixing multiple styling approaches unnecessarily.

## 6. Responsive Design
The website must work at viewport widths of:

- 320px
- 375px
- 425px
- 768px
- 1024px
- 1440px
Requirements:

- Use responsive MUI Grid layouts and breakpoints.
- Use `Container` to control content width.
- Use `Stack` and `Box` for flexible layouts.
- Use responsive typography and spacing.
- Use `useMediaQuery` only when JavaScript behaviour genuinely needs to change.
- Use CSS breakpoints for presentation changes whenever possible.
- Stack cards and form columns appropriately on mobile.
- Ensure navigation is usable on small screens.
- Ensure images maintain appropriate aspect ratios.
- Make buttons and form controls touch-friendly.
- Prevent horizontal scrolling and clipped content.
- Use `scroll-margin-top` or an equivalent solution so section headings are not hidden behind the fixed or sticky navbar.
- Respect `prefers-reduced-motion`.
Do not rely on fixed widths that break on smaller screens.

## 7. Images and Assets
Use existing project assets if available.

If suitable product images are not available:

- Create an organised image assets directory.
- Use appropriate printing, packaging, sticker, label, and commercial printing images.
- Use reliable image URLs only when permitted.
- Provide meaningful alt text.
- Lazy-load below-the-fold images.
- Use a fallback for missing images.
- Avoid broken image links and repeated unrelated stock images.
Keep image paths easy to replace when actual company photographs become available.

## 8. Accessibility and Code Quality

- Use semantic HTML.
- Use accessible MUI components.
- Provide meaningful image alt text.
- Label form inputs correctly.
- Support keyboard navigation.
- Include visible focus states.
- Maintain sufficient colour contrast.
- Add appropriate ARIA attributes to mobile navigation.
- Use descriptive component names and variables.
- Avoid unnecessary state and effects.
- Do not use React hooks when plain CSS or HTML behaviour is sufficient.
- Do not use `React.memo()` without a meaningful reason.
- Fix missing imports, incorrect exports, console errors, and React key warnings.
- Keep code readable and maintainable.

## 9. Implementation Instructions
Work directly in the project files.

Follow this workflow:

1. Inspect the existing project and package.json.
2. Set up missing dependencies.
3. Create the theme and global styles.
4. Implement the Navbar and Hero.
5. Implement reusable service and product components.
6. Implement capabilities and process sections.
7. Implement Why Choose Us and the CTA.
8. Implement Contact and Footer.
9. Add responsive mobile navigation.
10. Check all navigation links, buttons, images, and form validation.
11. Run `npm run build`.
12. Fix build errors and other issues found during testing.
13. Review responsive layouts and make necessary corrections.
14. Summarise the files created, dependencies installed, commands executed, and any remaining tasks.
Do not stop after producing a plan or mockup. Implement the actual working React website.

Do not overwrite unrelated existing code. Inspect before modifying files.

Do not claim to have tested a viewport, run a command, or verified functionality unless you actually did so.

The final result should be a polished, professional printing and packaging website with reusable React components, a consistent Material UI design system, and reliable responsive behaviour across desktop, tablet, and mobile.
