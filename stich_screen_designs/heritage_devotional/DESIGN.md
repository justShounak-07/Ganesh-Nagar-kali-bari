---
name: Heritage Devotional
colors:
  surface: '#fff8f6'
  surface-dim: '#f8d1cb'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e5'
  surface-container-high: '#ffe2dd'
  surface-container-highest: '#ffdad4'
  on-surface: '#2b1613'
  on-surface-variant: '#5a413d'
  inverse-surface: '#422a26'
  inverse-on-surface: '#ffedea'
  outline: '#8e706c'
  outline-variant: '#e2bfb9'
  surface-tint: '#b22b1d'
  primary: '#570000'
  on-primary: '#ffffff'
  primary-container: '#800000'
  on-primary-container: '#ff8371'
  inverse-primary: '#ffb4a8'
  secondary: '#9f402d'
  on-secondary: '#ffffff'
  secondary-container: '#fd876f'
  on-secondary-container: '#732010'
  tertiary: '#6c5e06'
  on-tertiary: '#ffffff'
  tertiary-container: '#bdac52'
  on-tertiary-container: '#4a3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8f0f07'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#ffb4a5'
  on-secondary-fixed: '#3e0500'
  on-secondary-fixed-variant: '#802918'
  tertiary-fixed: '#f7e382'
  tertiary-fixed-dim: '#dac769'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#524700'
  background: '#fff8f6'
  on-background: '#2b1613'
  surface-variant: '#ffdad4'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is built upon a "Traditional Editorial" philosophy. It merges the storied heritage of Bengali cultural identity with the clarity of high-end modern publishing. The goal is to evoke a sense of sanctity, reverence, and communal warmth without feeling dated or cluttered.

The aesthetic avoids digital-first trends like glassmorphism or neon glows in favor of a **tactile, paper-like quality**. It utilizes generous whitespace (the "breath" of the temple) to highlight intricate content. Visual interest is generated through "cultural accents"—subtle patterns inspired by *Alpana* (traditional floor art) and architectural geometry from terracotta temples, applied with restraint to maintain a professional, institutional feel.

## Colors
The palette is grounded in the earthy and sacred tones of Bengal. 
- **Primary (Maroon):** Represents the vermilion (*Sindoor*) and the depth of the Kali Mandir tradition. Used for key actions, primary headers, and brand-critical elements.
- **Background (Warm Ivory):** Replaces harsh white with a soft, parchment-like tone to reduce eye strain and provide a welcoming, "temple-wall" warmth.
- **Accent (Antique Gold):** Used sparingly for ornamentation, borders, or highlights to denote premium quality and spiritual significance.
- **Secondary (Terracotta):** Inspired by the clay architecture of the region, used for supporting elements and call-outs.
- **Text (Deep Brown):** A softer alternative to black, maintaining high legibility while harmonizing with the warm background.

## Typography
This design system employs a high-contrast typographic pairing. **Playfair Display** provides the editorial authority and traditional elegance required for titles and devotional quotes. Its high-stroke contrast mirrors calligraphy. 

**Inter** is utilized for all functional text. It is a systematic, highly legible sans-serif that ensures accessibility for the community's elderly members. For administrative and data-heavy sections (like Office Bearer tables), stick strictly to Inter to maintain a professional, organized appearance. Use `label-caps` for small metadata or section eyebrows to introduce a structured, modern feel.

## Layout & Spacing
The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

The philosophy centers on "The Golden Margin"—generous outer padding that frames the content like an art gallery. 
- **Vertical Rhythm:** Use increments of 8px. Hero sections should utilize large padding (120px+) to create a sense of grandeur.
- **Adaptive Reflow:** On mobile, side-by-side elements (like Festival Cards) should stack vertically. The historical timeline transitions from a centered, alternating layout on desktop to a left-aligned "trail" on mobile for better thumb-scrolling.
- **Section Breaks:** Use subtle Antique Gold horizontal rules or white-space-heavy transitions rather than harsh background color blocks.

## Elevation & Depth
In alignment with the "Traditional Editorial" style, this design system rejects heavy shadows. 
- **Tonal Layers:** Depth is created using color shifts (e.g., a card slightly lighter than the background Ivory).
- **Low-Contrast Outlines:** Use 1px borders in Muted Antique Gold or a 10% opacity version of the Primary Maroon to define cards and containers.
- **Layering:** Images may overlap slightly with text blocks or decorative patterns to create a physical "scrapbook" or "journal" depth without needing drop shadows.
- **Interactive States:** Buttons and interactive cards should use a slight lift (very soft, diffused shadow: 4px blur, 4% opacity) only upon hover to indicate tactility.

## Shapes
The shape language is **structured and refined**. We use "Soft" roundedness (4px) for most UI components (buttons, input fields, cards) to maintain a professional look that isn't overly "bubbly" or casual. 

However, for specific cultural imagery (like the Hero overlays or Gallery frames), use an arched top (radius: 100px 100px 0 0) to mimic the traditional *Thakur Dalan* (temple courtyard) architecture. This specific shape should be reserved for containers holding photographs of the deity or the temple.

## Components
- **Navbar:** A sticky top bar with a centered logo. Desktop uses `label-caps` for links. Mobile uses a simple hamburger menu that opens a full-screen Ivory overlay.
- **Hero Sections:** Large, high-resolution imagery with a Primary Maroon overlay at 20% opacity. Text is centered using `display` typography.
- **Festival Cards:** Ivory background with a 1px Antique Gold border. Features a prominent date badge in Terracotta.
- **Historical Timeline:** A vertical line in Antique Gold. Desktop events alternate left/right. Mobile events are left-aligned with a vertical "thread" on the far left.
- **Office Bearer Tables:** Clean, no-border rows. Use a light Terracotta tint for the header row background. Text is strictly `body-sm`.
- **Donation Forms:** Floating labels with 1px Deep Brown borders. The "Donate" button is Primary Maroon with Ivory text, taking full width on mobile.
- **Gallery:** A masonry grid with 16px gaps. Images use the "Soft" roundedness and a subtle Antique Gold inner stroke.
- **Footer:** Deep Maroon background with Ivory text. Includes three distinct columns: Contact/Assistance, Quick Links, and Social/Cultural symbols.