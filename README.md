# 🚀 AetherAI — Premium Framer Landing Page Template

AetherAI is a pixel-perfect, conversion-optimized, and premium dark glassmorphism landing page template designed specifically for modern SaaS startups, AI application builders, and developer tools. It features high-fidelity visual layouts, smooth Framer Motion animations, and beautiful ambient video backgrounds.

This template is built modularly with clean React components, letting you easily import elements into Framer or use it as a standalone Next.js/Vite frontend layout.

---

## 📂 1. Folder Structure

Here is a tree view of the included files and their contents:

```text
├── AI-Generated-Videos/        # Loops & reveals generated for section backdrops
│   ├── watermark-removed-Abstract_grid_pulsing_neon_light_202606291351.mp4  # Bento features grid video
│   ├── watermark-removed-Deep_space_particle_drift_202606291342.mp4         # Hero section background loop
│   ├── watermark-removed-Glassmorphic_UI_dashboard_floats._202606291348.mp4  # Hero floating dashboard reveal
│   └── watermark-removed-Tunnel_of_glowing_data_streams_202606291355.mp4    # Performance stats background
├── components/                 # Standalone React + Framer Motion components
│   ├── BentoFeatures.tsx       # Asymmetric grid displaying core features
│   ├── FAQ.tsx                 # Height-animated accordion list for customer Q&A
│   ├── Footer.tsx              # Static links matrix and social icons row
│   ├── FooterCTA.tsx           # Scaled subscription banner section
│   ├── Hero.tsx                # Landing section with H1 gradient and 3D dashboard mockup
│   ├── HowItWorks.tsx          # Dynamic workflow wizard with tabs and metrics
│   ├── Marquee.tsx             # Infinite horizontal CSS-based logo ticker
│   ├── Navbar.tsx              # Sticky glassmorphic header with mobile drawer
│   ├── PerformanceStats.tsx    # Numeric metric grid with count-up counters
│   ├── Pricing.tsx             # Stateful pricing tiers with monthly/yearly switcher
│   └── Testimonials.tsx        # Vertical staggered masonry review cards grid
├── styles/
│   └── globals.css             # Theme colors, variables, resets, and glass utilities
├── framer.config.js            # Configuration file specifying project imports and breakpoints
└── README.md                   # Setup guide and customization instructions
```

---

## ⚡ 2. Quick Start

### Step 1: Install Dependencies
AetherAI relies on **React** and **Framer Motion** for state management and animations. Install them in your project environment:
```bash
npm install framer-motion lucide-react
```

### Step 2: Import Styles
Import the global CSS file inside your main app entry point (e.g., `_app.js`, `index.js`, or standard layout wrapper):
```javascript
import '../styles/globals.css';
```

### Step 3: Integrate With Framer
To upload these layouts directly to Framer, register them as **Framer Code Components**. Ensure that the file path references match your framer directory layout as defined in `framer.config.js`.

---

## 🎨 3. Customization & Retheming Guide

All colors, typography sizing, border radiuses, and glass blur filters are controlled by **CSS Variables** defined in `/styles/globals.css` inside the `:root` scope. Modify these values to retheme the entire template in one place:

```css
:root {
  /* Fonts */
  --font-heading: 'Plus Jakarta Sans', sans-serif; /* Headings display font */
  --font-body: 'Inter', sans-serif;               /* Body text legibility font */

  /* Colors - Obsidian System */
  --bg-primary: #05050A;                          /* Deep main black background */
  --bg-secondary: #0D0D15;                        /* Darker gray surface/footer background */
  --bg-tertiary: #141423;                         /* Inner card background */
  
  /* Text System */
  --text-primary: #FFFFFF;                        /* High-contrast headings and labels */
  --text-secondary: #94A3B8;                      /* Secondary body content */
  --text-muted: #64748B;                          /* Inactive tabs, labels, and badges */
  
  /* Accents & Glows */
  --accent-indigo: #6366F1;                       /* Primary brand color (Indigo) */
  --accent-violet: #8B5CF6;                       /* Secondary accent color (Violet) */
  --accent-cyan: #06B6D4;                         /* Interactive icons and highlight metrics */
  
  /* Glassmorphism Configuration */
  --glass-bg: rgba(13, 13, 21, 0.6);             /* Semi-transparent surface */
  --glass-bg-hover: rgba(20, 20, 35, 0.85);       /* Hover panel overlay background */
  --glass-border: rgba(255, 255, 255, 0.08);      /* Thin container border */
  --glass-border-hover: rgba(255, 255, 255, 0.15);/* Hover state container border */
  --glass-blur: blur(16px);                       /* Backdrop filter blur intensity */
  
  /* Corner Radii */
  --radius-sm: 8px;                               /* Inputs and togglers */
  --radius-md: 16px;                              /* Sub-cards and accordions */
  --radius-lg: 24px;                              /* Core feature/testimonial cards */
  --radius-xl: 32px;                              /* CTA banners */
}
```

---

## 📹 4. Swapping Videos

The template includes 4 high-end ambient videos generated specifically to maintain optimal readability while adding motion. To swap them:
1. Upload your custom video files into the `/AI-Generated-Videos/` folder.
2. Locate the corresponding component and modify the `<source src="..." />` element to reference your new filename:

| Component | Video Reference | Purpose |
| :--- | :--- | :--- |
| **`Hero.tsx`** (Background) | `watermark-removed-Deep_space_particle_drift_202606291342.mp4` | Infinite space loop backlit behind the hero text. |
| **`Hero.tsx`** (Dashboard) | `watermark-removed-Glassmorphic_UI_dashboard_floats._202606291348.mp4` | Inside the floating 3D dashboard frame mockup. |
| **`BentoFeatures.tsx`** | `watermark-removed-Abstract_grid_pulsing_neon_light_202606291351.mp4` | Background overlay of the main Chat Engine bento grid block. |
| **`PerformanceStats.tsx`** | `watermark-removed-Tunnel_of_glowing_data_streams_202606291355.mp4` | Underlay visual behind the stats metric columns. |

---

## 🔤 5. Swapping Fonts

To switch from the default fonts (*Plus Jakarta Sans* and *Inter*):
1. Find the `@import` statement at the top of `/styles/globals.css` and replace it with your Google Fonts import URL:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap');
   ```
2. Update the font variables inside `:root`:
   ```css
   --font-heading: 'Montserrat', sans-serif;
   --font-body: 'Roboto', sans-serif;
   ```

---

## 📝 6. Editing Text Content

Text content, details, list variables, and arrays are organized directly inside each respective component:

* **Navigation links:** Edit the `navLinks` array inside `/components/Navbar.tsx`.
* **Company logos:** Edit the `logos` array (containing names and inline SVGs) inside `/components/Marquee.tsx`.
* **Bento details:** Modify titles, copy, and code syntax lines directly in `/components/BentoFeatures.tsx`.
* **Workflow steps:** Edit the `steps` array (titles, copy description, mock panel contents) in `/components/HowItWorks.tsx`.
* **Pricing structures:** Edit the `plans` array (Starter, Pro, Enterprise monthly/yearly prices, descriptions, and feature checklists) inside `/components/Pricing.tsx`.
* **User reviews:** Edit the `testimonials` array (quotes, names, roles, and companies) inside `/components/Testimonials.tsx`.
* **Accordion answers:** Edit the `faqData` array (questions and detailed answers) inside `/components/FAQ.tsx`.

---

## 📱 7. Responsive Breakpoints

AetherAI is designed to scale dynamically across all screens. It utilizes the following breakpoints for component restructuring:
* **Mobile (`< 390px`):** Everything collapses to a single column. The navigation bar changes to a mobile menu toggle button, which opens a full-screen blurred drawer navigation.
* **Tablet (`390px - 768px`):** Testimonials reorganise into 2 columns. Bento cards stack, and vertical timelines shrink.
* **Desktop (`900px+`):** Full grid layouts active: 3-column pricing, 3-column staggered masonry testimonials, and 2-column split workflow view.

---

## 🛡️ License & Support

AetherAI is sold under standard Framer Marketplace licensing. You are free to customize the template, change styles, and deploy it for commercial client work or personal projects. Reselling the template package files directly without customization is strictly prohibited.

For technical questions or custom integration support, contact our team at `support@aetherai.app` or join our community Discord channel.
