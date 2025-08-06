# Kevin Montell - Credit Repair Landing Page

A professional, responsive landing page for Kevin Montell's credit repair services. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components. Perfect for showcasing credit repair services and driving Instagram followers to @kevinjmontell.

## ✨ Features

- **Professional Design**: Clean, trustworthy layout perfect for financial services
- **Credit-Focused Content**: Specifically designed for credit repair services
- **Instagram Integration**: Multiple call-to-action buttons linking to @kevinjmontell
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Ready**: Built-in dark mode support with Tailwind CSS
- **Component-Based**: Built with shadcn/ui components for consistency
- **Performance Optimized**: Fast loading with Next.js 15
- **SEO Friendly**: Optimized for credit repair keywords and local SEO
- **Accessible**: WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion (ready to use)
- **Fonts**: Geist Sans (Google Fonts)

## 📦 Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd kevin-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Branding
- **Logo**: The "KM" logo represents Kevin Montell - customize colors as needed
- **Colors**: Green theme represents trust and financial growth
- **Typography**: Professional fonts suitable for financial services

### Content
- **Hero Section**: "BUILD, REBUILD & REPAIR CREDIT" headline
- **Services**: Three main services (Credit Report Analysis, Dispute Resolution, Credit Counseling)
- **About Section**: Kevin Montell's credentials as Asesor Financiero
- **Contact**: Contact form and Instagram integration

### Instagram Integration
The landing page includes multiple Instagram CTAs:
- Navigation button: "Follow @kevinjmontell"
- Hero section button: "Follow on Instagram"
- About section button: "Follow @kevinjmontell"
- Contact section: Instagram handle display
- Footer: Instagram link

## 🛠️ Development

### Project Structure
```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   └── ui/                  # shadcn/ui components
└── lib/
    └── utils.ts             # Utility functions
```

### Adding New Components
1. Use shadcn/ui CLI to add new components:
   ```bash
   npx shadcn@latest add <component-name>
   ```

2. Import and use in your pages:
   ```tsx
   import { Button } from "@/components/ui/button";
   ```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is automatically supported through Tailwind CSS. The design includes:
- Dark variants for all components
- Proper contrast ratios for financial content
- Smooth transitions between modes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 SEO Optimization

The landing page is optimized for credit repair keywords:
- **Primary Keywords**: credit repair, credit score, credit counseling
- **Secondary Keywords**: financial advisor, credit report analysis, dispute resolution
- **Local SEO**: Kevin Montell, Asesor Financiero
- **Social Media**: @kevinjmontell Instagram integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you need help or have questions:
- Create an issue in the repository
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [shadcn/ui documentation](https://ui.shadcn.com)

---

Built with ❤️ for Kevin Montell's Credit Repair Services
