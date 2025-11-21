# Design System Guide

This document outlines the consistent design system implemented across your portfolio website.

## Color Variables (Light & Dark Mode)

### Light Theme (Default)
```css
--bg-primary: #161513
--bg-secondary: #1a1a1a
--text-primary: #ffffff
--text-secondary: rgba(255, 255, 255, 0.75)
--text-tertiary: rgba(255, 255, 255, 0.6)
--border-color: rgba(255, 255, 255, 0.12)
--card-bg: rgba(255, 255, 255, 0.05)
--accent-primary: #DF8908
--accent-secondary: #B415ff
--nav-bg: rgba(7, 7, 12, 0.85)
```

### Dark Theme (Add `.dark` class to `<html>`)
```css
--bg-primary: #0d0d0d
--bg-secondary: #1a1a1a
--text-primary: #e8e8e8
--text-secondary: rgba(232, 232, 232, 0.8)
--text-tertiary: rgba(232, 232, 232, 0.6)
--border-color: rgba(255, 255, 255, 0.08)
--card-bg: rgba(255, 255, 255, 0.05)
--accent-primary: #DF8908
--accent-secondary: #B415ff
--nav-bg: rgba(13, 13, 13, 0.95)
```

---

## Typography

### Headings

#### H1 - Main Section Titles
```jsx
<h1>Main Title</h1>
// Font: 80px, Weight: 600, Line-height: 1.2
```

#### H1 with Gradient
```jsx
<h1 className="gradient-text">Gradient Title</h1>
// Applies gradient from #DF8908 to #B415ff
```

#### H2 - Subsection Titles
```jsx
<h2>Subsection Title</h2>
// Font: 48px, Weight: 600, Line-height: 1.3
```

#### H3 - Card Titles
```jsx
<h3>Card Title</h3>
// Font: 28px, Weight: 600
```

#### H4 - Labels
```jsx
<h4>Label Text</h4>
// Font: 22px, Weight: 600
```

### Text Utilities

#### Large Text
```jsx
<p className="text-large">Large paragraph text</p>
// Font: 20px, Line-height: 1.7
```

#### Small Text
```jsx
<p className="text-small">Small text</p>
// Font: 14px, Line-height: 1.5
```

#### Eyebrow/Label
```jsx
<p className="text-eyebrow">Section Label</p>
// Font: 13px, Uppercase, Letter-spacing: 0.35em
```

---

## Buttons

### Primary Button (Gradient)
```jsx
<button className="btn-primary">Click Me</button>
// Padding: 12px 32px, Font: 16px
// Gradient background with hover effect
```

### Primary Button Large
```jsx
<button className="btn-primary-lg">Large Button</button>
// Padding: 20px 60px, Font: 22px
// Use for main CTAs like "Let's Talk" or "Connect"
```

### Secondary Button (Outline)
```jsx
<button className="btn-secondary">Secondary</button>
// Padding: 10px 26px, Font: 16px
// White border, transparent background
```

### Secondary Button Large
```jsx
<button className="btn-secondary-lg">Large Secondary</button>
// Padding: 20px 60px, Font: 22px
// Use for resume download or alternative actions
```

---

## Cards

### Standard Card
```jsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
// Padding: 32px, Border-radius: 26px
// Hover effect: translateY(-6px)
```

### Compact Card
```jsx
<div className="card-compact">
  <h4>Compact Title</h4>
  <p>Smaller card content</p>
</div>
// Padding: 24px, Border-radius: 20px
// Hover effect: translateY(-4px)
```

---

## Forms

### Form Group
```jsx
<div className="form-group">
  <label className="form-label">Your Name</label>
  <input className="form-input" type="text" placeholder="Enter your name" />
</div>
```

### Form Input
```jsx
<input className="form-input" type="email" placeholder="your@email.com" />
// Padding: 16px 20px, Border-radius: 8px
// Focus state: Orange glow effect
```

### Form Textarea
```jsx
<textarea className="form-textarea" placeholder="Your message..."></textarea>
// Min-height: 150px, Resizable
// Same focus state as input
```

---

## Usage Examples

### Contact Section
```jsx
<section className="contact">
  <h1 className="gradient-text">Let's Connect</h1>
  <p className="text-large">Get in touch with me</p>
  
  <form>
    <div className="form-group">
      <label className="form-label">Email</label>
      <input className="form-input" type="email" />
    </div>
    <div className="form-group">
      <label className="form-label">Message</label>
      <textarea className="form-textarea"></textarea>
    </div>
    <button className="btn-primary-lg">Send Message</button>
  </form>
</section>
```

### Project Card
```jsx
<div className="card">
  <p className="text-eyebrow">Featured Project</p>
  <h3>Project Name</h3>
  <p>Project description goes here</p>
  <button className="btn-primary">View Project</button>
</div>
```

### About Section
```jsx
<section>
  <h1 className="gradient-text">About Me</h1>
  <p className="text-large">Introduction paragraph</p>
  
  <div className="card">
    <h4>Experience</h4>
    <p>Experience details</p>
  </div>
</section>
```

---

## Responsive Behavior

All components automatically scale on smaller screens:

- **Desktop (> 1100px)**: Full size
- **Tablet (768px - 1100px)**: Medium size
- **Mobile (< 768px)**: Compact size

Headings, buttons, and form elements all have responsive font sizes defined in media queries.

---

## Dark Mode Implementation

The dark mode is automatically applied when the `.dark` class is added to the `<html>` element. All CSS variables automatically switch to dark theme values.

Toggle button in navbar handles this automatically via localStorage.

---

## Best Practices

1. **Always use CSS variables** for colors: `var(--text-primary)`, `var(--bg-primary)`, etc.
2. **Use semantic heading hierarchy**: h1 > h2 > h3, etc.
3. **Use button classes** instead of custom styles for consistency
4. **Use card classes** for all card-like containers
5. **Use form classes** for all input elements
6. **Use text utility classes** for different text sizes
7. **Maintain spacing**: Use consistent gaps and margins
8. **Test in both light and dark modes**

---

## Color Palette

### Gradients
- **Primary Gradient**: #DF8908 → #B415ff (used for headings, buttons)
- **Direction**: 263deg or 264deg

### Accent Colors
- **Orange**: #DF8908
- **Purple**: #B415ff

### Text Colors
- **Primary**: #ffffff (light) / #e8e8e8 (dark)
- **Secondary**: rgba(255,255,255,0.75) (light) / rgba(232,232,232,0.8) (dark)
- **Tertiary**: rgba(255,255,255,0.6) (light) / rgba(232,232,232,0.6) (dark)

### Backgrounds
- **Primary BG**: #161513 (light) / #0d0d0d (dark)
- **Card BG**: rgba(255,255,255,0.05) (both modes)
- **Border**: rgba(255,255,255,0.12) (light) / rgba(255,255,255,0.08) (dark)
