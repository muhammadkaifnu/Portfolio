# Implementation Guide - Design System Updates

This guide shows how to update each component to use the new design system for consistency.

## Quick Summary

✅ **Already Updated:**
- `index.css` - Complete design system with all variables and classes
- `Navbar.jsx` & `Navbar.css` - Dark mode toggle implemented
- Dark/Light theme support

🔄 **To Update (Optional but Recommended):**
- Contact form styling
- Button classes
- Card styling
- Typography consistency

---

## How to Apply Design System Classes

### 1. Contact Form (Contact.jsx & Contact.css)

**Current Issues:**
- Hardcoded colors
- Inconsistent button styling
- Form inputs not using design system

**Update Strategy:**

Replace in Contact.css:
```css
/* OLD */
.contact-submit {
    background: linear-gradient(264deg,#df8908 -5.09%,#b415ff 100%);
}

/* NEW */
.contact-submit {
    @apply btn-primary-lg;
}
```

Or add to Contact.jsx:
```jsx
<button className="btn-primary-lg">Send Message</button>
```

---

### 2. Hero Section (hero.jsx & hero.css)

**Current Issues:**
- Hardcoded button styles
- Inconsistent with design system

**Update Strategy:**

Replace button classes:
```jsx
/* OLD */
<button className="hero-connect">Connect</button>
<button className="hero-resume">Resume</button>

/* NEW */
<button className="btn-primary-lg">Connect</button>
<button className="btn-secondary-lg">Resume</button>
```

---

### 3. About Section (About.jsx & about.css)

**Current Issues:**
- Cards using custom styles
- Headings not consistent

**Update Strategy:**

Replace card classes:
```jsx
/* OLD */
<div className="about-card">
  <h3>Title</h3>
  <p>Content</p>
</div>

/* NEW */
<div className="card">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

---

### 4. Projects Section (Projects.jsx & Projects.css)

**Current Issues:**
- Project cards using custom styles

**Update Strategy:**

Replace card classes:
```jsx
/* OLD */
<div className="project-card">
  <h3>Project</h3>
</div>

/* NEW */
<div className="card">
  <h3>Project</h3>
</div>
```

---

### 5. Services Section (Services.jsx & Services.css)

**Current Issues:**
- Service cards using custom styles

**Update Strategy:**

Replace with design system cards:
```jsx
<div className="card-compact">
  <h4>Service Title</h4>
  <p>Service description</p>
</div>
```

---

## Design System Classes Reference

### Buttons
- `.btn-primary` - Small gradient button
- `.btn-primary-lg` - Large gradient button (CTAs)
- `.btn-secondary` - Small outline button
- `.btn-secondary-lg` - Large outline button

### Cards
- `.card` - Standard card (32px padding, 26px radius)
- `.card-compact` - Compact card (24px padding, 20px radius)

### Text
- `.text-large` - 20px, for descriptions
- `.text-small` - 14px, for captions
- `.text-eyebrow` - 13px uppercase, for labels

### Forms
- `.form-group` - Wrapper for label + input
- `.form-label` - Label styling
- `.form-input` - Input field styling
- `.form-textarea` - Textarea styling

---

## Step-by-Step Implementation

### Option 1: Gradual Update (Recommended)
1. Keep existing CSS files as they are
2. Add new classes to components as needed
3. Test in both light and dark modes
4. Gradually replace old styles

### Option 2: Full Refactor
1. Remove component-specific CSS
2. Use only design system classes
3. Override in component CSS only if needed
4. Cleaner but requires more changes

---

## Testing Checklist

After implementing design system:

- [ ] All headings are consistent in size and weight
- [ ] All buttons look the same (primary/secondary)
- [ ] All cards have consistent styling
- [ ] Form inputs are consistent
- [ ] Dark mode works for all components
- [ ] Light mode works for all components
- [ ] Responsive design works on mobile
- [ ] Hover effects work on all interactive elements
- [ ] Colors match the design system palette

---

## Color Usage Guide

### When to Use Each Color

**Text Colors:**
- `var(--text-primary)` - Main headings, important text
- `var(--text-secondary)` - Body text, descriptions
- `var(--text-tertiary)` - Labels, captions, secondary info

**Background Colors:**
- `var(--bg-primary)` - Page background
- `var(--card-bg)` - Card backgrounds
- `var(--border-color)` - Borders

**Accent Colors:**
- `#DF8908` (Orange) - Primary accent
- `#B415ff` (Purple) - Secondary accent
- Gradient: Both together

---

## Common Patterns

### Section with Title and Cards
```jsx
<section>
  <h1 className="gradient-text">Section Title</h1>
  <p className="text-large">Section description</p>
  
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
    <div className="card">
      <h3>Card 1</h3>
      <p>Content</p>
    </div>
    <div className="card">
      <h3>Card 2</h3>
      <p>Content</p>
    </div>
  </div>
</section>
```

### Form Section
```jsx
<section>
  <h1 className="gradient-text">Get In Touch</h1>
  
  <form>
    <div className="form-group">
      <label className="form-label">Name</label>
      <input className="form-input" type="text" />
    </div>
    
    <div className="form-group">
      <label className="form-label">Message</label>
      <textarea className="form-textarea"></textarea>
    </div>
    
    <button className="btn-primary-lg">Send</button>
  </form>
</section>
```

---

## Notes

- All components automatically support dark mode
- No additional dark mode CSS needed
- CSS variables handle all theme switching
- Responsive breakpoints: 1100px, 768px
- All transitions are 0.3s ease for consistency
