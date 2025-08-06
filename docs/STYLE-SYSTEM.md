# Arthur Companies Style System Documentation

## Overview

This document outlines the comprehensive style system for the Arthur Companies website, designed for easy maintenance, consistent styling, and rapid development.

## Design Tokens

### Color System

The site uses a carefully crafted color palette optimized for agricultural/agricultural technology branding:

#### CSS Custom Properties (Design Tokens)
```css
/* Brand Colors - Agriculture Theme */
--primary: 142 76% 36%;        /* Agriculture Green */
--primary-foreground: 0 0% 100%;
--accent: 188 65% 38%;         /* Innovation Teal */  
--accent-foreground: 0 0% 100%;

/* UI Colors */
--background: 0 0% 100%;       /* White */
--foreground: 222.2 84% 4.9%;  /* Near Black */
--muted: 210 40% 96%;          /* Light Gray */
--muted-foreground: 215.4 16.3% 46.9%; /* Medium Gray */
```

#### Tailwind Custom Colors
```javascript
// tailwind.config.ts
brand: {
  primary: "#16a34a",     // Green-600 - Agriculture/Growth
  secondary: "#059669",   // Emerald-600 - Sustainability  
  accent: "#0d9488",      // Teal-600 - Innovation
  neutral: "#374151",     // Gray-700 - Professional
}
```

### Typography Scale

```css
/* Typography Tokens */
.heading-1 { @apply text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance; }
.heading-2 { @apply text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance; }
.heading-3 { @apply text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance; }
.body-large { @apply text-lg md:text-xl text-muted-foreground leading-relaxed; }
.body-small { @apply text-sm text-muted-foreground; }
```

### Spacing System

```css
/* Layout Tokens */
.section-padding    { @apply py-16 lg:py-24; }    /* Standard section spacing */
.section-padding-sm { @apply py-8 lg:py-12; }     /* Small section spacing */
.section-padding-lg { @apply py-24 lg:py-32; }    /* Large section spacing */
```

## Component Classes

### Layout Components

```css
/* Container */
.container { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }

/* Grid Systems */
.content-grid  { @apply grid gap-12 lg:grid-cols-2 lg:gap-16 items-center; }
.feature-grid  { @apply grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4; }

/* Hero Layout */
.hero-section { @apply section-padding-lg bg-gradient-to-br from-primary/5 to-accent/5; }
```

### Card Components

```css
.card           { @apply bg-card text-card-foreground rounded-lg border shadow-sm; }
.card-elevated  { @apply bg-card text-card-foreground rounded-lg border shadow-lg; }
.card-interactive { 
  @apply bg-card text-card-foreground rounded-lg border shadow-sm 
         transition-all duration-200 hover:shadow-md hover:-translate-y-1; 
}
```

### Button Components

```css
.btn-primary   { @apply bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors focus-visible-ring; }
.btn-secondary { @apply bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-2 rounded-md font-medium transition-colors focus-visible-ring; }
.btn-outline   { @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-2 rounded-md font-medium transition-colors focus-visible-ring; }
```

### Navigation Components

```css
.nav-link        { @apply text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium; }
.nav-link-active { @apply text-primary font-semibold; }
```

## Utility Classes

### Focus States
```css
.focus-ring         { @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2; }
.focus-visible-ring { @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2; }
```

### Transitions
```css
.transition-smooth           { @apply transition-all duration-200 ease-in-out; }
.transition-colors-smooth    { @apply transition-colors duration-200 ease-in-out; }
.transition-transform-smooth { @apply transition-transform duration-200 ease-in-out; }
```

### Interactive States
```css
.hover-lift  { @apply transition-transform duration-200 hover:-translate-y-1; }
.hover-scale { @apply transition-transform duration-200 hover:scale-105; }
```

### Brand Gradients
```css
.gradient-brand        { @apply bg-gradient-to-r from-primary to-accent; }
.gradient-brand-subtle { @apply bg-gradient-to-br from-primary/10 to-accent/10; }
```

## Dark Mode Support

The system includes full dark mode support with automatic color adjustments:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 142 76% 36%;        /* Brand colors remain consistent */
  --accent: 188 65% 38%;
  /* UI colors adjust for dark theme readability */
}
```

## Responsive Design

### Breakpoint Strategy
- **Mobile First**: All base styles target mobile devices
- **Progressive Enhancement**: Larger screens get enhanced layouts
- **Container Queries**: Future-ready for container-based responsive design

### Grid Patterns
```css
/* Standard responsive grid */
.grid.md:grid-cols-2.lg:grid-cols-3.xl:grid-cols-4

/* Content layout */
.grid.lg:grid-cols-2.gap-12.lg:gap-16.items-center
```

## Performance Optimizations

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Font Rendering
```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

### Print Styles
```css
@media print {
  .hero-section, .section-padding { @apply py-4; }
  .gradient-brand, .gradient-brand-subtle { 
    background: none !important; 
    color: black !important; 
  }
}
```

## Usage Guidelines

### ✅ Do's

1. **Use design tokens consistently**
   ```jsx
   // Good
   <section className="hero-section">
   <h1 className="heading-1">Title</h1>
   
   // Avoid
   <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50">
   <h1 className="text-4xl md:text-6xl font-bold">Title</h1>
   ```

2. **Leverage utility classes for common patterns**
   ```jsx
   // Good
   <Card className="card-interactive">
   <Button className="btn-primary">
   
   // Avoid
   <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
   <Button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded">
   ```

3. **Use semantic color classes**
   ```jsx
   // Good
   <div className="bg-primary text-primary-foreground">
   <p className="text-muted-foreground">
   
   // Avoid  
   <div className="bg-green-600 text-white">
   <p className="text-gray-600">
   ```

### ❌ Don'ts

1. **Don't hardcode colors**
   ```jsx
   // Avoid
   className="bg-green-500 text-green-900"
   
   // Use
   className="bg-primary text-primary-foreground"
   ```

2. **Don't create inconsistent spacing**
   ```jsx
   // Avoid
   className="py-14 px-3"
   
   // Use
   className="section-padding container"
   ```

3. **Don't ignore accessibility**
   ```jsx
   // Avoid
   <button className="focus:outline-none">
   
   // Use
   <button className="focus-visible-ring">
   ```

## File Structure

```
styles/
├── globals.css              # All global styles and design tokens
├── components.css           # Component-specific styles (if needed)
└── utilities.css           # Additional utility classes (if needed)

tailwind.config.ts          # Tailwind configuration with brand colors
```

## Migration Guide

### From Hardcoded Colors
1. Replace `bg-green-600` → `bg-primary`
2. Replace `text-green-700` → `text-primary`
3. Replace `border-green-500` → `border-primary`

### From Manual Spacing
1. Replace custom padding → `section-padding`, `section-padding-sm`, `section-padding-lg`
2. Replace container styles → `container`
3. Replace grid patterns → `feature-grid`, `content-grid`

### From Inconsistent Typography
1. Replace large headings → `heading-1`, `heading-2`, `heading-3`
2. Replace body text → `body-large`, `body-small`
3. Add `text-balance` for headings

## Maintenance

### Adding New Colors
1. Add to CSS custom properties in `globals.css`
2. Add to Tailwind config in `tailwind.config.ts`
3. Create corresponding utility classes if needed
4. Update documentation

### Adding New Components
1. Create component class in `@layer components`
2. Use existing design tokens
3. Include focus states and accessibility
4. Test in both light and dark modes
5. Document usage

### Performance Monitoring
- Monitor bundle size impact of new styles
- Test animation performance on low-end devices
- Validate contrast ratios for accessibility
- Check print stylesheet compatibility

## Tools & Resources

- **Color Palette**: HSL-based for easier manipulation
- **Typography**: Inter (sans-serif), JetBrains Mono (monospace)  
- **Accessibility**: WCAG 2.1 AA compliant
- **Browser Support**: Modern browsers with graceful degradation
- **Build Tool**: Tailwind CSS with custom configuration

---

*Last Updated: August 2025*  
*Version: 1.0*