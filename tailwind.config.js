/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        'takumi-red': '#E31837',
                        'takumi-red-dark': '#B91430',
                        'industrial-slate': '#1E293B',
                        'industrial-dark': '#0F172A'
                },
                fontFamily: {
                        'manrope': ['Manrope', 'sans-serif'],
                        'inter': ['Inter', 'sans-serif'],
                        'noto-jp': ['"Noto Sans JP"', 'sans-serif']
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        'fade-in-up': {
                                '0%': { opacity: '0', transform: 'translateY(30px)' },
                                '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        'fade-in': {
                                '0%': { opacity: '0' },
                                '100%': { opacity: '1' }
                        },
                        'slide-in-right': {
                                '0%': { opacity: '0', transform: 'translateX(50px)' },
                                '100%': { opacity: '1', transform: 'translateX(0)' }
                        },
                        'scale-in': {
                                '0%': { opacity: '0', transform: 'scale(0.95)' },
                                '100%': { opacity: '1', transform: 'scale(1)' }
                        },
                        'float': {
                                '0%, 100%': { transform: 'translateY(0)' },
                                '50%': { transform: 'translateY(-10px)' }
                        },
                        'pulse-slow': {
                                '0%, 100%': { opacity: '1' },
                                '50%': { opacity: '0.7' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                        'fade-in': 'fade-in 0.6s ease-out forwards',
                        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
                        'scale-in': 'scale-in 0.5s ease-out forwards',
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse-slow 2s ease-in-out infinite'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
