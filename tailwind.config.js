/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif']
    },
    fontSize: {
      xsm: ['12px', '15px'],
      sm: ['14px', '18px'],
      base: ['16px', '20px'],
      lg: ['18px', '23px'],
      xl: ['24px', '32px'],
    },
    letterSpacing: {
      sl: '.019em',
      wider: '.05em',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      red: '#FF0000',
      lred: '#FAF3F3',
      grey: '#D5D5D5',
      grey1: 'rgba(0, 0, 0, 0.4)',
      grey2: 'rgba(196, 196, 196, 0.3)',
      grey3: '#FFFFFF1A',
      grey4: '#959595',
      light: '#F8F8F8',
      bl: '#26282B',
      bl2: '#221F23',
      bl3: 'rgba(0, 0, 0, 0.9)',
      lwhite: 'rgba(255, 255, 255, 0.1)',
      lwhite2: '#FEFEFE',
      lwhite3: '#CECECE'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '207px',
      },
    },
    screens: {
      'ssm': '500px',
      'sm': '640px',
      'md': '768px',
      '2md': '991px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1400px',
      '2xl': '1536px',
      '3xl': '1720px',
    },
    margin: {
      'auto': 'auto',
      '0': '0',
      '4px': '4px',
      '6px': '6px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '15px': '15px',
      '20px': '20px',
      '30px': '30px',
      '38px': '38px',
      '40px': '40px',
      '41px': '41px',
      '46px': '46px',
      '50px': '50px',
      '52px': '52px',
      '76px': '76px',
    },
    padding: {
      '9px': '9px',
      '10px': '10px',
      '14px': '14px',
      '15px': '15px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '27px': '27px',
      '30px': '30px',
      '34px': '34px',
      '48px': '48px',
      '84px': '84px',
      '120px': '120px'
    },
    borderRadius: {
      'none': '0',
      'small': '4px',
      'medium': '8px',
      'large': '36px',
    },
    width: {
      '16px': '16px',
      '36px': '36px',
      '188px': '188px',
      '256px': '256px',
      '390px': '390px',
      '610px': '610px',
      '60%': '60%',
      '100%': '100%',
      'maxContent': 'max-content'
    },
    height: {
      '1.6px': '1.6px',
      '34px': '34px',
      '36px': '36px',
      '40px': '40px',
      '50px': '50px'
    },
    minWidth: {
      '30px': '30px',
    },
    maxHeight: {
      '700px': '700px',
      '960px': '960px'
    },
    inset: {
      '1px': '1px',
      '9px': '9px',
      '50%': '50%'
    },
    boxShadow: {
      'shadow1': '0px 4px 4px rgba(217, 7, 9, 0.23)',
      'shadow2': '0px 3px 7px rgba(217, 7, 9, 0.2)',
      'shadow3': '0px 2px 10px rgba(0, 0, 0, 0.02)',
      'shadow4': '0px 4px 30px rgba(0, 0, 0, 0.1)'
    }
  },
  plugins: [
   
  ],
}
