/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — Deep Green (trust, identity, success)
        "primary": "#0F6A4A",
        "on-primary": "#ffffff",
        "primary-container": "#D1FAE5",
        "on-primary-container": "#064E3B",

        // AI Accent — Premium Orange (highlights, active, AI, CTAs only)
        "accent": "#F28C28",
        "on-accent": "#ffffff",
        "accent-container": "#FED7AA",
        "on-accent-container": "#7C2D12",

        // Neutral Secondary
        "secondary": "#475569",
        "on-secondary": "#ffffff",
        "secondary-container": "#E2E8F0",
        "on-secondary-container": "#1E293B",

        // Gold
        "tertiary": "#B45309",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#FEF3C7",
        "on-tertiary-container": "#78350F",

        // Backgrounds
        "background": "#F8FAFC",
        "on-background": "#0F172A",

        // Surfaces
        "surface": "#FFFFFF",
        "on-surface": "#0F172A",
        "surface-dim": "#F1F5F9",
        "surface-variant": "#F8FAFC",
        "on-surface-variant": "#64748B",

        // Surface containers
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F8FAFC",
        "surface-container": "#F1F5F9",
        "surface-container-high": "#E2E8F0",
        "surface-container-highest": "#CBD5E1",

        // Borders
        "outline": "#CBD5E1",
        "outline-variant": "#E2E8F0",

        // Status
        "error": "#DC2626",
        "on-error": "#ffffff",
        "error-container": "#FEE2E2",
        "on-error-container": "#991B1B",

        // Fixed references
        "primary-fixed": "#0F6A4A",
        "accent-fixed": "#F28C28",
        "surface-bright": "#FFFFFF",
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 25px -5px rgba(0,0,0,0.1), 0 4px 10px -5px rgba(0,0,0,0.05)',
        'accent-glow': '0 0 20px rgba(242, 140, 40, 0.25)',
        'primary-glow': '0 0 20px rgba(15, 106, 74, 0.2)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 8px rgba(242, 140, 40, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(242, 140, 40, 0.45)' },
        },
      },
    },
  },
  plugins: [],
}
