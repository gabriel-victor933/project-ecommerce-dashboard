import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        absolute: {
            white: '#FFF',
            black: '#000',
        },
        yellow: {
            50: '#FFD500',
            55: '#FFD81A',
            70: '#FFE566',
            80: '#FFEE99',
            90: '#FFF6CC',
            95: '#FFFAE5',
            97: '#FFFCF0',
            99: '#FFFEFA',
        },
        white: {
            90: '#E4E4E7',
            95: '#F1F1F3',
            97: '#F7F7F8',
            99: '#FCFCFD',
        },
        grey: {
            10: '#1A1A1A',
            15: '#262626',
            20: '#333333',
            30: '#4C4C4D',
            35: '#59595A',
            40: '#656567',
            60: '#98989A',
            70: '#B3B3B3',
        }
    },
    typography: {
        fontFamily: ['Manrope']
    },
    components: {
        MuiTypography: {
            styleOverrides:{
                h1: {
                    fontSize: '48px',
                    fontWeight: '600',
                    color: 'grey.10',

                    '@media(max-width: 1440px)': {
                        fontSize: '38px'
                    },

                    '@media(max-width: 900px)': {
                        fontSize: '28px'
                    },
                },
                h2: {
                    fontSize: '34px',
                    fontWeight: '600',
                    color: 'grey.10',

                    '@media(max-width: 1440px)': {
                        fontSize: '26px'
                    },

                    '@media(max-width: 900px)': {
                        fontSize: '20px'
                    },
                },
                h3: {
                    fontSize: '24px',
                    fontWeight: '600',
                    color: 'grey.10',

                    '@media(max-width: 1440px)': {
                        fontSize: '18px'
                    },

                    '@media(max-width: 900px)': {
                        fontSize: '16px'
                    },
                },
                h4: {
                    fontSize: '20px',
                    fontWeight: '400',
                    color: 'grey.60',

                    '@media(max-width: 1440px)': {
                        fontSize: '18px'
                    },

                    '@media(max-width: 900px)': {
                        fontSize: '16px'
                    },
                },
                h5: {
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'grey.60',

                    '@media(max-width: 1440px)': {
                        fontSize: '14px'
                    },

                    '@media(max-width: 900px)': {
                        fontSize: '14px'
                    },
                },
                h6: {
                    fontSize: '18px',
                    fontWeight: '400',
                    color: 'grey.40',

                    '@media(max-width: 1440px)': {
                        fontSize: '14px'
                    },

                    '@media(max-width: 900px)': {
                        fontSize: '14px'
                    },
                },
                p: {
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'grey.40'
                },
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '9px 30px 9px 30px',
                    fontSize: '18px',

                    '@media(max-width: 1440px)': {
                        padding: '7px 20px 7px 20px',
                        fontSize: '14px',
                    }

                },
                containedPrimary: {
                    backgroundColor: '#FFD500',
                    width: 'fit-content',
                    borderRadius: '32px',
                    color: '#262626',
                    textTransform: 'none',
                    fontWeight: '600',
                    boxShadow: 'none'
                },
                containedSecondary: {
                    backgroundColor: '#262626',
                    width: 'fit-content',
                    borderRadius: '32px',
                    color: '#FFFFFF',
                    textTransform: 'none',
                    fontWeight: '600',
                    boxShadow: 'none'
                },
                
                outlinedPrimary: {
                    width: 'fit-content',
                    borderRadius: '100px',
                    border: '1px solid #F1F1F3',
                    color: '#262626',
                    textTransform: 'none',
                    fontWeight: '400',
                    boxShadow: 'none'
                },
                outlinedSecondary: {
                    backgroundColor: '#F7F7F8',
                    width: 'fit-content',
                    borderRadius: '32px',
                    color: '#000',
                    textTransform: 'none',
                    fontWeight: '400',
                    boxShadow: 'none',
                    border: '1px solid #F1F1F3',
                },
                textPrimary: {
                    width: 'fit-content',
                    textTransform: 'uppercase',
                    fontSize: '20px',
                    fontWeight: '400',
                    color: '#98989A',

                    '@media(max-width: 1440px)': {
                        fontSize: '16px',
                    }
                },
                textSecondary: {
                    width: 'fit-content',
                    textTransform: 'uppercase',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1A1A1A',

                    '@media(max-width: 1440px)': {
                        fontSize: '16px',
                    }
                }
            }
        }
    },
    breakpoints: {
        values: {
            xl: 1440,
            md: 900,
            xs: 0,
        }
    }
})