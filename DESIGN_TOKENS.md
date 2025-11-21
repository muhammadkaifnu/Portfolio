# Design Tokens - Complete Reference

## Typography System

### Font Family
- Primary: 'Outfit'
- Fallback: sans-serif

### Font Sizes & Weights

| Element | Size | Weight | Line Height | Margin |
|---------|------|--------|-------------|--------|
| H1 | 80px | 600 | 1.2 | 0 |
| H2 | 48px | 600 | 1.3 | 0 0 24px 0 |
| H3 | 28px | 600 | 1.3 | 0 0 12px 0 |
| H4 | 22px | 600 | 1 | 0 0 12px 0 |
| H5 | 18px | 600 | 1 | 0 0 8px 0 |
| H6 | 16px | 600 | 1 | 0 0 8px 0 |
| Body (p) | 16px | 400 | 1.6 | 0 0 16px 0 |
| .text-large | 20px | 400 | 1.7 | 0 |
| .text-small | 14px | 400 | 1.5 | 0 |
| .text-eyebrow | 13px | 500 | 1 | 0 |

### Responsive Typography

#### Desktop (> 1100px)
- H1: 80px
- H2: 48px
- H3: 28px

#### Tablet (768px - 1100px)
- H1: 64px
- H2: 42px
- H3: 24px

#### Mobile (< 768px)
- H1: 48px
- H2: 36px
- H3: 22px

---

## Color System

### Light Theme
```
Primary Background:     #161513
Secondary Background:   #1a1a1a
Primary Text:          #ffffff
Secondary Text:        rgba(255, 255, 255, 0.75)
Tertiary Text:         rgba(255, 255, 255, 0.6)
Card Background:       rgba(255, 255, 255, 0.05)
Border Color:          rgba(255, 255, 255, 0.12)
Navigation BG:         rgba(7, 7, 12, 0.85)
```

### Dark Theme
```
Primary Background:     #0d0d0d
Secondary Background:   #1a1a1a
Primary Text:          #e8e8e8
Secondary Text:        rgba(232, 232, 232, 0.8)
Tertiary Text:         rgba(232, 232, 232, 0.6)
Card Background:       rgba(255, 255, 255, 0.05)
Border Color:          rgba(255, 255, 255, 0.08)
Navigation BG:         rgba(13, 13, 13, 0.95)
```

### Accent Colors
```
Primary Accent:        #DF8908 (Orange)
Secondary Accent:      #B415ff (Purple)
Gradient:              #DF8908 → #B415ff
```

---

## Spacing System

### Padding
| Size | Value |
|------|-------|
| xs | 8px |
| sm | 12px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 60px |

### Gaps
| Size | Value |
|------|-------|
| sm | 12px |
| md | 16px |
| lg | 24px |
| xl | 28px |
| 2xl | 50px |

### Margins
| Size | Value |
|------|-------|
| xs | 4px |
| sm | 8px |
| md | 12px |
| lg | 16px |
| xl | 24px |
| 2xl | 50px |

---

## Component Specifications

### Buttons

#### Primary Button (.btn-primary)
```
Padding:        12px 32px
Font Size:      16px
Font Weight:    600
Border Radius:  50px
Background:     Gradient (#DF8908 → #B415ff)
Color:          #ffffff
Border:         none
Cursor:         pointer
Transition:     transform 0.3s ease, box-shadow 0.3s ease

Hover State:
  Transform:    translateY(-2px)
  Box Shadow:   0 15px 30px rgba(0, 0, 0, 0.35)

Active State:
  Transform:    translateY(0)
```

#### Primary Button Large (.btn-primary-lg)
```
Padding:        20px 60px
Font Size:      22px
(Rest same as .btn-primary)
```

#### Secondary Button (.btn-secondary)
```
Padding:        10px 26px
Font Size:      16px
Font Weight:    600
Border Radius:  50px
Background:     transparent
Color:          #ffffff
Border:         2px solid #ffffff
Cursor:         pointer
Transition:     all 0.3s ease

Hover State:
  Border Color: #B415ff
  Color:        #B415ff
  Box Shadow:   0 10px 20px rgba(180, 21, 255, 0.2)
```

#### Secondary Button Large (.btn-secondary-lg)
```
Padding:        20px 60px
Font Size:      22px
(Rest same as .btn-secondary)
```

---

### Cards

#### Standard Card (.card)
```
Padding:        32px
Border Radius:  26px
Background:     var(--card-bg)
Border:         1px solid var(--border-color)
Box Shadow:     0 18px 45px rgba(0, 0, 0, 0.4)
Transition:     transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease

Hover State:
  Border Color: rgba(223, 137, 8, 0.85)
  Transform:    translateY(-6px)
  Box Shadow:   0 22px 55px rgba(0, 0, 0, 0.5)
```

#### Compact Card (.card-compact)
```
Padding:        24px
Border Radius:  20px
Background:     var(--card-bg)
Border:         1px solid var(--border-color)
Box Shadow:     0 12px 30px rgba(0, 0, 0, 0.3)
Transition:     transform 0.3s ease, border-color 0.3s ease

Hover State:
  Border Color: rgba(223, 137, 8, 0.85)
  Transform:    translateY(-4px)
```

---

### Forms

#### Form Group (.form-group)
```
Display:        flex
Flex Direction: column
Gap:            12px
Margin Bottom:  24px
```

#### Form Label (.form-label)
```
Font Size:      18px
Font Weight:    500
Color:          var(--text-primary)
```

#### Form Input (.form-input)
```
Padding:        16px 20px
Border Radius:  8px
Border:         none
Background:     rgba(50, 50, 60, 0.8)
Color:          var(--text-secondary)
Font Family:    'Outfit', sans-serif
Font Size:      16px
Transition:     background 0.3s ease, box-shadow 0.3s ease

Focus State:
  Background:   rgba(50, 50, 60, 1)
  Box Shadow:   0 0 0 2px rgba(223, 137, 8, 0.3)
```

#### Form Textarea (.form-textarea)
```
(Same as .form-input)
Min Height:     150px
Resize:         vertical
```

---

## Border Radius System

| Size | Value |
|------|-------|
| sm | 8px |
| md | 20px |
| lg | 26px |
| full | 50px |

---

## Shadow System

| Level | Value |
|-------|-------|
| sm | 0 12px 30px rgba(0, 0, 0, 0.3) |
| md | 0 18px 45px rgba(0, 0, 0, 0.4) |
| lg | 0 22px 55px rgba(0, 0, 0, 0.5) |
| xl | 0 25px 50px rgba(0, 0, 0, 0.35) |

---

## Transition System

| Duration | Value |
|----------|-------|
| fast | 0.2s |
| normal | 0.3s |
| slow | 0.5s |

Easing: `ease` (default)

---

## Breakpoints

| Device | Width |
|--------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1100px |
| Desktop | > 1100px |

---

## Gradient Specifications

### Primary Gradient
```
Direction:  263deg or 264deg
Start:      #DF8908 (Orange) at -5.06% or -5.09%
End:        #B415ff (Purple) at 100% or 106.28%
```

### Usage
```css
background: linear-gradient(263deg, #DF8908 -5.06%, #B415ff 106.28%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Accessibility

### Color Contrast
- Primary Text on Background: 7:1+ (AAA)
- Secondary Text on Background: 4.5:1+ (AA)
- Focus States: Visible 2px outline

### Focus States
- All interactive elements have focus states
- Focus outline: 2px solid with accent color
- Outline offset: 2px

### Keyboard Navigation
- All buttons and links are keyboard accessible
- Tab order follows visual hierarchy
- Focus states are clearly visible

---

## Animation Principles

1. **Duration**: 0.3s for most interactions
2. **Easing**: `ease` for smooth, natural motion
3. **Direction**: Upward for hover (translateY(-2px to -6px))
4. **Feedback**: Visual feedback on all interactions

---

## CSS Variables Usage

All colors should use CSS variables:

```css
/* DO */
color: var(--text-primary);
background: var(--bg-primary);
border-color: var(--border-color);

/* DON'T */
color: #ffffff;
background: #161513;
border-color: rgba(255, 255, 255, 0.12);
```

This ensures automatic dark mode support.

---

## Implementation Notes

1. All components inherit from base styles
2. No hardcoded colors in component CSS
3. Use CSS variables for all colors
4. Responsive design is mobile-first
5. Dark mode is automatic via CSS variables
6. All transitions use 0.3s ease
7. Hover states are consistent across components
8. Focus states are visible for accessibility
