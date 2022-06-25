import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const globalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        min-width: 1200px;
    };
`

export default globalStyle
