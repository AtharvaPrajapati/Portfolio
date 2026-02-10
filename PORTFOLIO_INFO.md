# Portfolio Website - Atharva Prajapati

## Overview
A modern, terminal-themed portfolio website inspired by mdgulab.vercel.app with a hacker/developer aesthetic featuring black background and green terminal colors.

## Personal Information
- **Name**: Atharva Prajapati
- **Email**: Prajapatiatharva230@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/atharva-prajapati-697342288/
- **GitHub**: https://github.com/AtharvaPrajapati
- **Location**: India

## Features Implemented

### 1. Header Component
- Fixed navigation bar with smooth scrolling
- Logo with terminal-style brackets
- Navigation links (Home, About, Skills, Projects, Contact)
- "Available for opportunities" status indicator
- Responsive design

### 2. Hero Section
- Profile image with animated ring effect
- Terminal window design with command-line aesthetic
- Animated role rotation (Full Stack Developer, Frontend Specialist, etc.)
- Statistics display (Projects, Experience, GitHub Stars, Coffee Cups)
- Download Resume button (linked to resume.pdf)
- Connect with me button (linked to LinkedIn)

### 3. About Section
- Personal statistics cards
- Information grid (Location, Experience, Coffee Consumed, Currently Learning)
- Feature cards highlighting skills (Clean Code, Team Player, Innovation, Performance)
- Detailed description sections
- Terminal-style section tags

### 4. Skills Section
- Skills statistics overview
- Three categories: Frontend Development, Backend Development, Tools & Technologies
- Animated progress bars for each skill
- Skill descriptions
- Responsive grid layout

### 5. Projects Section
- Project statistics
- Filter buttons (All, Frontend, Full Stack, Mobile)
- Project cards with:
  - Category badges
  - Technology tags
  - GitHub and Live Demo links
  - Hover animations
- All GitHub links point to your profile

### 6. Footer Section
- Contact information with email and LinkedIn
- Quick links navigation
- Services list
- Social media links (GitHub, LinkedIn, Email)
- Download Resume and Connect buttons
- Copyright information
- Online status indicator

## Design Features

### Terminal Aesthetic
- Black background (#000)
- Green text (#22c55e, #10b981)
- Monospace font (Courier New)
- Terminal-style command prompts
- Scanline effects
- Grid overlay
- Glow effects
- Vignette overlay

### Animations
- Smooth scrolling
- Hover effects on all interactive elements
- Rotating profile image ring
- Blinking cursor effects
- Progress bar animations
- Scanline animations
- Glow pulse effects

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Grid layouts that adapt to screen size
- Touch-friendly buttons and links

## File Structure
```
frontend/src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   └── Footer.js & Footer.css
├── asesst/
│   ├── profile.jpg
│   └── resume.pdf
├── App.js
├── App.css
└── index.css
```

## Running the Application
```bash
cd frontend
npm start
```

The app will run on http://localhost:3001 (or another port if 3000 is occupied)

## Customization Tips
1. Update your profile image in `src/asesst/profile.jpg`
2. Update your resume in `src/asesst/resume.pdf`
3. Modify project details in `Projects.js`
4. Adjust skills and percentages in `Skills.js`
5. Update statistics in various components
6. Change color scheme by replacing #22c55e and #10b981 throughout CSS files

## Technologies Used
- React 19.2.4
- React Router DOM 7.13.0
- CSS3 with animations
- Custom terminal-themed design

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Features
- Smooth scroll behavior
- CSS animations with GPU acceleration
- Optimized images
- Lazy loading ready
- Production build optimization available

---
Built with ❤️ by Atharva Prajapati

