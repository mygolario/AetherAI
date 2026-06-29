# 🚀 AetherAI — Premium Framer Landing Page Template

AetherAI is a pixel-perfect, conversion-optimized, and premium dark glassmorphism landing page template designed specifically for modern SaaS startups, AI application builders, and developer tools. It features high-fidelity visual layouts, smooth Framer Motion animations, and beautiful ambient video backgrounds.

This template is built modularly with clean React components, letting you easily import elements into Framer or use it as a standalone Next.js/Vite frontend layout.

---

## 📂 1. Folder Structure

Here is a tree view of the included files and their contents:

```text
├── public/                     # Static assets folder served by Vite/Vercel at root /
│   ├── videos/                 # Loops & reveals generated for section backdrops
│   │   ├── bento_grid.mp4      # Bento features grid video
│   │   ├── space_bg.mp4        # Hero section background loop
│   │   ├── dashboard.mp4       # Hero floating dashboard reveal
│   │   └── stats_bg.mp4        # Performance stats background
│   └── images/                 # Custom generated visual design assets
│       ├── hero_dashboard.jpg  # Hero dashboard fallback screenshot
│       ├── bg_mesh.jpg         # Ambient gradient mesh overlay backdrop
│       ├── icon_engine.jpg     # Bento grid AI Engine card icon
│       ├── icon_terminal.jpg   # Bento grid SDK terminal card icon
│       ├── icon_speed.jpg      # Bento grid Speed card icon
│       ├── icon_global.jpg     # Bento grid Network card icon
│       ├── avatar_1.jpg        # Testimonial avatar (profile 1 & 4)
│       ├── avatar_2.jpg        # Testimonial avatar (profile 2 & 5)
│       └── avatar_3.jpg        # Testimonial avatar (profile 3 & 6)
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
├── App.tsx                     # Main layout assembly script grouping components together
├── main.tsx                    # React mounting script connecting App to index.html
├── index.html                  # Root template HTML entry served by Vite/Vercel
├── vite.config.ts              # Vite plugin and build system configurations
├── tsconfig.json               # TypeScript compiler config for syntax safety
├── framer.config.js            # Configuration file specifying project imports and breakpoints
└── README.md                   # Setup guide and customization instructions
```

---

## ⚡ 2. Quick Start

### Step 1: Install Dependencies
AetherAI relies on **React** and **Framer Motion** for state management and animations. Install them in your project environment:
```bash
npm install
```

### Step 2: Running Locally
Run the Vite development server to test changes locally:
```bash
npm run dev
```

### Step 3: Production Build
Compile and bundle the project assets for deployment (outputs to `/dist/`):
```bash
npm run build
```

---

## 🎨 3. Customization & Retheming Guide

All colors, typography sizing, border radiuses, and glass blur filters are controlled by **CSS Variables** defined in `/styles/globals.css` inside the `:root` scope. Modify these values to retheme the entire template in one place:

```css
:root {
  /* Fonts */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;

  /* Color Palette - Cyber Obsidian */
  --bg-primary: #020205;
  --bg-secondary: #08080E;
  --bg-tertiary: #10101C;
  
  /* Text Colors */
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #475569;
  
  /* Accents & Glows */
  --accent-indigo: #6366F1;
  --accent-violet: #a855f7;
  --accent-cyan: #06b6d4;
}
```

---

## 📹 4. Swapping Videos

The template includes 4 high-end ambient videos. To swap them:
1. Upload your custom video files into the `/public/videos/` folder.
2. Locate the corresponding component and modify the `<source src="..." />` element to reference your new filename:

| Component | Video Reference | Purpose |
| :--- | :--- | :--- |
| **`Hero.tsx`** (Background) | `/videos/space_bg.mp4` | Infinite space loop backlit behind the hero text. |
| **`Hero.tsx`** (Dashboard) | `/videos/dashboard.mp4` | Inside the floating 3D dashboard frame mockup. |
| **`BentoFeatures.tsx`** | `/videos/bento_grid.mp4` | Background overlay of the main Chat Engine bento grid block. |
| **`PerformanceStats.tsx`** | `/videos/stats_bg.mp4` | Underlay visual behind the stats metric columns. |

---

## 🖼️ 5. Swapping Images

To replace background meshes, feature icons, or user avatars:
1. Upload your custom image files into the `/public/images/` folder.
2. Update the filename references inside [Hero.tsx](file:///d:/Ario%20Vibe%20Coding/Framer-Landing-Test/components/Hero.tsx), [BentoFeatures.tsx](file:///d:/Ario%20Vibe%20Coding/Framer-Landing-Test/components/BentoFeatures.tsx), or [Testimonials.tsx](file:///d:/Ario%20Vibe%20Coding/Framer-Landing-Test/components/Testimonials.tsx).

---

## 🛡️ License & Support

AetherAI is sold under standard Framer Marketplace licensing. You are free to customize the template, change styles, and deploy it for commercial client work or personal projects. Reselling the template package files directly without customization is strictly prohibited.

For technical questions or custom integration support, contact our team at `support@aetherai.app`.
