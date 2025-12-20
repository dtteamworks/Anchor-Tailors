# Premium Hero Component

A modern and fully responsive hero section for tailoring/fashion websites built with Next.js and Tailwind CSS.

---

## Features

- ✨ Smooth fade-in animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Glassmorphism effects with gradient backgrounds
- 🎯 Premium orange and black theme
- ⚡ Lightweight and optimized

---

## Installation
```bash
npx create-next-app@latest
```

```bash
npm install lucide-react
```

Copy the component file to your project and import it:

```jsx
import PremiumHero from '@/components/PremiumHero';

export default function Home() {
  return <PremiumHero />;
}
```

---

## Customization

### Change Colors
```jsx
// Orange to Blue
from-orange-500 to-orange-600 → from-blue-500 to-blue-600

// Background
from-gray-950 via-black to-gray-900 → Your colors
```

### Add Your Images
Replace placeholder sections:
```jsx
// Model Image
<Image src="/your-model.png" alt="Model" width={418} height={648} />

// Client Photo
<Image src="/client.jpg" alt="Client" width={80} height={80} />
```

### Update Content
Edit the text directly in the component:
- Badge text: `#1 RANKED IN THE MARKET`
- Heading: `Comfort & Style`
- Description, testimonial, client name, etc.

---

## Responsive Breakpoints

- **Mobile**: < 640px (Stacked layout)
- **Tablet**: 640px - 1024px (Stacked with better spacing)
- **Desktop**: 1024px+ (Three column layout)

---

## What's Included

- Animated top badge
- Hero heading with gradient text
- Service description with quote icon
- Contact CTA button with hover effects
- Customer stats counter
- Floating model image
- Client testimonial card with rating
- Scroll indicator

---

## Requirements

- Next.js 13+
- Tailwind CSS 3+
- lucide-react (for icons)

---

**That's it! Simple, clean, and ready to use.** 🚀