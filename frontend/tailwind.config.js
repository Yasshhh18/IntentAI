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
        // Linear/Vercel inspired dark theme
        "background": "#09090b", // zinc-950
        "on-background": "#fafafa", // zinc-50

        // Surfaces
        "surface": "#121214", 
        "on-surface": "#fafafa",
        "surface-dim": "#18181b",
        "surface-variant": "#27272a", // zinc-800
        "on-surface-variant": "#a1a1aa", // zinc-400

        // Surface containers
        "surface-container-lowest": "#000000",
        "surface-container-low": "#09090b",
        "surface-container": "#121214",
        "surface-container-high": "#18181b",
        "surface-container-highest": "#27272a",

        // Borders
        "outline": "#27272a",
        "outline-variant": "#3f3f46",

        // Brand — Deep Emerald (trust, success)
        "primary": "#10b981", // emerald-500
        "on-primary": "#022c22", // emerald-950
        "primary-container": "#064e3b", // emerald-900
        "on-primary-container": "#34d399", // emerald-400

        // AI Accent — Premium Amber/Orange (highlights, AI, CTAs)
        "accent": "#f59e0b", // amber-500
        "on-accent": "#451a03", // amber-950
        "accent-container": "#78350f", // amber-900
        "on-accent-container": "#fbbf24", // amber-400

        // Neutral Secondary
        "secondary": "#71717a", // zinc-500
        "on-secondary": "#fafafa",
        "secondary-container": "#27272a",
        "on-secondary-container": "#e4e4e7",

        // Tertiary / Warning
        "tertiary": "#f97316", // orange-500
        "on-tertiary": "#431407", // orange-950
        "tertiary-container": "#7c2d12", // orange-900
        "on-tertiary-container": "#fdba74", // orange-300

        // Status
        "error": "#ef4444", // red-500
        "on-error": "#450a0a", // red-950
        "error-container": "#7f1d1d", // red-900
        "on-error-container": "#fca5a5", // red-300

        // Fixed references
        "primary-fixed": "#10b981",
        "accent-fixed": "#f59e0b",
        "surface-bright": "#27272a",
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.05), 0 1px 3px 0 rgba(0,0,0,0.4), 0 1px 2px -1px rgba(0,0,0,0.3)',
        'card-hover': '0 0 0 1px rgba(255,255,255,0.1), 0 8px 25px -5px rgba(0,0,0,0.5), 0 4px 10px -5px rgba(0,0,0,0.4)',
        'accent-glow': '0 0 24px rgba(245, 158, 11, 0.3)',
        'primary-glow': '0 0 24px rgba(16, 185, 129, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
        'glass-gradient-hover': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 12px rgba(245, 158, 11, 0.15)' },
          '100%': { boxShadow: '0 0 32px rgba(245, 158, 11, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
