import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#CFCFEA',
            contrastText: '#ffffff',
            white: '#ffffff'
        },
        secondary: {
            main: '#A89B9D',
            contrastText: '#ffffff',
            white: '#ffffff'
        },
        neutral: {
            main: '#816C61',
            gray: '#575A4B',
            gray2: '#2A2C24',
        },
        azure: {
            main: '#69c9caff',
        },
        confirmation: {
            main: '#efa2a9ff',
            contrastText: '#ffffff',
            dark: '#2FA642'
        },
        purple: {
            main: '#1DAEFF',
            light: '#69c9caff',
        },
        danger: {
            main: '#EF233C',
            contrastText: '#ffffff',
            white: '#ffffff'
        },
    }
});
