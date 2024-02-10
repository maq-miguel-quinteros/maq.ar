import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
    font-family: 'Orbitron', 'sans-serif';

    --color-primary: #2E4CD6;
    --color-primary-1: #BBC2E6;
    --color-primary-2: #6176D4;
    --color-primary-3: #0A2BC7;
    --color-primary-4: #041C8D;

    --color-secondary-1: #FD1A25;
    --color-secondary-1-1: #FEC7CA;
    --color-secondary-1-2: #FD6068;
    --color-secondary-1-3: #FC000D;
    --color-secondary-1-4: #CB000A;

    --color-secondary-2: #2BE818;
    --color-secondary-2-1: #C2F1BD;
    --color-secondary-2-2: #65E758;
    --color-secondary-2-3: #15DF00;
    --color-secondary-2-4: #10A900;

    --color-complement: #FFBC1A;
    --color-complement-1: #FFEFC8;
    --color-complement-2: #FFD161;
    --color-complement-3: #FFB400;
    --color-complement-4: #CF9200;
    }

    h1 {
        font-size: xx-large;    
        font-weight: 900;
    }
    h2 {
        font-size: x-large;
        font-weight: 700;
    }
    h3 {
        font-size: larger;        
    }
    h4 {
        font-size: large;
    }
    p {
        font-size: medium;
    }
    a {
        text-decoration: none;
    }
`;