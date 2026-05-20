# Trends Management — Premium Event Architects

Trends Management is Nagpur's premier event planning and management company, specializing in luxury weddings, grand destination celebrations, and elite corporate affairs. This repository contains the complete frontend codebase built on a modern luxury light design system.

---

## 🎨 Design System & Aesthetic

The application is styled with a premium, editorial luxury light theme:
- **Primary Canvas**: Warm ivory and off-white (`#fbfbfa`, `#f5f5f3`)
- **Accent Elements**: Antique matte gold (`#b89047`) and warm charcoal grey (`#1a1917`)
- **Typography**: Editorial Serif (`Cinzel` / `Playfair Display`) paired with clean Modern Sans (`Inter` / `Poppins`)
- **Interactions**: Smooth micro-animations powered by `framer-motion` and custom cursors.

---

## 🚀 Technology Stack

- **Core Framework**: React 19 (ES6+ Javascript)
- **Bundler & Tooling**: Vite 8 (Hot Module Replacement)
- **Styling Layouts**: Tailwind CSS v4 (mapped variables and theme override configuration)
- **Animation Orchestrators**: Framer Motion & GSAP
- **Icon Assets**: Lucide React & Custom inline SVG optimizations

---

## 📁 Repository Structure

```
├── public/                  # Public asset vectors & image stores
│   ├── teams-img/           # Creative curators team pictures
│   └── tm logo.png          # Main corporate brand identity logo
│
├── src/
│   ├── assets/              # Inline visual resources
│   ├── components/          # Reusable component libraries
│   │   ├── CustomSelect.jsx # Custom custom dropdown component
│   │   ├── EnquiryModal.jsx # Lead-generation popup desk
│   │   ├── Footer.jsx       # Giant background typography luxury footer
│   │   └── Navbar.jsx       # Sleek mobile-responsive header links
│   │
│   ├── data/                # Centralized state arrays
│   │   ├── companyInfo.js   # Main contact coordinates (Nikhil Karadbhajne)
│   │   ├── portfolioData.js # Successful Curations database
│   │   ├── servicesData.js  # Services catalog (price-free)
│   │   └── teamData.js      # List of all 11 curators
│   │
│   ├── pages/               # Routed pages
│   │   ├── Home.jsx         # Hero showcase & statistics
│   │   ├── About.jsx        # History & Spotlight
│   │   ├── Projects.jsx     # Gallery portfolio & sector filtering
│   │   ├── Services.jsx     # Core capabilities & detailed listings
│   │   ├── Team.jsx         # Full creative staff showcase
│   │   ├── Feedback.jsx     # Client reviews & testimonials
│   │   └── Contact.jsx      # Enquiry form & maps
│   │
│   ├── App.jsx              # Main routing matrix & transition wrapping
│   ├── main.jsx             # React DOM renderer entry point
│   └── index.css            # Global CSS, resets, and theme definitions
│
├── index.html               # Main entry HTML file & SEO metadata
├── vite.config.js           # Vite development and build settings
├── package.json             # Package scripts & dependencies list
└── README.md                # Developer documentation (this file)
```

---

## 🛠️ Installation & Setup

1. **Clone the project files & navigate to root**:
   ```bash
   cd temp1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   *The application will launch on `http://localhost:5173/`.*

4. **Verify production bundle compilation**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## ✒️ Development Guidelines

- **Pricing Display**: As a luxury brand, **do not display pricing rates directly** on services cards or previews. Direct clients to the Enquiry modal or Contact page.
- **Color Variables**: Use semantic Tailwind color utility tokens defined in `index.css`:
  - `text-festival-orange` / `bg-festival-orange` for gold details.
  - `bg-light-gray` for page backgrounds.
  - `text-dark-text` for core text content.
- **Forms**: Use `CustomSelect.jsx` for all forms instead of standard native `<select>` tags to maintain modern branding consistency.
- **Build Validation**: Always run `npm run build` before pushing any edits to check for import resolving issues.
