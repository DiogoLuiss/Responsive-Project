import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
}
body{

 background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(0,39,255,1) 100%);

display: flex;
align-items: center;
justify-content: center;

}

`