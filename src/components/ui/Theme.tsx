import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTypography' {
    interface TypographyOptions {
        tab: React.CSSProperties;
        estimate: React.CSSProperties;
    }
    interface Typography {
        tab: React.CSSProperties;
        estimate: React.CSSProperties;
    }
}

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createTheme({
    palette: {
        primary: {
            main: arcBlue,
        },
        secondary: {
            main: arcOrange,
        },
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white',
        },
    },
});
