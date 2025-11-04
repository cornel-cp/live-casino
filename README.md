# Casino M8Trix - Official Website

A modern, responsive web application for Casino M8Trix, the premiere 24/7 entertainment destination in San Jose and Silicon Valley. Built with Next.js 16, React 19, and TypeScript, featuring a sleek UI with smooth animations and comprehensive gaming, dining, and event information.

<img width="1920" height="960" alt="Cover" src="https://github.com/user-attachments/assets/d4c52e37-307a-4647-823e-433c1d44b21c" />



## 📋 Project Overview

Casino M8Trix is a comprehensive digital platform that serves as the online presence for Casino M8Trix, a premier 24/7 entertainment destination located in San Jose, California. The platform provides visitors with detailed information about casino games, dining options, events, educational resources, and facilitates communication with the establishment.

### What This Platform Does

The Casino M8Trix website is designed to:
- **Inform visitors** about available casino games, rules, and gaming tables
- **Showcase dining options** including restaurants, bars, and lounges with menus and hours
- **Promote events** and special promotions happening at the casino
- **Educate players** through the Card Academy with tutorials and gaming tips
- **Connect visitors** with the casino through contact forms and location information
- **Provide employment opportunities** for job seekers
- **Display real-time jackpot information** for progressive games

### How It Works

The platform uses a modern web architecture with:
- **Server-Side Rendering (SSR)** for optimal performance and SEO
- **Client-Side Interactivity** for smooth user experiences and animations
- **Responsive Design** that adapts to all device sizes (mobile, tablet, desktop)
- **Smart Asset Loading** that preloads critical resources before displaying content
- **Navigation System** with dropdown menus for easy access to all sections
- **Interactive Components** including modals, carousels, and animated elements

### User Journey & Workflows

**Typical User Scenarios:**

1. **New Visitor Exploring Games:**
   - Lands on homepage → Views jackpot amounts → Clicks "Gaming" → Browses game list → Selects specific game → Reads rules → Accesses Card Academy for tutorials

2. **Planning a Visit:**
   - Visits homepage → Checks dining options → Views restaurant menus → Checks hours → Makes reservation (if available) → Gets directions from Contact page

3. **Looking for Events:**
   - Navigates to Events section → Browses upcoming events → Views event details → Checks schedules → Accesses 3D tour for venue preview

4. **Learning Casino Games:**
   - Goes to Card Academy → Selects game tutorial → Watches instructional videos → Reads strategy guides → Practices with gaming tips

5. **Contacting the Casino:**
   - Uses Contact page → Views location map → Gets directions → Selects department → Fills out contact form → Submits inquiry

6. **Job Seeker:**
   - Visits Employment page → Reviews available positions → Reads job descriptions → Checks requirements → Submits application

**Navigation Flow:**
- All pages accessible via main navigation menu
- Dropdown menus provide quick access to sub-sections
- Breadcrumb navigation (implied through menu structure)
- Footer links for additional resources
- Mobile-responsive hamburger menu for smaller screens

## 📄 Pages & Functionality

### 🏠 Homepage (`/`)
The main landing page that provides an overview of Casino M8Trix with:
- **Hero Video**: Auto-playing background video showcasing the casino atmosphere
- **Progressive Jackpots Section**: Displays real-time jackpot amounts for:
  - Progressive Jackpot 10%
  - Progressive Jackpot 100%
  - Progressive Bad Beat Jackpot
- **Gaming Section**: Quick access to featured casino games with interactive icons
- **Dining Preview**: Visual grid showcasing all four dining venues with hover effects
- **Discover Section**: Promotional area featuring 3D tour capabilities
- **Special Events Carousel**: Rotating display of current promotions and events
- **Event Space Information**: Details about private event hosting capabilities

**What Users Can Do:**
- View current jackpot amounts
- Navigate to specific games or dining options
- Access the 3D virtual tour
- Learn about upcoming events
- Explore all sections via the navigation menu

### 🎲 Gaming Section (`/gaming`)
Comprehensive information about all casino games available at M8Trix.

**Main Gaming Page:**
- Hero section with "Are You In?" call-to-action
- Games table showing all available games with current status
- Game rules and instructions for each game type
- Links to Card Academy for learning resources

**Individual Game Pages:**
- **Three Card Poker** (`/gaming/threeCardGame`)
- **Baccarat** (`/gaming/baccarat`)
- **Pure 21.5 Blackjack** (`/gaming/pure`)
- **AKA Pai Gow Poker** (`/gaming/akaPai`)
- **Ultimate Texas Hold'em** (`/gaming/ultimate`)
- **Pai Gow Tiles** (`/gaming/paigow`)
- **Casino War** (`/gaming/casinowar`)
- **Crazy 4 Poker** (`/gaming/crazyPoker`)
- **Pure Spanish 21.5** (`/gaming/pureSpanish`)
- **21st Century Blackjack Switch** (`/gaming/blackjack`)
- **Let It Ride** (`/gaming/ride`)

**Jackpot Information** (`/gaming/jackpot`):
- Detailed breakdown of progressive jackpots
- Bad beat jackpot information
- Real-time updates display

**What Users Can Do:**
- Browse all available games
- Learn game rules and strategies
- Check current table availability
- View jackpot amounts
- Access educational resources

### 🍽️ Dining Section (`/dining`)
Complete information about restaurants and dining options.

**Main Dining Page:**
- Overview of all dining venues
- Happy hour information with modal popups
- Opening hours and contact information
- Menu access buttons (Happy Hour, Late Nite, Weekly Specials)
- 3D tour links for each venue

**Individual Restaurant Pages:**
- **Zone 8 Sports Bar & Grill** (`/dining/sportsBar`):
  - 40 HD flat screen TVs and two 200" HD screens
  - Diverse menu (American to Asian fare)
  - Opening hours and to-go ordering information
  
- **Epic Bar** (`/dining/EpicBar`):
  - Located in the heart of the casino
  - Crafted cocktails, draft beers, wines
  - Appetizer and dining menu
  - Daily hours: 6:00 AM - 1:00 AM

- **Parallel Lounge** (`/dining/parallel`):
  - Private event hosting (6-25 people)
  - Reservation information
  - Cocktail parties and business dinners
  - Minimum requirements and policies

- **Lotus Cafe** (`/dining/cafe`):
  - Daily dining options
  - Reservation system
  - Contact information

**What Users Can Do:**
- View restaurant menus and hours
- Make reservations (where applicable)
- Order food to-go
- View happy hour deals
- Explore dining venues via 3D tour
- Contact restaurants directly

### 🎉 Events Section (`/events`)
Information about upcoming events, promotions, and special offers.

**Main Events Page:**
- List of upcoming events with images
- Event descriptions and schedules
- Time-specific promotions

**Event Categories:**
- **Freshly Shucked Oysters**: Every Friday and Saturday Night (5pm - 11pm)
- **Drink Specials**: Monday to Wednesday on Gaming Floor and at Epic Bar
- **Gaming Floor Specials**: Monday to Wednesday (5pm - 11pm)
- **Blackjack Bonus Bets**: Mondays & Tuesdays (7pm - 10pm)
- **Liquid Lunch Specials**: Daily (11am to 3pm)
- **Event Tower**: 3D virtual tour experience

**Individual Event Pages:**
- Detailed event information
- Special promotions and deals
- Reservation or participation details

**What Users Can Do:**
- View all upcoming events
- Learn about special promotions
- Access event-specific information
- Navigate to 3D tour experiences
- Find time-specific deals

### 🎓 Card Academy (`/cardacadamy`)
Educational section for learning casino games and strategies.

**Main Academy Page:**
- Introduction to Card Academy
- Animated card displays
- Links to specific game tutorials

**Game-Specific Tutorials:**
- **Baccarat Gold 1.0** (`/cardacadamy/baccaratGold`): Comprehensive Baccarat tutorial
- **Pure 21.5 Blackjack** (`/cardacadamy/pure`): Blackjack strategy guide
- **Three Card Poker** (`/cardacadamy/threecard`): Poker game tutorial
- **Gaming Tips** (`/cardacadamy/gamigTip`): General gaming tips and tricks

**What Users Can Do:**
- Learn game rules and strategies
- Watch tutorial videos
- Access professional gaming tips
- Improve their gameplay skills
- Navigate between different game tutorials

### 📞 Contact Page (`/contact`)
Communication hub for visitors to reach the casino.

**Features:**
- Interactive map showing casino location
- Address: 1887 Matrix Boulevard, San Jose, CA 95110
- Contact information for different departments:
  - Main Casino: 408-244-3333
  - Poker Desk: 408-244-3333 ext. 160
  - Zone 8 Sports: 408-453-4030
  - Events Department: 408-416-4482
- Contact form with fields for:
  - Name
  - Email address
  - Phone number
  - Message
  - Department selection
- "Get Directions" button linking to mapping services

**What Users Can Do:**
- View casino location on map
- Get directions to the casino
- Contact specific departments
- Submit inquiries through contact form
- Find phone numbers for different services

### ℹ️ About Page (`/about`)
Information about Casino M8Trix.

**Content:**
- Hero section with casino branding
- Description of Casino M8Trix as premiere entertainment destination
- Location highlights (San Jose and Silicon Valley)
- Visual showcases of the casino
- 24/7 operation information

**What Users Can Do:**
- Learn about the casino's history and mission
- Understand the casino's offerings
- View visual representations of the venue

### 💼 Employment Page (`/employment`)
Job opportunities and career information.

**Features:**
- "Join Us" section with benefits information
- Job listings with descriptions
- Application process information
- Requirements (21+ for gaming floor positions)
- Multiple application methods (email, fax, walk-ins, job fairs)
- 24/7 operation reminder

**What Users Can Do:**
- Browse available positions
- Learn about employment benefits
- Submit applications
- Understand job requirements
- Access application forms

### 👥 Community Page (`/community`)
Community engagement and social features.

**What Users Can Do:**
- Connect with the Casino M8Trix community
- Access community-specific information
- View community events

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

### Navigation System

**Main Navigation Menu:**
- Responsive dropdown menus for main sections
- Active page highlighting
- Smooth animations for menu transitions
- Mobile-friendly hamburger menu
- Quick access to all major sections

**Navigation Structure:**
- **Gaming**: Dropdown with 11+ game options
- **Dining**: Dropdown with 4 restaurant options
- **Events**: Dropdown with event categories
- **Card Academy**: Dropdown with tutorial options
- **About**: Direct link
- **Contact**: Direct link

### User Interaction Features

**Interactive Elements:**
- **Modals**: Popup windows for detailed information (menus, deals, etc.)
- **Carousels**: Image carousels for events and promotions
- **Hover Effects**: Visual feedback on interactive elements
- **Form Submissions**: Contact forms with validation
- **Video Playback**: Background videos on homepage
- **3D Tour Integration**: Links to virtual tour experiences

**Responsive Behaviors:**
- Mobile: Vertical navigation, stacked layouts
- Tablet: Hybrid layouts with optimized spacing
- Desktop: Full-featured layouts with sidebars and multi-column designs

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized images for different screen densities

### Animation System

Powered by Framer Motion:
- Smooth page transitions
- Interactive hover effects
- Loading animations with progress tracking
- Component animations (card flips, fades, slides)
- Staggered animations for lists and grids
- Parallax effects on hero sections

### Content Management

**Dynamic Content Display:**
- Real-time jackpot updates
- Event scheduling information
- Menu availability and pricing
- Table game status
- Restaurant hours and availability

**Media Integration:**
- Optimized image loading
- Background video support
- SVG icons for scalable graphics
- Custom font rendering
- Video tutorial integration

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
