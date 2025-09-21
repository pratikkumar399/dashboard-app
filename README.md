# Dashboard App

A modern, responsive dashboard application built with React and TypeScript, featuring comprehensive data visualization, analytics, and a clean, professional interface.

## 🚀 Tech Stack

### Core Technologies
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.1.6** - Fast build tool and development server
- **React Router DOM 7.9.1** - Client-side routing

### UI & Styling
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Radix UI** - Headless UI components for accessibility
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-collapsible`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-tooltip`
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional styling utilities

### Data Visualization
- **Recharts 2.15.4** - Composable charting library for React

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **tw-animate-css** - Tailwind CSS animations

## 📁 File System Structure

```
dashboard-app/
├── public/                     # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components (shadcn/ui)
│   │   ├── app-header.tsx    # Main application header
│   │   ├── app-sidebar.tsx   # Left navigation sidebar
│   │   ├── app-right-sidebar.tsx # Right sidebar for activities
│   │   ├── stat-card.tsx     # Statistics display cards
│   │   ├── bar-chart.tsx     # Bar chart component
│   │   ├── chart-line-multiple.tsx # Multi-line chart
│   │   ├── revenue-line-chart.tsx # Revenue visualization
│   │   ├── revenue-by-location.tsx # Location-based revenue
│   │   ├── top-selling-products.tsx # Product performance
│   │   ├── total-sales.tsx   # Sales overview
│   │   └── ...               # Other dashboard components
│   ├── pages/                # Application pages/routes
│   │   ├── DashboardPage.tsx # Main dashboard view
│   │   └── OrdersPage.tsx    # Orders management page
│   ├── contexts/             # React context providers
│   │   └── theme-context.tsx # Theme management
│   ├── hooks/                # Custom React hooks
│   │   └── use-mobile.ts     # Mobile detection hook
│   ├── constants/            # Application constants
│   │   ├── activities.ts     # Activity data
│   │   ├── contacts.ts       # Contact information
│   │   ├── navigation.ts     # Navigation configuration
│   │   ├── notifications.ts  # Notification data
│   │   ├── orders.ts         # Order data
│   │   └── products.ts       # Product information
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Common utilities
│   ├── assets/               # Static assets (images, icons)
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and CSS variables
├── dist/                     # Build output directory
├── components.json           # shadcn/ui configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## 🛠️ Setup & Installation

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design System

### Color Scheme
The application uses a comprehensive color system with CSS custom properties:
- **Light/Dark mode support** with automatic theme switching
- **Semantic color tokens** for consistent theming
- **Chart-specific colors** for data visualization
- **Sidebar-specific colors** for navigation elements

### Component Architecture
- **Atomic Design** principles with reusable components
- **shadcn/ui** components as the foundation
- **Custom components** built on top of Radix UI primitives
- **Responsive design** with mobile-first approach

## 📊 Features

### Dashboard Analytics
- **Statistics Cards** - Key metrics display
- **Revenue Charts** - Line charts for revenue tracking
- **Bar Charts** - Projections and comparisons
- **Pie/Donut Charts** - Data distribution visualization
- **Location-based Analytics** - Geographic revenue breakdown

### Navigation & Layout
- **Collapsible Sidebar** - Main navigation
- **Right Sidebar** - Activities, contacts, and notifications
- **Responsive Header** - Search, notifications, and user menu
- **Theme Toggle** - Light/dark mode switching

### Data Management
- **Mock Data** - Pre-configured sample data
- **TypeScript Interfaces** - Type-safe data structures
- **Constants Management** - Centralized data configuration

## 🤝 Contributing

### Development Guidelines

1. **Code Style**
   - Follow TypeScript best practices
   - Use ESLint for code quality
   - Maintain consistent naming conventions
   - Write self-documenting code

2. **Component Development**
   - Use functional components with hooks
   - Implement proper TypeScript interfaces
   - Follow the existing component structure
   - Use Tailwind CSS for styling

3. **File Organization**
   - Place reusable components in `/components`
   - Keep page-specific components in `/pages`
   - Store constants and data in `/constants`
   - Use custom hooks for shared logic

4. **Styling Guidelines**
   - Use CSS custom properties for theming
   - Follow the established color system
   - Implement responsive design patterns
   - Use semantic class names

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Libraries & Dependencies

### Core Dependencies
- **React & React DOM** - UI framework
- **React Router DOM** - Client-side routing
- **TypeScript** - Type safety and development experience

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants

### Data Visualization
- **Recharts** - Charting library with React components

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting

### Build & Deployment
- **Vite Build** - Production build process
- **TypeScript Compiler** - Type checking and compilation

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting provider

