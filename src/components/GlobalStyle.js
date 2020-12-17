import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgray;
        }
    }
    body{
        font-family:'Montserrat',sans-serif;
        width:100%;
        overflow-x:hidden;
    }
    h2{
        font-size:3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight:lighter;
        color:#333;
    }
    h3{
        font-size:1.3rem;
        color:#333;
        padding:1em 0;
    }
    p{
        font-size:1.2rem;
        line-height:200%;
        color:#696969;
        @media (max-width: 425px) {
            font-size:1rem;
        }
    }
    a{
        text-decoration:none;
        color:#333;
    }
    img{
        display:block;
    }
    input{
        font-family:'Montserrat', sans-serif;
        font-weight:bold;
    }
    `;
export default GlobalStyle;
