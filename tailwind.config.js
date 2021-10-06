/*
Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.
*/

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#FFFFFF',
        accent: '#F2433B',
        base: {
          100: '#121315',
          200: '#161719',
          300: '#23262B',
          400: '#353B45',
          500: '#4E5867',
          600: '#677486',
          700: '#808FA3',
          800: '#A2B1C5',
          900: '#D9E9FF',
          1000:'#F5F6F8'
        },
        gray: {
          100:  '#1D2428',
          200:  '#273238',
          300:  '#344249',
          400:  '#4A5B64',
          500:  '#70818A',
          600:  '#9BACB4',
          700:  '#D5DFE3',
          800:  '#EFF2F5',
          900:  '#F3F7F9',
          1000: '#FAFBFC',
        },
        altGray: {
          100: '#151517',
          200: '#1D1D20',
          300: '#28282E',
          400: '#3C3C48',
          500: '#555569',
          600: '#7A7A96',
          700: '#A9A9CA',
          800: '#D8D8F5',
          900: '#EBEBFF',
        },
        red: {
          100: '#421816',
          200: '#611E1A',
          300: '#8D2722',
          400: '#BF332C',
          500: '#F2433B',
          600: '#FE5F56',
          700: '#FE8079',
          800: '#FFA49F',
        },
        oldOrange: {
          100: '#562417',
          200: '#873723',
          300: '#BA4B2F',
          400: '#E05D3C',
          500: '#F96D4A',
          600: '#FE7A55',
          700: '#FF8C69',
          800: '#FFA587',
          900: '#FFC7B4',
        },
        orange: {
          100: '#421D00',
          200: '#612A00',
          300: '#803801',
          400: '#994404',
          500: '#B35209',
          600: '#CC6312',
          700: '#E67722',
          800: '#F99243',
          900: '#FFB175',
        },
        yellow: {
          100: '#7B5724',
          200: '#9B6B27',
          300: '#B87F2C',
          400: '#D08E32',
          500: '#E49D3A',
          600: '#F4AC49',
          700: '#FFBD61',
          800: '#FFCB83',
          900: '#FFDFB2',
        },
        // green: {
        //   100: '#062B0A',
        //   200: '#09410F',
        //   300: '#135C1C',
        //   400: '#287B32',
        //   500: '#41994B',
        //   600: '#5CB767',
        //   700: '#78D283',
        //   800: '#97EBA1',
        //   900: '#B6FBBE',
        // },
        green: {
          100: '#082B22',
          200: '#063F31',
          300: '#02664D',
          400: '#008F6C',
          500: '#00B287',
          600: '#0CD0A0',
          700: '#2FEBBE',
          800: '#67FAD7',
          900: '#A6FFEA',
        },
        teal: {
          100: '#08332F',
          200: '#14665E',
          300: '#2E998E',
          400: '#43C0B4',
          500: '#65E1D5',
          600: '#8CFFF4',
          700: '#B3FFF7',
        },
        // blue: {
        //   100: '#0A2A45',
        //   200: '#122639',
        //   300: '#1673C4',
        //   400: '#1E8DEF',
        //   500: '#2E9FFF',
        //   600: '#58B1FF',
        //   700: '#7EC3FF',
        //   800: '#ADD9FF',
        //   900: '#CCE7FF',
        // },
        blue: {
          100: '#02293C',
          200: '#01567A',
          300: '#027DAD',
          400: '#00A1DB',
          500: '#00BFFF',
          600: '#1CC6FF',
          700: '#47CDFF',
          800: '#73D7FF',
          900: '#A4E5FF',
        },
        indigo: {
          100: '#140D40',
          200: '#1D115E',
          300: '#26177A',
          400: '#322396',
          500: '#4736B4',
          600: '#6A5ACD',
          700: '#8E81DF',
          800: '#B1A7EF',
          900: '#D8D2FF',
        },
        // indigo: {
        //   100: '#0B0B37',
        //   200: '#161666',
        //   300: '#282C9C',
        //   400: '#4449D0',
        //   500: '#5D69E9',
        //   600: '#808AFF',
        //   700: '#ABB2FF',
        //   800: '#E2D9FF',
        // },
        purple: {
          100: '#44337a',
          200: '#553c9a',
          300: '#48277A',
          400: '#6233A8',
          500: '#7B45CC',
          600: '#A56EF7',
          700: '#B584FF',
          800: '#C59EFF',
          900: '#faf5ff',
        },
        syntax: {
          bg:         'hsl(280, 5%, 15%)',
          border:     'hsl(280, 5%, 50%)',
          subtle:     'hsl(280, 5%, 80%)',
          text:       'hsl(280, 9%, 90%)',
          highlight:  'hsl(280, 9%, 97%)',
          red:        '#CF5D59',
          orange:     '#FC975C',
          yellow:     '#F8D377',
          green:      '#6AE16A',
          blue:       '#3EDCF4',
          purple:     '#9D94EB',
          magenta:    '#FE5D79',
        },
      },
      backgroundColor: theme => theme('colors'),
      backgroundPosition: {
        'top-center': 'top center',
      },
      borderColor: theme => theme('colors'),
      borderWidth: {
        DEFAULT: '1px',
        0:         '0',
        1:       '1px',
        2:       '2px',
        3:       '3px',
        4:       '4px',
        6:       '6px',
      },
      borderRadius: {
        none:          '0',
        sm:     '0.125rem',
        DEFAULT:  '0.3rem',
        md:     '0.375rem',
        lg:       '0.5rem',
        full:     '9999px',
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      flex: {
        1:  '1',
        3:  '3',
      },
      fontSize: {
        xxs:       '0.6rem',
        xs:      '0.875rem',
        sm:          '1rem',
        base:    '1.125rem',
        lg:       '1.25rem',
        xl:       '1.65rem',
        '2xl':   '1.875rem',
        '3xl':    '2.25rem',
        '4xl':       '3rem',
        '5xl':       '4rem',
        '6xl':       '5rem',
        '7xl':     '5.5rem',
        '8xl':     '6.5rem',
        '9xl':       '7rem',
        '10xl':      '8rem',
        '40vw':      '40vw',
        '50vw':      '50vw',
        '60vw':      '60vw',
      },
      height: {
        auto:         'auto',
        px:            '1px',
        0:            '0rem',
        1:         '0.25rem',
        2:          '0.5rem',
        3:         '0.75rem',
        4:            '1rem',
        6:          '1.5rem',
        7:         '1.75rem',
        8:            '2rem',
        10:         '2.5rem',
        12:           '3rem',
        14:         '3.5rem',
        15:        '3.75rem',
        16:           '4rem',
        24:           '6rem',
        32:           '8rem',
        34:         '8.5rem',
        48:          '12rem',
        60:          '15rem',
        64:          '16rem',
        68:          '17rem',
        72:          '18rem',
        76:          '19rem',
        100:         '25rem',
        112:         '28rem',
        '1/12':    '8.3333%',
        '1/6':    '16.6667%',
        '1/5':         '20%',
        '1/4':         '25%',
        '3/10':        '30%',
        '1/3':    '33.3333%',
        '2/5':         '40%',
        '5/12':   '41.6667%',
        '1/2':         '50%',
        '7/12':   '58.3333%',
        '3/5':         '60%',
        '2/3':    '66.6667%',
        '7/10':        '70%',
        '3/4':         '75%',
        '4/5':         '80%',
        '5/6':    '83.3333%',
        '9/10':        '90%',
        full:         '100%',
        '50v':        '50vh',
        '60v':        '60vh',
        '70v':        '70vh',
        screen:      '100vh',
      },
      minWidth: {
        0:           '0',
        240:     '60rem',
        '9/10':    '90%',
        '25vw':   '25vw',
        '50vw':   '50vw',
        full:     '100%',
      },
      opacity: {
        0:       '0',
        10:    '0.1',
        15:   '0.15',
        25:   '0.25',
        45:   '0.45',
        50:    '0.5',
        75:   '0.75',
        90:    '0.9',
        100:     '1',
      },
      width: {
        auto:         'auto',
        px:            '1px',
        0:               '0',
        1:         '0.25rem',
        2:          '0.5rem',
        3:         '0.75rem',
        4:            '1rem',
        5:         '1.25rem',
        6:          '1.5rem',
        7:         '1.75rem',
        8:            '2rem',
        9:         '2.25rem',
        10:         '2.5rem',
        11:        '2.75rem',
        12:           '3rem',
        13:        '3.25rem',
        14:         '3.5rem',
        15:        '3.75rem',
        16:           '4rem',
        18:         '4.5rem',
        19:        '4.75rem',
        20:           '5rem',
        24:           '6rem',
        32:           '8rem',
        34:         '8.5rem',
        36:           '9rem',
        40:          '10rem',
        44:          '11rem',
        48:          '12rem',
        56:          '14rem',
        64:          '16rem',
        68:          '17rem',
        '1/12':  '8.333333%',
        '1/6':  '16.666667%',
        '1/5':         '20%',
        '1/4':         '25%',
        '3/10':        '30%',
        '1/3': ' 33.333333%',
        '2/5':         '40%',
        '5/12': '41.666667%',
        '1/2':         '50%',
        '7/12': '58.333333%',
        '3/5':         '60%',
        '2/3':  '66.666667%',
        '3/4':         '75%',
        '7/10':        '70%',
        '4/5':         '80%',
        '5/6':  '83.333333%',
        '9/10':        '90%',
        '19/20':        '90%',
        full:         '100%',
        screen:      '100vw',
      },
      scale: {
        0:       '0',
        50:     '.5',
        75:    '.75',
        90:     '.9',
        95:    '.95',
        100:     '1',
        105:  '1.05',
        110:   '1.1',
        125:  '1.25',
        150:   '1.5',
      },
      transitionDuration: theme => theme('timing'),
      transitionDelay: theme => theme('timing'),
      transitionTimingFunction: {
        'ease-linear':	'linear',
        'ease-in': 'ease-in',
        'ease-out':	'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      textOpacity: {
        10:    '0.1',
        20:    '0.2',
        40:    '0.4',
        50:    '0.5',
        65:   '0.65',
        70:    '0.7',
        75:   '0.75',
        80:    '0.8',
        85:   '0.85',
        90:    '0.9',
        95:   '0.95',
      },
      inset: {
        86:    '21.5rem',
        104:     '26rem',
        124:     '31rem',
      },
    },
    fill: theme => theme('colors'),
    fontFamily: {
      sans: [
        'TTNorms2',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      title: [
        'TTNorms2',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      default: [
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Droid Sans',
        'sans-serif',
      ],
      serif: [
        'Lora',
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      mono: [
        'Source Code Pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Ubuntu Mono',
        'monospace',
      ],
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none:       1,
      tighter:  1.15,
      tight:    1.25,
      normal:   1.45,
      loose:     1.7,
      looser:      2,
    },
    maxWidth: theme => Object.assign({
      44:      '11rem',
      50:    '12.5rem',
      60:      '15rem',
      80:      '20rem',
      120:     '30rem',
      160:     '40rem',
      200:     '50rem',
      240:     '60rem',
      250:   '62.5rem',
      300:     '75rem',
      320:     '80rem',
      360:     '90rem',
      400:    '100rem',
      500:    '125rem',
      '1/2':     '50%',
      '3/5':     '60%',
      '3/4':     '75%',
      '4/5':     '80%',
      '9/10':    '90%',
      full:     '100%',
    }, theme('spacing')),
    maxHeight: theme => Object.assign({
      44:      '11rem',
      50:    '12.5rem',
      80:      '20rem',
      120:     '30rem',
      160:     '40rem',
      180:     '45rem',
      200:     '50rem',
      220:     '55rem',
      240:     '60rem',
      250:   '62.5rem',
      300:     '75rem',
      320:     '80rem',
      360:     '90rem',
      400:    '100rem',
      500:    '125rem',
      '1/2':     '50%',
      '3/5':     '60%',
      '3/4':     '75%',
      '4/5':     '80%',
      '9/10':    '90%',
      full:     '100%',
    }, theme('spacing')),
    minWidth: theme => theme('spacing'),
    minHeight: theme => theme('spacing'),
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      0:  '0',
      1:  '1',
      2:  '2',
    },
    textColor: theme => theme('colors'),
    zIndex: {
      auto: 'auto',
      min:    '-1',
      0:         0,
      1:         1,
      2:         2,
      5:         5,
      10:       10,
      20:       20,
      30:       30,
      40:       40,
      50:       50,
      999:     999,
      9999:   9999,
    },
    gap: theme => theme('spacing'),
    rowGap: {},
    columnGap: {},
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
    },
    gridColumnStart: {
      auto: 'auto',
      1:       '1',
      2:       '2',
      3:       '3',
      4:       '4',
      5:       '5',
      6:       '6',
      7:       '7',
      8:       '8',
      9:       '9',
      10:     '10',
      11:     '11',
      12:     '12',
      13:     '13',
    },
    gridColumnEnd: {
      auto: 'auto',
      1:       '1',
      2:       '2',
      3:       '3',
      4:       '4',
      5:       '5',
      6:       '6',
      7:       '7',
      8:       '8',
      9:       '9',
      10:     '10',
      11:     '11',
      12:     '12',
      13:     '13',
    },
    gridTemplateRows: {},
    gridRow: {},
    gridRowStart: {},
    gridRowEnd: {},
    spacing: {
      px:        '1px',
      0:           '0',
      0.5:  '0.125rem',
      1:     '0.25rem',
      2:      '0.5rem',
      3:     '0.75rem',
      4:        '1rem',
      5:     '1.25rem',
      6:      '1.5rem',
      7:     '1.75rem',
      8:        '2rem',
      9:     '2.25rem',
      10:     '2.5rem',
      11:    '2.75rem',
      12:       '3rem',
      13:    '3.25rem',
      14:     '3.5rem',
      15:    '3.75rem',
      16:       '4rem',
      18:     '4.5rem',
      20:       '5rem',
      22:     '5.5rem',
      24:       '6rem',
      26:     '6.5rem',
      28:       '7rem',
      30:     '7.5rem',
      32:       '8rem',
      36:       '9rem',
      40:      '10rem',
      44:      '11rem',
      48:      '12rem',
      50:    '12.5rem',
      52:      '13rem',
      56:      '14rem',
      60:      '15rem',
      62:    '15.5rem',
      64:      '16rem',
      68:      '17rem',
      72:      '18rem',
      76:      '19rem',
      80:      '20rem',
      92:      '23rem',
      100:     '25rem',
      140:     '35rem',
      160:     '40rem',
      180:     '45rem',
      200:     '50rem',
      240:     '60rem',
      250:   '62.5rem',
      300:     '75rem',
      320:     '80rem',
      360:     '90rem',
      380:     '95rem',
      400:    '100rem',
      420:    '105rem',
      500:    '125rem',
      '25vw':   '25vw',
      '50vw':   '50vw',
      screen:  '100vw',
    },
    timing: {
      50:      '50ms',
      100:    '100ms',
      150:    '150ms',
      200:    '200ms',
      250:    '250ms',
      300:    '300ms',
      350:    '350ms',
      400:    '400ms',
      450:    '450ms',
      500:    '500ms',
      550:    '550ms',
      600:    '600ms',
      1000:  '1000ms',
    },
    screens: {
      xs:   '350px',
      sm:   '501px',
      md:   '650px',
      lg:   '900px',
      xl:  '1200px',
      xxl: '1600px',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'active', 'group-hover', 'group-focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    backgroundImage: ['responsive', 'hover', 'focus'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive', 'last', 'hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus' ],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive', 'hover', 'focus'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'focus'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus', 'active'],
    overflow: ['responsive'],
    padding: ['responsive', 'first', 'last', 'hover', 'focus'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
    textTransform: ['responsive'],
    transitionTimingFunction: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
    whitespace: ['responsive'],
    width: ['responsive', 'hover'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    columnGap: ['responsive'],
    rowGap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    translate: ['responsive', 'hover', 'focus'],
  },
  // purge: ['./src/**/*.html', './src/**/*.jsx', './src/styles/*.css'],
  purge: ['./src/**/*.jsx', './src/**/*.js', './src/**/*.css'],
  corePlugins: {},
  plugins: [],
};
