import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
 ${reset}

 html, body, #root {
   height: 100vh;
   /* overflow-x: hidden; */

   font-family: 'Roboto', sans-serif;
   /* font-size: 20px; */

   background-color: #000;
   box-sizing: border-box;
 }

 a {
  text-decoration: none;
  color: inherit;
   &:visited{
     color: inherit;
   }
 }
 `
export default GlobalStyle
