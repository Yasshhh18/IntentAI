---
name: Premium Enterprise Intelligence
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f4940'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6f7a70'
  outline-variant: '#bec9be'
  surface-tint: '#0b6d3c'
  primary: '#004d28'
  on-primary: '#ffffff'
  primary-container: '#006838'
  on-primary-container: '#8ee4a8'
  inverse-primary: '#83d99d'
  secondary: '#a63b00'
  on-secondary: '#ffffff'
  secondary-container: '#fc6c29'
  on-secondary-container: '#5a1c00'
  tertiary: '#044e2b'
  on-tertiary: '#ffffff'
  tertiary-container: '#266641'
  on-tertiary-container: '#9fe1b3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9ef5b8'
  primary-fixed-dim: '#83d99d'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#00522b'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#aef2c2'
  tertiary-fixed-dim: '#93d5a7'
  on-tertiary-fixed: '#00210f'
  on-tertiary-fixed-variant: '#0b522f'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-uppercase:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base_unit: 4px
  gutter: 16px
  margin-page: 24px
  container-padding: 20px
  card-gap: 12px
---

## Brand & Style

The design system is engineered to bridge the gap between traditional banking stability and cutting-edge financial technology. It targets high-level decision-makers and underwriters who require a high-density "Cockpit" experience that balances trust with analytical power.

The aesthetic follows a **Corporate Modern** style with **Glassmorphic** nuances. It prioritizes information density and structural clarity. The visual language uses layered surfaces and subtle translucency to manage complex data hierarchies without overwhelming the user. The emotional response is one of precision, authority, and "intelligence-at-a-glance."

## Colors

The palette is anchored by the primary brand green, utilized for core actions and positive status indicators. The secondary orange is reserved exclusively for high-intent signals, alerts, or cautionary statuses to ensure it retains its psychological impact.

The system relies heavily on a sophisticated range of "Slate" grays to define UI architecture. Surfaces utilize a mix of solid whites and semi-transparent layers (glassmorphism) with backdrop blurs to create a sense of depth and modularity. This layering helps differentiate the "Simulation Cockpit" zones from the navigation and global controls.

## Typography

This design system uses **Inter** exclusively to ensure maximum legibility at the high densities required for financial modeling. 

The hierarchy is built on font weight rather than dramatic size shifts. Semi-bold and Bold weights are used for headlines and primary data points (like credit scores or currency values). For tabular data and technical readouts, we utilize tabular lining figures (`tnum`) to ensure columns of numbers align perfectly for easy scanning.

## Layout & Spacing

The layout follows a **Simulation Cockpit** model—a high-density, modular grid. It uses a 12-column system for the main content area, allowing for flexible widgets like radar charts and risk controls to sit side-by-side.

- **Desktop:** Sidebar navigation (260px fixed) with a fluid multi-pane content area. Content is grouped into "Control Zones" and "Output Zones."
- **Tablet:** Modules stack into a single column but maintain horizontal internal layouts for gauges and charts.
- **Micro-spacing:** A strict 4px baseline grid ensures that even in dense views, the optical balance remains professional and uncluttered.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Multi-layered Shadows**. 

1.  **Level 0 (Background):** Solid off-white (#F8FAFC).
2.  **Level 1 (Main Modules):** White surfaces with a 0.5px border and a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)).
3.  **Level 2 (Interactive/Hover):** Slightly elevated with a 1px border and more defined shadow to indicate clickability.
4.  **Glass Layers:** Used for overlays and sidebar filters to maintain environmental context while focusing on the task.

Shadows should be tinted with the surface color (e.g., using a deep green-tinted shadow for brand-colored cards) to maintain a premium, integrated look.

## Shapes

The shape language is "Soft-Technical." We use a standard 8px radius for most containers and 12px for larger parent modules to create a nested, organized feel. 

Borders are critical in this design system: use a consistent 0.5px width for inactive states and 1px for active or focus states. This "hairline" precision reflects the accuracy of the underlying AI data.

## Components

- **Status Badges:** Use rounded-pill shapes. "Disciplined Borrower" uses a primary green background with 10% opacity and solid green text. "Caution" uses the secondary orange similarly.
- **Action Buttons:** Primary buttons are solid brand green with white text. Secondary buttons use a ghost style with a 1px border and subtle hover state elevation.
- **Gauge Charts:** Use a clean, 180-degree semi-circle with a needle or progress fill. The background track should be a light neutral gray.
- **Radar Charts:** Central to the "Alternative Risk Profile." Use a 1px stroke for the web and a 2px stroke for the data shape. Use the primary green for the fill (at 15% opacity) to signify health.
- **Input Fields:** High-density design. Use 32px height for standard inputs with labels placed inside the border or directly above in `label-uppercase` style.
- **Cards:** Financial profile cards (e.g., Merchant Profiles) should use a subtle gradient of the primary color to distinguish them from standard informational widgets.