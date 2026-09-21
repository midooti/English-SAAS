import type { Config } from 'tailwindcss';

/**
 * Thème Prep-Anglais — direction éditoriale académique.
 * - brand : bleu marine profond (identité primaire)
 * - accent : bleu sauvegardé, discret (rare, réservé aux liens/points forts)
 * - papiers : blanc / écru / charbon
 * - Séries editoriale : font-serif (Lora) pour les grands titres.
 */
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6fa',
          100: '#e8ecf3',
          200: '#ccd6e3',
          300: '#a6b7ca',
          400: '#7b92ab',
          500: '#5b748d',
          600: '#455a72',
          700: '#36485c',
          800: '#293848',
          900: '#1d2936',
          950: '#101820',
        },
        accent: {
          50: '#eef4fa',
          100: '#dbe7f3',
          200: '#b7cfe7',
          300: '#8ab2d6',
          400: '#5f92c2',
          500: '#4677a9',
          600: '#315f8c',
          700: '#294c6f',
          800: '#233b56',
          900: '#182b40',
          950: '#0e1c2e',
        },
        paper: {
          DEFAULT: '#fbf9f4',
          warm: '#f6f3ec',
          line: '#e7e2d8',
        },
        ink: {
          DEFAULT: '#1d2936',
          soft: '#55657a',
          faint: '#8593a6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(29 41 54 / 0.04), 0 8px 24px -16px rgb(29 41 54 / 0.12)',
        lift: '0 2px 4px rgb(29 41 54 / 0.05), 0 18px 40px -24px rgb(29 41 54 / 0.28)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;