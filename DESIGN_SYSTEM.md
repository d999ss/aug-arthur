# Arthur Companies Design System
## Based on Anthropic.com Design Principles

---

## 1. TYPOGRAPHY HIERARCHY

### Font Families
- **Headlines (H1, H2)**: ITC Garamond (serif)
- **Body Text**: Styrene B (sans-serif)  
- **UI Elements**: Styrene A (sans-serif)
- **Special Emphasis**: Tiempos Text (serif)

### Type Scale (Exact from Anthropic)

#### Display/Headlines
- **Hero H1**: `clamp(2.5rem, 2.041rem + 1.959vw, 4rem)` - Used once per page
- **Section H2**: `clamp(2rem, 1.694rem + 1.306vw, 3rem)` - Major sections
- **Subsection H3**: `clamp(1.25rem, 1.173rem + 0.327vw, 1.5rem)` - Cards, subsections

#### Body Text
- **Lead Paragraph**: `clamp(1.125rem, 1.087rem + 0.163vw, 1.25rem)` - First paragraph, important text
- **Body**: `clamp(1rem, 0.962rem + 0.163vw, 1.125rem)` - Standard paragraphs
- **Small/Caption**: `0.875rem` - Metadata, captions

#### Line Heights
- Headlines: 1.1
- Body text: 1.65
- Small text: 1.5

---

## 2. SPACING SYSTEM

### Vertical Rhythm (Sections)
- **Hero section**: `padding: 8rem 0` (desktop), `6rem 0` (mobile)
- **Major sections**: `padding: 5rem 0` (desktop), `3rem 0` (mobile)
- **Content blocks**: `margin-bottom: 2rem`
- **Paragraphs**: `margin-bottom: 1.5rem`

### Container/Margins
- **Container max-width**: `1280px` (7xl)
- **Side margins**: `32px` (matches Anthropic exactly)
- **Content max-width**: `65ch` for readability

### Component Spacing
- **Between cards**: `2rem` gap
- **Inside cards**: `2rem` padding
- **Button padding**: `0.625rem 1.25rem`

---

## 3. COLOR PALETTE

### Primary Colors
- **Background**: `#f0eee7` (warm light tan)
- **Text**: `#171717` (near black)
- **Primary Accent**: `#E6B800` (golden)

### Secondary Colors
- **Cards**: `#ffffff` with subtle border
- **Muted Text**: `#6b7280`
- **Footer**: `#171717` (dark)

### Usage Rules
- Main background: Always warm tan
- Cards: Always white with light border
- Text: High contrast only
- Accents: Sparingly for CTAs and emphasis

---

## 4. LAYOUT PRINCIPLES

### Grid System
- 12-column grid
- Consistent gutters: 2rem
- Responsive breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Visual Hierarchy
1. Hero headline (largest, Garamond)
2. Section headlines (large, Garamond)
3. Body text (readable, Styrene)
4. Supporting text (smaller, muted)

### Component Patterns
- **Cards**: White background, subtle shadow, rounded corners (1rem)
- **Buttons**: Dark background, light text, subtle radius
- **Images**: Always rounded corners, no borders
- **Quotes**: Large, italic, generous padding

---

## 5. IMPLEMENTATION RULES

### DO:
- Use consistent spacing multiples (0.5rem, 1rem, 1.5rem, 2rem)
- Maintain type hierarchy strictly
- Keep backgrounds light and clean
- Use Garamond for ALL headlines
- Apply golden accent sparingly

### DON'T:
- Mix font sizes randomly
- Use different spacing systems per section
- Add unnecessary colors
- Make body text too large
- Create visual noise with effects

---

## 6. RESPONSIVE BEHAVIOR

### Typography Scaling
All fonts use `clamp()` for smooth scaling between breakpoints

### Layout Adaptation
- Stack columns on mobile
- Reduce padding on mobile by 40%
- Maintain readability with max-width constraints

---

## QUICK REFERENCE

```css
/* Headlines - Always Garamond */
.h1 { font: 400 clamp(2.5rem, 2.041rem + 1.959vw, 4rem)/1.1 var(--font-garamond); }
.h2 { font: 400 clamp(2rem, 1.694rem + 1.306vw, 3rem)/1.1 var(--font-garamond); }
.h3 { font: 400 clamp(1.25rem, 1.173rem + 0.327vw, 1.5rem)/1.2 var(--font-garamond); }

/* Body - Always Styrene B */
.body { font: 400 clamp(1rem, 0.962rem + 0.163vw, 1.125rem)/1.65 var(--font-styrene-b); }
.lead { font: 400 clamp(1.125rem, 1.087rem + 0.163vw, 1.25rem)/1.65 var(--font-styrene-b); }

/* Spacing */
.section { padding: 5rem 0; }
.container { max-width: 1280px; padding: 0 2rem; }
```