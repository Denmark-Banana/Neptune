import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:#f5f5f5;
        color:#444444;
        font-size:14px;
    }
    button,
    select,
    input:not([type="file"]),
    textarea {
        padding: 7px 10px;
        margin-bottom: 25px;
        width: 100%;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        color: #444444;
        font-weight: 600;
        background-color: white;
        max-width: 320px;
        resize: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        &::placeholder {
            font-weight: 300;
            color: rgba(0, 0, 0, 0.7);
        }
    }
    button,
    input[type="submit"] {
        cursor: pointer;
        background-color: #3498db;
        color: white;
    }
`;

export default globalStyles;
