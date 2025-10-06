# Headen Tech Solutions - Federal Government Contracting Website

A production-ready static website built with Astro + Tailwind CSS for Headen Tech Solutions (HTS), designed for federal government contracting and hosted on GitHub Pages.

## 🏛️ Project Overview

This website serves as the public marketing presence for Headen Tech Solutions, a federal government contractor specializing in AI/ML, data engineering, geospatial analytics, and secure software delivery within Azure Government environments.

### Key Features

- **Static Site**: Built with Astro for optimal performance and security
- **Federal Compliance**: WCAG 2.1 AA accessibility, FedRAMP High compliance messaging
- **Security-First**: CSP headers, security meta tags, no sensitive data processing
- **Azure Government Integration**: Clean handoff to secure portal environment
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Analytics Consent**: Privacy-compliant analytics with user consent

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd website
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📁 Project Structure

```
website/
├── public/                 # Static assets
│   ├── CNAME              # Custom domain for GitHub Pages
│   ├── robots.txt         # SEO and crawler instructions
│   ├── sitemap.xml        # Site structure for search engines
│   ├── favicon.svg        # Site favicon
│   └── assets/
│       ├── logos/         # Company logos
│       ├── images/        # Image assets
│       └── pdfs/          # Document downloads
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ComplianceStatement.astro
│   │   └── ContactForm.astro
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   └── pages/             # Site pages (file-based routing)
│       ├── index.astro
│       ├── governmentconsulting.astro
│       ├── capabilities.astro
│       ├── compliance.astro
│       ├── contracts-and-codes.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── privacy.astro
│       ├── terms.astro
│       ├── accessibility.astro
│       └── status.astro
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Color Palette (HTS Gov Modern)

- **Primary (Navy)**: `#266AA6` (default brand), `#1E578B`, `#17436F`, `#113156`, `#0B1F3A`
- **Neutrals (Cool Gray)**: `#0F172A`, `#334155`, `#64748B`, `#CBD5E1`, `#F1F5F9`
- **Accent (Teal)**: `#14A3B8`, `#0E7C86`, `#D6F5F8`
- **Status**: Success `#1F7A5B`, Warning `#B45309`, Error `#9F1239`, Info `#155E75`

### Typography

- **Font Family**: Inter (with system UI fallbacks)
- **Headings**: Inter, tracking-tight, font-medium/semibold
- **Body**: Inter/system UI, 16px/26px line-height

### Components

- **Buttons**: Rounded corners (`rounded-lg`), focus rings, hover states
- **Cards**: Subtle shadows (`shadow-card`), hover effects (`shadow-md`)
- **Spacing**: 8pt scale (8, 12, 16, 24, 32, 48px)

## 🔒 Security Features

### Content Security Policy (CSP)

The site includes strict CSP headers to prevent XSS attacks:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" />
```

### Additional Security Headers

- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### Data Handling

- **Public Site**: No sensitive data collection or processing
- **Sensitive Workloads**: Confined to Azure Government (FedRAMP High)
- **Contact Form**: Currently disabled, will route to Azure Government when enabled

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Keyboard Navigation**: Full site navigation without mouse
- **Screen Reader Support**: ARIA labels, skip links, descriptive text
- **Color Contrast**: Minimum 4.5:1 ratio for normal text
- **Focus Management**: Visible focus indicators, logical tab order
- **Form Accessibility**: Proper labels, error messaging, field descriptions

### Accessibility Testing

```bash
# Install axe-core for accessibility testing
npm install -g @axe-core/cli

# Test accessibility
axe http://localhost:4321
```

## 📊 Analytics & Privacy

### Consent Management

The site includes a consent banner that appears on first visit:

- **Default State**: No analytics loaded
- **User Choice**: Accept/Decline analytics tracking
- **Storage**: Consent preference stored in localStorage
- **Matomo Integration**: Ready for implementation (commented out)

### Analytics Implementation

To enable analytics, uncomment the Matomo section in `BaseLayout.astro`:

```javascript
// Replace placeholders with actual values
var u="//YOUR_MATOMO_URL/";
_paq.push(['setSiteId', 'YOUR_SITE_ID']);
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

3. **Custom Domain Setup**
   - The `CNAME` file is already configured for `headentechsolutions.com`
   - Add DNS records:
     - `CNAME www headentechsolutions.github.io`
     - `A @ 185.199.108.153` (GitHub Pages IP)

4. **HTTPS Enforcement**
   - GitHub Pages automatically provides HTTPS
   - Custom domains get free SSL certificates

### Future: Azure Front Door Government

For enhanced security headers and edge optimization:

```bash
# Future implementation
# - Azure Front Door Government
# - HSTS headers
# - Additional security policies
```

## 🔧 Configuration

### Portal URL

To change the Azure Government portal URL, update the `portalUrl` variable in:

- `src/components/Header.astro`
- `src/components/Hero.astro`
- `src/components/Footer.astro`
- `src/pages/governmentconsulting.astro`

### Contact Form Integration

The contact form is currently disabled. To enable:

1. **Azure Function Setup**
   ```bash
   # Create Azure Function for form processing
   # Endpoint: https://your-function-app.azurewebsites.net/api/contact
   ```

2. **Update ContactForm.astro**
   ```javascript
   // Replace disabled submit with actual form handling
   form.addEventListener('submit', async function(e) {
     e.preventDefault();
     // Submit to Azure Function endpoint
   });
   ```

### SEO Configuration

Update meta tags in `BaseLayout.astro`:

```astro
const { 
  title, 
  description = "Your default description",
  canonical 
} = Astro.props;
```

## 🧪 Testing

### Performance Testing

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun
```

### Accessibility Testing

```bash
# axe-core testing
axe http://localhost:4321

# Keyboard navigation testing
# Use Tab, Shift+Tab, Enter, Space, Arrow keys
```

### Browser Testing

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Management

### Updating Content

- **Pages**: Edit files in `src/pages/`
- **Components**: Modify files in `src/components/`
- **Styling**: Update `tailwind.config.cjs` or component classes
- **Assets**: Add files to `public/assets/`

### Adding New Pages

1. Create new `.astro` file in `src/pages/`
2. Import and use `BaseLayout`
3. Add navigation link to `Header.astro`
4. Update `sitemap.xml`

### Compliance Updates

- **Compliance Statement**: Update `ComplianceStatement.astro`
- **Legal Pages**: Modify `privacy.astro`, `terms.astro`, `accessibility.astro`
- **Contract Information**: Update `contracts-and-codes.astro`

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Styling Issues**
   ```bash
   # Ensure Tailwind is processing correctly
   npm run dev
   # Check browser console for CSS errors
   ```

3. **Deployment Issues**
   ```bash
   # Check GitHub Pages settings
   # Verify CNAME file exists
   # Check DNS propagation
   ```

### Performance Optimization

- **Images**: Use WebP/AVIF formats with fallbacks
- **Fonts**: Preload system fonts
- **CSS**: Tailwind purges unused styles automatically
- **JS**: Minimal runtime JavaScript (Astro default)

## 📞 Support

### Development Questions

- **Email**: consulting@headentechsolutions.com
- **Portal**: https://portal.headentechsolutions.com
- **Documentation**: This README and inline code comments

### Federal Contracting Questions

Contact our federal consulting team for:
- Capability statements
- Contracting opportunities
- Compliance questions
- Technical requirements

## 📄 License

This project is proprietary to Headen Tech Solutions. All rights reserved.

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Environment**: Production Ready

