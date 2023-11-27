import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Esteban&family=Lobster&family=Playfair+Display&family=Roboto+Mono:ital,wght@0,700;1,400&family=Roboto:wght@400;500;700;900&display=swap");

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #111010;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translate3d(0, 30px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
