import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
    --color-danger: #e5b1e3;
    --color-warning: #e5c3b4;
    --color-primary: #205696;
    --color-secondary: #20829d;
    --color-third: #26b7a9;
    }

    p, a, span, li, h1, h2, h3, h4 {
        font-family: 'Orbitron', 'sans-serif';
    }
    a {
        text-decoration: none;
    }
`;