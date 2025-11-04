# Casino M8Trix - Official Website

A modern, responsive web application for Casino M8Trix, the premiere 24/7 entertainment destination in San Jose and Silicon Valley. Built with Next.js 16, React 19, and TypeScript, featuring a sleek UI with smooth animations and comprehensive gaming, dining, and event information.

## 🎰 Features

### Core Functionality
- **Gaming Information**: Comprehensive details about casino games including:
  - Three Card Poker
  - Baccarat
  - Pure 21.5 Blackjack
  - AKA Pai Gow Poker
  - Ultimate Texas Hold'em
  - Pai Gow Tiles
  - Casino War
  - And more...

- **Dining & Entertainment**: Information about restaurants and bars:
  - Zone 8 Sports Bar
  - Epic Bar
  - Parallel Lounge
  - Lotus Cafe

- **Events & Promotions**: Dedicated pages for special events and gaming promotions

- **Card Academy**: Educational content and tutorials for various casino games

- **Additional Sections**:
  - About Us
  - Contact Information
  - Community
  - Employment Opportunities

### Technical Features
- ⚡ **Asset Loading System**: Smart loading spinner that tracks fonts and critical images
- 🎨 **Modern UI/UX**: Beautiful animations powered by Framer Motion
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🚀 **Performance Optimized**: Next.js App Router with optimized font loading
- 🎭 **Custom Fonts**: Big Noodle Titling and Nunito font families
- 🎬 **Video Integration**: Background video support on homepage
- 🖼️ **Image Optimization**: Next.js Image component for optimized assets

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 16.0.0](https://nextjs.org/) (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### Key Libraries
- **Animations**: [Framer Motion](https://www.framer.com/motion/) ^12.23.24
- **Icons**: 
  - [Font Awesome](https://fontawesome.com/) (React integration)
  - [Lucide React](https://lucide.dev/)
  - [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: 
  - Google Fonts (Geist, Geist Mono)
  - Custom fonts (Big Noodle Titling, Nunito)

### Development Tools
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm
- **Build Tool**: Webpack (via Next.js)

## 📁 Project Structure

```
CasinoGame/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page
│   ├── cardacadamy/              # Card Academy section
│   │   ├── baccaratGold/
│   │   ├── gamigTip/
│   │   ├── pure/
│   │   └── threecard/
│   ├── community/                # Community page
│   ├── components/               # React components
│   │   ├── acadamy/             # Academy components
│   │   ├── Animations/          # Animation utilities
│   │   ├── BtnElement/          # Button components
│   │   ├── gaming/              # Gaming-related components
│   │   ├── home/                # Homepage components
│   │   ├── icons/               # Icon components
│   │   ├── layout/              # Layout components (header, footer, navbar)
│   │   ├── Modal/               # Modal components
│   │   └── restaurant/          # Restaurant components
│   ├── contact/                 # Contact page
│   ├── dining/                  # Dining section
│   │   ├── cafe/
│   │   ├── EpicBar/
│   │   ├── parallel/
│   │   └── sportsBar/
│   ├── employment/              # Employment page
│   ├── events/                  # Events section
│   ├── gaming/                  # Gaming section
│   │   ├── jackpot/
│   │   └── threeCardGame/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Loading wrapper component
│   ├── page.tsx                 # Homepage
│   └── fontawesome.ts           # FontAwesome configuration
├── public/                       # Static assets
│   └── assets/
│       ├── fonts/               # Custom font files
│       ├── images/              # Image assets
│       └── video/               # Video assets
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CasinoGame
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Development Scripts

```bash
# Start development server with webpack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🎨 Customization

### Adding Critical Images to Preload

Edit `app/loading.tsx` and update the `criticalImages` array:

```typescript
const criticalImages = [
  "/assets/images/about.jpg",
  "/assets/images/cardacadamy.jpg",
  // Add your critical images here
];
```

### Custom Fonts

Custom fonts are defined in `app/globals.css`:

```css
@font-face {
  font-family: 'noodle';
  src: url('/assets/fonts/big_noodle_titling.ttf') format('truetype');
}

@font-face {
  font-family: 'Nunito';
  src: url('/assets/fonts/static/Nunito-ExtraLight.ttf') format('truetype');
}
```

### Styling

The project uses Tailwind CSS 4. Custom styles can be added to:
- `app/globals.css` for global styles
- Component-level using Tailwind classes
- Custom CSS classes in `globals.css`

## 📦 Asset Management

### Images
- All images are stored in `public/assets/images/`
- Use Next.js `Image` component for optimized loading:
  ```tsx
  import Image from "next/image"
  
  <Image src="/assets/images/example.jpg" alt="Description" width={400} height={300} />
  ```

### Fonts
- Custom fonts: `public/assets/fonts/`
- Google Fonts: Configured in `app/layout.tsx`

### Videos
- Video files: `public/assets/video/`
- Currently used for homepage background video

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
CUSTOM_API_URL=your_api_url_here
```

### Next.js Configuration

Configuration is in `next.config.ts`. React Strict Mode is enabled by default.

### TypeScript Configuration

TypeScript settings are in `tsconfig.json`. Path aliases are configured for easier imports:

```typescript
import Component from "@/components/Component"
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Configure your hosting provider with:
   - Node.js runtime
   - Build command: `npm run build`
   - Start command: `npm start`

## 🎯 Features in Detail

### Loading System

The application includes a sophisticated loading system that:
- Tracks font loading (Google Fonts and custom fonts)
- Preloads critical images
- Shows animated progress bar
- Provides smooth fade transitions

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### Animation System

Powered by Framer Motion:
- Smooth page transitions
- Interactive hover effects
- Loading animations
- Component animations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

See the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please contact:
- **Website**: [Casino M8Trix](https://www.casinom8trix.com)
- **Location**: San Jose, Silicon Valley

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Font Awesome](https://fontawesome.com/)

---

**Note**: This is a private project. Please ensure you have proper authorization before making changes or deploying.
