import 'styled-components';

declare module 'styled-components' { // estara disponivel em 'styled-components' (cf. MainHeader => styles.ts)
    export interface DefaultTheme {
        title: string;
        color: {
            primary: string;
            secondary: string;
            tertiary: string;
            white: string;
            black: string;
            gray: string;
            success: string;
            info: string;
            warning: string;
        }
    };
};