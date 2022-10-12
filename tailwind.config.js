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
      xssm: ['11px', '14px'],
      xsm: ['12px', '15px'],
      xxsm: ['13px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '20px'],
      lg: ['18px', '23px'],
      llg: ['21px', '27px'],
      lgg: ['22px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['28px', '35px']
    },
    letterSpacing: {
      sl: '.019em',
      wider: '.05em',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      lblack: '#3E3E3E',
      red: '#FF0000',
      lred: '#FAF3F3',
      grey: '#D5D5D5',
      grey1: 'rgba(0, 0, 0, 0.4)',
      grey2: 'rgba(196, 196, 196, 0.3)',
      grey3: '#FFFFFF1A',
      grey4: '#959595',
      grey5: '#A5A5A5',
      grey6: '#F4F4F4',
      grey7: '#E6E6E6',
      grey8: '#A6A6A6',
      light: '#F8F8F8',
      bl: '#26282B',
      bl2: '#221F23',
      bl3: 'rgba(0, 0, 0, 0.9)',
      lwhite: 'rgba(255, 255, 255, 0.1)',
      lwhite2: '#FEFEFE',
      lwhite3: '#CECECE',
      lwhite4: '#c4c4c414',
      lwhite5: 'rgba(255, 255, 255, 0.8)',
      lwhite6: '#FAF9F9',
      lwhite7: '#f8f7f7',
      dgrey: '#606060',
      dgrey2: '#BBBBBB',
      bord: 'rgba(196, 196, 196, 0.7)',
      bord1: '#EDEDED',
      bord2: '#D7D7D7',
      tx: '#666666',
      tx1: '#696969',
      green: '#0BC15C',
      blue: '#85A1F2'
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
      '2xll': '1550px',
      '3xl': '1720px',
    },
    margin: {
      'auto': 'auto',
      '0': '0',
      '2': '2',
      '4px': '4px',
      '5px': '5px',
      '6px': '6px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '12px': '12px',
      '15px': '15px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '25px': '25px',
      '30px': '30px',
      '34px': '34px',
      '38px': '38px',
      '40px': '40px',
      '41px': '41px',
      '46px': '46px',
      '50px': '50px',
      '52px': '52px',
      '76px': '76px',
      '80px': '80px'
    },
    padding: {
      '0': '0',
      '5px': '5px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '11px': '11px',
      '12px': '12px',
      '13px': '13px',
      '14px': '14px',
      '15px': '15px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '24px': '24px',
      '25px': '25px',
      '26px': '26px',
      '27px': '27px',
      '30px': '30px',
      '34px': '34px',
      '35px': '35px',
      '38px': '38px',
      '40px': '40px',
      '48px': '48px',
      '84px': '84px',
      '120px': '120px'
    },
    borderRadius: {
      'none': '0',
      'small': '4px',
      '6px': '6px',
      'medium': '8px',
      '15px': '15px',
      'large': '36px',
      '100px': '100px',
      '1000px': '1000px',
      '50%': '50%'
    },
    width: {
      '0': '0',
      'auto': 'auto',
      '8px': '8px',
      '11px': '11px',
      '16px': '16px',
      '24px': '24px',
      '32px': '32px',
      '36px': '36px',
      '40px': '40px',
      '52px': '52px',
      '56px': '56px',
      '67px': '67px',
      '68px': '68px',
      '84px': '84px',
      '120px': '120px',
      '134px': '134px',
      '188px': '188px',
      '256px': '256px',
      '390px': '390px',
      '400px': '400px',
      '610px': '610px',
      '45%': '45%',
      '60%': '60%',
      '70%': '70%',
      '100%': '100%',
      'maxContent': 'max-content',
      'calc34': 'calc(100% - 34px)',
      'calc104': 'calc(100% - 104px)'
    },
    height: {
      '0': '0',
      '1.6px': '1.6px',
      '11px': '11px',
      '16px': '16px',
      '24px': '24px',
      '30px': '30px',
      '34px': '34px',
      '36px': '36px',
      '40px': '40px',
      '50px': '50px',
      '85px': '85px',
      '90px': '90px',
      '101px': '101px',
      '155px': '155px',
      '180px': '180px',
      '420px': '420px',
      '600px': '600px',
      '670px': '670px',
      '100%': '100%',
      '100vh': '100vh',
      'hcalc': 'calc(100vh - 310px)',
      'hcalc34': 'calc(100% - 34px)'
    },
    minWidth: {
      '30px': '30px',
      '65px': '65px'
    },
    maxWidth: {
      '100%': '100%'
    },
    maxHeight: {
      '184px': '184px',
      '190px': '190px',
      '212px': '212px',
      '294px': '294px',
      '700px': '700px',
      '960px': '960px'
    },
    inset: {
      '0': '0',
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
      '9px': '9px',
      '10px': '10px',
      '15px': '15px',
      '17px': '17px',
      '20px': '20px',
      '24px': '24px',
      '53px': '53px',
      '60px': '60px',
      '90px': '90px',
      '3%': '3%',
      '40%': '40%',
      '50%': '50%'
    },
    boxShadow: {
      'shadow1': '0px 4px 4px rgba(217, 7, 9, 0.23)',
      'shadow2': '0px 3px 7px rgba(217, 7, 9, 0.2)',
      'shadow3': '0px 2px 10px rgba(0, 0, 0, 0.02)',
      'shadow4': '0px 4px 30px rgba(0, 0, 0, 0.1)',
      'shadow5': '0px 2px 10px rgba(0, 0, 0, 0.05)',
      'shadow6': '-2px 0px 3px rgba(0, 0, 0, 0.1)',
      'shadow7': '0px 15px 40px rgba(0, 0, 0, 0.15)',
      'shadow8': '0px 0px 10px rgba(0, 0, 0, 0.1)',
      'shadow9': '0px 4px 4px rgba(11, 193, 92, 0.2)',
      'shadow10': '0px 4px 4px rgba(217, 7, 9, 0.1)'
    }
  },
  plugins: [
   
  ],
}
