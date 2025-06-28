
# 🌿 Skincare Landing Page

A modern, responsive, and animated skincare brand landing page built with React, Tailwind CSS, and GSAP. Designed to closely match a Figma design with premium scroll animations, interactive elements, and clean layout transitions across all devices.

---

## Live url of skincare landing page

[live url](https://skincare-landing-page.vercel.app/)

---

## 📦 Tech Stack

- **React**
- **Tailwind CSS**
- **GSAP (GreenSock Animation Platform)**
- **Figma (UI Reference)**

---

## 🚀 Features

### ✅ Layout & Responsiveness

- Pixel-perfect responsive design across **mobile**, **tablet**, and **desktop** views.
- Flex and grid-based layouts with precise positioning from the Figma reference.
- Custom breakpoints and styling tailored per device (e.g., tablet-only layout overrides).

### ✅ Components Implemented

- **Hero Section**
  - Heading, paragraph, and product image aligned according to device.
  - Word-by-word scroll-triggered paragraph animation using GSAP.
  - Fancy, luxurious page-load animation (heading from left, image from right, button fade in).

- **Best Selling Products Section**
  - Horizontally scrollable carousel.
  - **Reusable** `CardImage`, `ArrowButton`, and `Button` components.
  - Infinite manual carousel (wraps around on arrow click).

- **Why Our Products Section**
  - Vertical list of product values (with numbered gradient text).
  - Overlay card with award icon and highlight.
  - Mobile/tablet layout refinements: left alignment on tablet for text block.

- **Navbar**
  - Brand logo, navigation links, cart/user icons.
  - Hover interactions for nav items and icons with underline and color transition.

- **Button Styles**
  - Custom circle indicator inside buttons that reacts to hover.
  - `group-hover` behavior for internal span color transitions.

---

## 🧩 Reusable Components

- `Button` – Accepts `callerStyle` prop for flexible styling across sections.
- `ArrowButton` – Left/Right controls for carousels.
- `CardImage` – Displays product image, title, price, and cart icon.
- `OverlayCard` – Highlight component with icon/image support.

---

## 🎨 Animations

- GSAP used for:
  - Scroll-triggered animations.
  - Page load entrance animations.
  - Text animations (word-by-word color fade).

- Tailwind transitions:
  - Hover effects (e.g., scale, underline, shadow).
  - Button background and text transitions.
  - Image zoom-in on hover (card image).

---

## 📁 Folder Structure (Simplified)

```planetext
src/
├── components/
│   ├── HeroSection.jsx
│   ├── BestSellingSection.jsx
│   ├── WhyOurProducts.jsx
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── ArrowButton.jsx
│   ├── CardImage.jsx
│   └── OverlayCard.jsx
├── utils/
│   └── icons/  // BagIcon, UserIcon, HeartIcon, CartIcon etc.

publi/
├── assets/
│   └── ...     // Images used in Hero and Product sections
```

---

## 🔧 Getting Started

**Clone the repository**  

```bash
git clone https://github.com/ankitNegiDev/skincare-landing-page/tree/main/SkinCare
```

**Install dependencies**  

```bash
npm install
```

**Start the development server**  

```bash
npm run dev
```

**View in browser**  
Visit `http://localhost:5173` or the port your dev server shows.

---

## 💎 Credits

- **Design Inspiration**: Figma file provided.
- **Icons**: Custom SVGs via `utils/icons/`.
- **Animations**: Powered by [GSAP](https://greensock.com/gsap/)

---

## 📃 License

This project is for educational and showcase purposes. Not for commercial reuse unless permitted.
