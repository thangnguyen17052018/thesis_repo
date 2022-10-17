import { css } from "styled-components";
export const GlobalClasses = css`
  img {
    max-width: 100%;
    object-fit: cover;
  }
  body {
    font-weight: 400;
    font-size: 16px;
    -webkit-tap-highlight-color: transparent !important;
    background-color: ${(props) => props.theme.layoutBg};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.5);
    color: ${(props) => props.theme.textPrimary};
    font-size: 14px;
  }

  .has-scroll-bar {
    will-change: scroll-position;
    scroll-behavior: smooth;
    overflow: hidden overlay;
    &::-webkit-scrollbar {
      width: 10px;
      display: none;
    }
    &:hover::-webkit-scrollbar {
      width: 10px;
      display: inline-block;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: ${(props) => props.theme.scrollBg};
    }
  }
`;
