import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${(prop) => prop.theme.fonts.primary};
  font-weight: 400;
  background-color: ${(prop) => prop.theme.colors.light} ;
}

body {
  margin: 0;
}

h1,
h2,
h3,
p {
  margin: 0;
}

button {
  border: none;
  font: inherit;
  cursor: pointer;
}

input {
  font: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

ul
{
list-style: none;
padding: 0;
margin: 0;
}

img {
  max-width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 30px 0px;
  gap: 20px;
  align-items: flex-start;
}

input {
    padding: 18px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 3px #d3d0d0;
  }

.login-form__button {
    padding: 18px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: #b22222;
    font-weight: bold;
  }
`;

export default GlobalStyle;
