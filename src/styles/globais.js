import { createGlobalStyle } from 'styled-components';
import font-size from '../utils/font-size';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    :root {
        font-size: ${font-size(24)};

        @media (min-width:768px) {
            font-size: ${font-size(18)};
        }

        @media (min-width: 1024px) {
            font-size: ${font-size(16)};
        }
    }
`;

export default Global;