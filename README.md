# Aurelium - Intelligent Agents Frontend

A modern, responsive frontend application for Aurelium - an intelligent agent platform that helps users automate workflows, analyze data, create documents, and perform research.

## 🎯 Features

- **Landing Page** - Beautiful, animated landing page showcasing four intelligent agents
- **Authentication** - Complete sign-up and sign-in flows with form validation
- **Application Shell** - Responsive workspace with sidebar, chat panel, and preview pane
- **Design System** - Consistent components following the specification
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Accessibility** - WCAG AA compliant with keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Primary, secondary, ghost button variants
│   ├── Input.tsx       # Form input with validation states
│   ├── Card.tsx        # Card component with variants
│   ├── Modal.tsx       # Modal dialog component
│   ├── AgentCard.tsx   # Agent showcase card
│   ├── ChatMessage.tsx # Chat message bubble
│   ├── Navbar.tsx      # Landing page navigation
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── LandingPage.tsx # Main landing page
│   ├── SignUpPage.tsx  # Sign-up page with validation
│   ├── SignInPage.tsx  # Sign-in page
│   └── AppShell.tsx    # Main application workspace
├── App.tsx             # Main app with routing
├── main.tsx            # App entry point
└── index.css           # Global styles and animations
```

## 🎨 Design System

### Colors

- **Midnight** (#0C1120) - Primary background
- **Gold** (#ECCE6E) - Accent color
- **Pacific** (#1A2334) - Secondary background
- **Moonlight** (#F8F9FB) - Primary text
- **Silver** (#C7CCD8) - Secondary text
- **Soft Sky** (#A8B1C4) - Muted text

### Typography

- **Primary Font**: Inter (400, 600, 700)
- **Monospace**: JetBrains Mono (400)

### Spacing

8px base grid system: 8, 16, 24, 32, 48, 64, 96, 128

## 🧩 Components

### Button

```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Get Started
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean
- `fullWidth`: boolean

### Input

```tsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={setEmail}
  error={error}
  required
/>
```

**Props:**
- `label`: string
- `type`: 'text' | 'email' | 'password' | 'number'
- `value`: string
- `onChange`: (value: string) => void
- `error`: string
- `disabled`: boolean
- `required`: boolean

### Card

```tsx
<Card variant="feature" hoverable>
  {children}
</Card>
```

**Props:**
- `variant`: 'default' | 'feature' | 'status'
- `hoverable`: boolean
- `onClick`: () => void

## 📱 Navigation

The application uses hash-based routing for simplicity:

- `#` or `#landing` - Landing page
- `#signup` - Sign-up page
- `#signin` - Sign-in page
- `#app` - Application workspace

## 🎭 Pages

### Landing Page

Features:
- Hero section with animated entrance
- Four agent cards (Atlas, Data Analyst, Scribe, Researcher)
- Why This Exists section
- Use cases showcase
- Features grid
- Final CTA section
- Footer with links

### Sign-Up Page

Features:
- Split-screen layout (brand + form)
- Google OAuth button
- Email/password form with validation
- Password strength indicator
- Real-time error messages
- Mobile responsive

### Sign-In Page

Features:
- Split-screen layout
- Google OAuth
- Email/password form
- Forgot password link
- Error handling

### Application Shell

Features:
- Collapsible sidebar with agent navigation
- Top bar with workspace context
- Chat panel with message history
- Preview pane for outputs
- Mobile-optimized with FAB chat button
- Responsive panel layout

## 🎨 Animations

All animations follow the specification:
- Page transitions: 300ms ease-out
- Hover effects: 200ms ease
- Scroll-triggered animations with stagger
- Smooth micro-interactions

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators (2px gold outline)
- Screen reader friendly
- Color contrast meets WCAG AA standards
- Reduced motion support

## 📱 Responsive Breakpoints

- **Mobile**: 0-767px
- **Tablet**: 768-1023px
- **Desktop**: 1024-1439px
- **Wide**: 1440px+

## 🛠️ Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Recharts** - Data visualization (ready for Data Analyst features)

## 📝 Development Guidelines

### Code Style

- Use TypeScript with strict mode
- Follow functional component patterns
- Use proper semantic HTML
- Keep components small and focused
- Avoid inline styles (use Tailwind)

### Naming Conventions

- Components: PascalCase (e.g., `Button.tsx`)
- Files: PascalCase for components, camelCase for utilities
- CSS classes: Follow Tailwind conventions
- Props: camelCase

### Best Practices

- Always provide proper TypeScript types
- Use proper accessibility attributes
- Test on multiple screen sizes
- Ensure keyboard navigation works
- Check color contrast
- Add loading and error states

## 🚀 Deployment

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

### Deploy

The `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔧 Environment Variables

Currently no environment variables are required. For production, you may want to add:

- `VITE_API_URL` - Backend API URL
- `VITE_GOOGLE_CLIENT_ID` - Google OAuth client ID

## 📄 License

This project is proprietary software.

## 👥 Contributing

This is a private project. For issues or questions, contact the development team.

---

Built with ❤️ following the detailed Aurelium Frontend Architecture Specification
