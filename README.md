# Timer & Chill

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

A modern, responsive, and professional React timer application with ambient sounds for focus, study, and relaxation.

[Features](#-features) • [Installation](#-installation) • [Documentation](#-documentation) • [Development](#-development)

</div>

---

## ✨ Introduction

**Timer & Chill** is a modern, fully-featured React application designed to help users maintain focus and productivity through customizable timers and ambient soundscapes. Built with React 18, TypeScript, and Vite, this project demonstrates professional front-end development practices including:

- ⚡ **Fast Development** - Vite for lightning-fast HMR
- 🏗️ **Scalable Architecture** - Modular components, custom hooks, and context providers
- 🎨 **Modern Styling** - CSS Modules with CSS Custom Properties
- ♿ **Accessibility First** - ARIA labels, keyboard navigation, and semantic HTML
- 📱 **Fully Responsive** - Mobile-first design with breakpoints
- 🔒 **Type Safety** - Full TypeScript support
- 🧪 **Production Ready** - Error boundaries, error handling, and optimizations

## 🚀 Technologies Used

### Core Technologies
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **CSS Modules** - Scoped styling

### Key Libraries
- **react-icons** - Icon library (Bootstrap Icons) for UI elements
- **Typed.js** - Animated typing effect for activity display
- **Web Audio API** - For ambient sound playback
- **Notifications API** - Browser notifications for timer completion

### Development Tools
- **ESLint** - Code linting and quality
- **TypeScript Compiler** - Type checking

## ⚙️ Installation

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** or **pnpm**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/timer-and-chill-prototype.git
   cd timer-and-chill-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload on file changes

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The production build will be in the `dist` folder. You can preview it with:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 🧩 Project Structure

```
timer-and-chill-prototype/
│
├── public/                  # Static assets served directly
│   ├── audio/              # Ambient sound files (served at /audio/)
│   ├── images/             # Static images (e.g., notification icons)
│   └── favicon.png         # Site favicon
│
├── src/                     # Source code
│   ├── assets/             # Assets processed by bundler
│   │   └── images/        # Component images (icons, UI elements)
│   │
│   ├── components/         # React components (with CSS Modules)
│   │   ├── AnimatedText.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── Layout.tsx
│   │   ├── SoundControls.tsx
│   │   ├── SoundPlayer.tsx
│   │   ├── Statistics.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Timer.tsx
│   │
│   ├── contexts/           # React context providers
│   │   ├── LanguageContext.tsx
│   │   ├── SoundContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── constants/          # Constants and configuration
│   │   ├── index.ts
│   │   └── translations.ts
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useAudio.ts
│   │   └── useTimer.ts
│   │
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   │
│   ├── utils/              # Utility functions
│   │   └── index.ts
│   │
│   ├── App.tsx             # Root component
│   ├── App.module.css      # Root component styles
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles and CSS variables
│   └── vite-env.d.ts      # Vite type declarations
│
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript config for Node.js tools
├── vercel.json             # Vercel deployment configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

**Note:** This project follows React best practices with a clean, modular structure. All legacy folders (JS/, CSS/, IMG/, AUDIO/) have been removed in favor of the modern React/Vite architecture.

## 📋 Features

### ⏱️ Timer Functionality
- ✅ Customizable countdown timer (hours, minutes, seconds)
- ✅ Intuitive edit mode with +/- controls
- ✅ Play/pause functionality
- ✅ Reset button with proper state management
- ✅ Browser notifications on timer completion
- ✅ Real-time countdown with accurate timing
- ✅ **Timer Presets**: Quick access buttons for 5, 10, 15, 25, 30, 45, 60, and 90 minutes
- ✅ **Visual Progress Ring**: Circular progress indicator showing timer completion
- ✅ **State Persistence**: Timer state saved to localStorage (survives page refresh)
- ✅ **Keyboard Shortcuts**: Space/Enter (play/pause), R (reset), E (edit), Ctrl+P (Pomodoro)

### 🍅 Pomodoro Technique
- ✅ **Full Pomodoro Mode**: 25-minute work sessions with automatic breaks
- ✅ **Smart Break System**: 5-minute short breaks, 15-minute long breaks after 4 sessions
- ✅ **Session Tracking**: Automatic session counting and progress tracking
- ✅ **Auto-transition**: Seamless transitions between work and break periods
- ✅ **Notifications**: Custom notifications for work/break transitions
- ✅ **Visual Indicators**: Clear display of current session type and number
- ✅ **State Persistence**: Pomodoro state saved across page refreshes

### 🎵 Ambient Sounds
- ✅ **6 Different Soundscapes**: Rain, Forest, Cafe, Garden, Farm, Restaurant
- ✅ Individual volume controls for each sound
- ✅ Play/pause controls for each sound independently
- ✅ Multiple sounds can play simultaneously
- ✅ Optimized audio playback with error handling
- ✅ Smooth volume transitions
- ✅ **Sound Presets**: Pre-configured sound mixes (Focus, Coffee Shop, Nature, Restaurant)
- ✅ **Volume Persistence**: Individual sound volumes saved to localStorage
- ✅ **Sound Context API**: Centralized sound management with preset support

### 📊 Statistics & Tracking
- ✅ **Session Statistics**: Track completed timer sessions
- ✅ **Total Time**: Cumulative time spent using the timer
- ✅ **Average Duration**: Calculate average session length
- ✅ **Last Session Date**: Track when you last completed a session
- ✅ **Persistent Storage**: Statistics saved to localStorage
- ✅ **Collapsible Panel**: Clean, accessible statistics interface

### 🌙 Theme System
- ✅ Day/Night mode toggle
- ✅ Smooth color transitions
- ✅ CSS Custom Properties for dynamic theming
- ✅ Persistent theme preference in localStorage
- ✅ Context-based theme management

### 🌍 Internationalization (i18n)
- ✅ **Full Bilingual Support**: English and Spanish
- ✅ **System Language Detection**: Automatically detects browser language
- ✅ **Language Toggle**: Easy switch between languages via UI button
- ✅ **Complete Translations**: All UI text, notifications, and labels translated
- ✅ **Language Persistence**: Selected language saved to localStorage
- ✅ **Dynamic Language Switching**: Instant UI updates without page reload
- ✅ **Accessible Language Selector**: ARIA labels and keyboard support

### ♿ Accessibility Features
- ✅ ARIA labels and roles for screen readers
- ✅ Keyboard navigation support
- ✅ Focus states for all interactive elements
- ✅ Semantic HTML structure
- ✅ Alt text for all images
- ✅ Reduced motion support
- ✅ Keyboard shortcuts for all major functions

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Adaptive layouts for different screen sizes
- ✅ Touch-friendly controls
- ✅ Optimized for desktop, tablet, and mobile devices
- ✅ Breakpoints: 815px, 500px

## 🎯 Usage

### Setting a Timer

#### Quick Preset Method
1. Click any **preset button** (5 min, 10 min, 15 min, etc.) to instantly set the timer
2. Click the **play button** to start

#### Manual Method
1. Click the **edit button** (pencil icon) to enter edit mode
2. Use the **+/- buttons** to adjust hours, minutes, and seconds
3. Click the **save button** (checkmark icon) to confirm
4. Click the **play button** to start the countdown
5. Click **pause** to stop the timer
6. Use the **reset button** (0:00) to clear the timer

#### Keyboard Shortcuts
- **Space** or **Enter**: Play/Pause timer
- **R**: Reset timer
- **E**: Toggle edit mode
- **Ctrl+P** (or **Cmd+P** on Mac): Toggle Pomodoro mode

### Using Pomodoro Technique
1. Click the **🍅 Pomodoro** button to start Pomodoro mode
2. The timer will automatically set to 25 minutes for work
3. When the work session completes, a break timer will automatically start
4. After 4 work sessions, you'll get a 15-minute long break (otherwise 5 minutes)
5. The timer automatically transitions between work and break periods
6. Click **Stop** to exit Pomodoro mode at any time
7. Your session count and state are preserved across page refreshes

### Using Ambient Sounds

#### Individual Sounds
1. Click the **play button** next to any sound to start playback
2. Adjust the **volume slider** to control the sound level
3. Click **stop** to pause the sound
4. Multiple sounds can be played simultaneously
5. Volume settings are automatically saved

#### Sound Presets
1. Click any **preset button** (Focus, Coffee Shop, Nature, Restaurant)
2. The preset will automatically start the configured sounds at optimal volumes
3. You can still adjust individual volumes after applying a preset
4. Presets respect your saved volume preferences when available

### Viewing Statistics
1. Click the **📊 Statistics** button to open the statistics panel
2. View your:
   - Total completed sessions
   - Total time tracked
   - Average session duration
   - Last session date
3. Statistics are automatically updated when you complete a timer

### Switching Themes
- Click the **sun/moon button** in the header to toggle between day and night modes
- The interface will smoothly transition between themes

### Changing Language
- Click the **globe button** (🌐) in the header to switch between English and Spanish
- The app automatically detects your browser's language on first visit
- Your language preference is saved and will be remembered

## 🚀 Deployment

### Recommended Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- **Pros**: Zero configuration, automatic HTTPS, global CDN, Git integration
- **Best for**: Quick deployment, personal projects
- **Note**: This project includes `vercel.json` for optimal configuration

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```
- **Pros**: Drag-and-drop deployment, form handling, serverless functions
- **Best for**: Static sites with forms or serverless needs

#### GitHub Pages
1. Build the project: `npm run build`
2. Push code to GitHub repository
3. Go to Settings → Pages
4. Select branch and folder (`dist`)
5. Site will be available at `username.github.io/repository-name`

#### Render
- Connect GitHub repository
- Select "Static Site"
- Build command: `npm run build`
- Publish directory: `dist`

#### AWS S3 + CloudFront
- Build the project: `npm run build`
- Upload `dist` folder to S3 bucket
- Configure static website hosting
- Set up CloudFront distribution for CDN
- **Best for**: Enterprise deployments, custom domains

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality Standards
- ✅ **TypeScript** with strict mode
- ✅ **ESLint** for code linting
- ✅ **Modular architecture** with separated concerns
- ✅ **Custom hooks** for reusable logic
- ✅ **Context providers** for state management
- ✅ **Error boundaries** for error handling
- ✅ **CSS Modules** for scoped styling
- ✅ **Performance optimization** (efficient hooks, memoization)

### Architecture Decisions

#### Component Structure
- **Layout Components** - Structure and layout
- **Feature Components** - Timer, Sound controls
- **UI Components** - Theme toggle, Animated text
- **Utility Components** - Error boundary

#### State Management
- **React Hooks** - `useState`, `useEffect`, `useCallback`, `useRef`, `useMemo`
- **Context API** - Theme management, Sound management, Language management
- **Custom Hooks** - Timer logic, Audio logic
- **localStorage** - Persistent state for timer, Pomodoro, statistics, sound preferences, theme, and language

#### Styling Approach
- **CSS Modules** - Scoped component styles
- **CSS Custom Properties** - Dynamic theming
- **Mobile-First** - Responsive design

## 📊 Performance

- ⚡ **Fast Build** - Vite for instant HMR
- 🎯 **Optimized Bundle** - Code splitting and tree shaking
- 🚀 **Efficient Rendering** - React hooks optimization
- 📦 **Asset Optimization** - Public assets for audio files
- 🎨 **CSS Optimization** - Scoped styles, minimal re-renders

## 🔧 Configuration

### Environment Variables
This project does not require environment variables as it runs entirely client-side.

### TypeScript Configuration
TypeScript is configured with strict mode enabled. See `tsconfig.json` for details.

### Vite Configuration
Vite is configured with:
- React plugin for JSX/TSX support
- Path aliases (`@` for `src` directory)
- Development server on port 3000 with auto-open
- Production build with source maps
- Code splitting (vendor chunk for React)

See `vite.config.ts` for details.

## 🤝 Contributing

This is a personal project. For collaboration inquiries, please contact the repository owner.

## 📜 License

**Proprietary License**

Copyright (c) 2024 Steven Morales Fallas

All rights reserved. Redistribution, modification, reproduction, sublicensing, or any form of transaction (including commercial, educational, or promotional use) involving this repository, its source code, or derived works is strictly prohibited without the explicit and personal written authorization of the Lead Developer, Steven Morales Fallas.

Unauthorized commercial use, resale, or licensing of this repository or its contents is strictly forbidden and will be subject to applicable legal action.

See [LICENSE](LICENSE) file for full details.

## 👨‍💻 Author

**Steven Morales Fallas**
- Full Stack Developer
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- Email: [Your Email]

## 🔮 Future Enhancements

- [x] Save timer presets to localStorage
- [x] Sound mixing presets
- [x] Timer history and statistics
- [x] Pomodoro technique integration
- [x] Internationalization (i18n) - English and Spanish
- [ ] Multiple timer sessions
- [ ] PWA support for offline use
- [ ] Custom sound uploads
- [ ] Export timer data
- [ ] Dark mode based on system preferences
- [ ] Additional language support (French, German, etc.)
- [ ] Unit and integration tests
- [ ] E2E testing with Playwright/Cypress
- [ ] Timer history with detailed logs
- [ ] Custom Pomodoro durations
- [ ] Sound fade in/out effects
- [ ] Timer sounds/alarms customization

## 📝 Changelog

### Version 2.0.0 (Current)
- 🎉 Complete React rewrite
- ✨ TypeScript integration
- 🏗️ Modern component architecture
- 🎨 CSS Modules implementation
- 🪝 Custom hooks for timer and audio
- 🎭 Context API for theme and sound management
- ♿ Enhanced accessibility features
- 📱 Improved responsive design
- 🚀 Performance optimizations
- 🛡️ Error boundaries and error handling
- 🧹 Project structure cleanup (removed legacy folders)
- 📁 Reorganized assets following React best practices
- 🍅 **Pomodoro Technique**: Full Pomodoro mode with work/break cycles
- 📊 **Statistics Tracking**: Session statistics with localStorage persistence
- 🎵 **Sound Presets**: Pre-configured sound mixes for different activities
- ⏱️ **Timer Presets**: Quick access buttons for common durations
- ⌨️ **Keyboard Shortcuts**: Full keyboard navigation support
- 💾 **State Persistence**: All settings and state saved to localStorage
- 📈 **Progress Visualization**: Circular progress ring for timer completion
- 🎯 **Smart Notifications**: Context-aware browser notifications
- 🌍 **Internationalization**: Full English/Spanish support with system language detection
- 🎨 **Modern Icons**: react-icons library for consistent, accessible iconography

### Version 1.0.0
- Initial vanilla JavaScript release
- Timer functionality
- Ambient sounds player
- Day/Night theme switching
- Basic accessibility improvements

---

<div align="center">

**Made with ❤️ by Steven Morales Fallas**

⭐ Star this repo if you find it helpful!

</div>
