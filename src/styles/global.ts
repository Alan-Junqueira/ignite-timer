import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        width: 8px; 
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #505059;
        border-left: 2px solid #3f3f40;
        border-right: 2px solid #3f3f40;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
    }

    body{
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    
`
