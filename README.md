# Timer & Chill

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

A beautiful, accessible timer application with ambient sounds for focus, study, and relaxation.

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Documentation](#-documentation)

</div>

---

## ✨ Introduction

**Timer & Chill** is a modern, fully-featured web application designed to help users maintain focus and productivity through customizable timers and ambient soundscapes. Built with vanilla JavaScript, this project demonstrates clean code architecture, accessibility best practices, and modern web development techniques.

The application provides an intuitive interface for setting custom timers while offering six different ambient sound options to create the perfect working environment. With day/night mode switching, responsive design, and comprehensive accessibility features, Timer & Chill showcases professional front-end development skills.

## 🚀 Technologies Used

### Core Technologies
- **HTML5** - Semantic markup with ARIA attributes for accessibility
- **CSS3** - Modern styling with CSS Grid, Custom Properties, and animations
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript implementation

### Key Features & APIs
- **Web Audio API** - For ambient sound playback and volume control
- **Notifications API** - Browser notifications for timer completion
- **CSS Custom Properties** - Dynamic theme switching (day/night mode)
- **CSS Grid** - Responsive layout system
- **Typed.js** - Animated typing effect for activity display

### Development Standards
- **Accessibility (WCAG)** - ARIA labels, keyboard navigation, focus states
- **Responsive Design** - Mobile-first approach with media queries
- **Performance Optimization** - Efficient event handling and DOM manipulation
- **Code Quality** - JSDoc comments, modular architecture, error handling

## ⚙️ Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/timer-and-chill-prototype.git
   cd timer-and-chill-prototype
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` in your browser

### Browser Compatibility
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Any modern browser with ES6+ support

## 🧩 Project Structure

```
timer-and-chill-prototype/
│
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── LICENSE                 # Proprietary license
├── .gitignore             # Git ignore rules
│
├── AUDIO/                  # Ambient sound files
│   ├── sonidoLluvia.mp3
│   ├── sonidoBosqueNocturno.mp3
│   ├── sonidoCafeteria.mp3
│   ├── sonidoJardin.mp3
│   ├── sonidoGranja.mp3
│   └── sonidoRestaurante.mp3
│
├── CSS/                    # Stylesheets
│   ├── estructura.css     # Layout and grid structure
│   ├── estilo.css          # Colors, themes, and styling
│   └── animaciones.css     # Button animations and transitions
│
├── IMG/                    # Image assets
│   ├── reloj.png           # Favicon and icons
│   ├── sol.png             # Day mode icon
│   ├── luna.png            # Night mode icon
│   ├── play.png            # Play button icon
│   ├── detener.png         # Stop button icon
│   ├── boligrafo.png       # Edit button icon
│   ├── guardar.png         # Save button icon
│   └── hojas.png           # Decorative element
│
└── JS/                     # JavaScript modules
    ├── botonesReloj.js     # Timer functionality and controls
    ├── modoNoche.js        # Theme switching (day/night mode)
    ├── reproductorSonidos.js # Sound player and volume control
    ├── textoCambiante.js   # Animated text initialization
    └── LIB/
        └── typed.js        # Third-party typing animation library
```

## 📋 Features

### ⏱️ Timer Functionality
- Customizable countdown timer (hours, minutes, seconds)
- Intuitive edit mode with +/- controls
- Play/pause functionality
- Reset button with proper state management
- Browser notifications on timer completion

### 🎵 Ambient Sounds
- **6 Different Soundscapes**: Rain, Forest, Cafe, Garden, Farm, Restaurant
- Individual volume controls for each sound
- Play/pause controls for each sound independently
- Optimized audio playback with error handling

### 🌙 Theme System
- Day/Night mode toggle
- Smooth color transitions
- CSS Custom Properties for dynamic theming
- Persistent visual feedback

### ♿ Accessibility Features
- ARIA labels and roles for screen readers
- Keyboard navigation support
- Focus states for all interactive elements
- Semantic HTML structure
- Alt text for all images

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly controls
- Optimized for desktop and mobile devices

## 🎯 Usage

### Setting a Timer
1. Click the **edit button** (pencil icon) to enter edit mode
2. Use the **+/- buttons** to adjust hours, minutes, and seconds
3. Click the **save button** (checkmark icon) to confirm
4. Click the **play button** to start the countdown
5. Click **pause** to stop the timer
6. Use the **reset button** to clear the timer

### Using Ambient Sounds
1. Click the **play button** next to any sound to start playback
2. Adjust the **volume slider** to control the sound level
3. Click **stop** to pause the sound
4. Multiple sounds can be played simultaneously

### Switching Themes
- Click the **sun/moon button** in the header to toggle between day and night modes
- The interface will smoothly transition between themes

## 🚀 Deployment

### Recommended Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- **Pros**: Zero configuration, automatic HTTPS, global CDN
- **Best for**: Quick deployment, personal projects

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```
- **Pros**: Drag-and-drop deployment, form handling, serverless functions
- **Best for**: Static sites with forms or serverless needs

#### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Site will be available at `username.github.io/repository-name`

#### Render
- Connect GitHub repository
- Select "Static Site"
- Build command: `echo "No build needed"`
- Publish directory: `/`

#### AWS S3 + CloudFront
- Upload files to S3 bucket
- Configure static website hosting
- Set up CloudFront distribution for CDN
- **Best for**: Enterprise deployments, custom domains

### Environment Variables
This project does not require environment variables as it runs entirely client-side.

## 🛠️ Development

### Code Quality Standards
- **ES6+ JavaScript** with strict mode
- **Modular architecture** with separated concerns
- **JSDoc comments** for function documentation
- **Error handling** for all async operations
- **Performance optimization** (efficient event listeners, no unnecessary intervals)

### Recent Improvements
- ✅ Refactored repetitive code into reusable functions
- ✅ Optimized volume slider (removed setInterval, using input events)
- ✅ Fixed timer reset bug
- ✅ Added notification permission handling
- ✅ Improved accessibility with ARIA labels
- ✅ Cleaned up CSS (removed duplicates and empty rules)
- ✅ Consistent image paths and error handling

## 📊 Performance

- **No build step required** - Pure vanilla JavaScript
- **Optimized event handling** - Efficient DOM manipulation
- **Lazy audio loading** - Audio files loaded on demand
- **CSS transitions** - Hardware-accelerated animations
- **Responsive images** - Optimized asset loading

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

- [ ] Save timer presets to localStorage
- [ ] Multiple timer sessions
- [ ] Sound mixing (play multiple sounds simultaneously)
- [ ] Timer history and statistics
- [ ] PWA support for offline use
- [ ] Custom sound uploads
- [ ] Pomodoro technique integration
- [ ] Export timer data
- [ ] Dark mode based on system preferences

## 📝 Changelog

### Version 1.0.0 (Current)
- Initial release
- Timer functionality
- Ambient sounds player
- Day/Night theme switching
- Accessibility improvements
- Performance optimizations

---

<div align="center">

**Made with ❤️ by Steven Morales Fallas**

⭐ Star this repo if you find it helpful!

</div>
