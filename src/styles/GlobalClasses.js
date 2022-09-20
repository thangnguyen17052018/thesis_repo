import { css } from "styled-components";
export const GlobalClasses = css`
  img {
    max-width: 100%;
    object-fit: cover;
  }
  body {
    font-weight: 400;
    font-size: 16px;
    background-color: ${(props) => props.theme.layoutBg};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.5);
  }
`;
