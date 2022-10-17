import React from "react";
import styled from "styled-components";
import chorome from "../../../../assets/chrome.png";
import vscode from "../../../../assets/vscode.png";
import firefox from "../../../../assets/firefox.png";
const StyledPopper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.selectorBg};
  z-index: 5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: rgb(32 33 36 / 28%) 0px 4px 6px 0px;
  padding: 13px 10px;
  color: ${(props) => props.theme.textPrimary};
  border-bottom: 2px solid ${(props) => props.theme.borderPrimary};
  border-right: 2px solid ${(props) => props.theme.borderPrimary};
  display: none;
  .popper-item {
    &:hover {
      background-color: ${(props) => props.theme.hoverBg};
    }
  }
`;
const PopperWrapper = () => {
  return (
    <StyledPopper className="w-full flex flex-col gap-y-3 popper-wrapper absolute bottom-0  top-[54px] h-[250px] has-scroll-bar left-0 z-50 ">
      <div className="relative flex items-center gap-x-4 popper-item">
        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden app-logo">
          <img src={firefox} alt="" />
        </div>
        <span>Facebook - google Chrome</span>
      </div>
      <div className="relative flex items-center gap-x-4 popper-item">
        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden app-logo">
          <img src={chorome} alt="" />
        </div>
        <span>Facebook - google Chrome</span>
      </div>
      <div className="relative flex items-center gap-x-4 popper-item">
        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden app-logo">
          <img src={chorome} alt="" />
        </div>
        <span>Facebook - google Chrome</span>
      </div>
      <div className="relative flex items-center gap-x-4 popper-item">
        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden app-logo">
          <img src={vscode} alt="" />
        </div>
        <span>Facebook - google Chrome</span>
      </div>
      <div className="relative flex items-center gap-x-4 popper-item">
        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden app-logo">
          <img src={chorome} alt="" />
        </div>
        <span>Facebook - google Chrome</span>
      </div>
      <div className="relative flex items-center gap-x-4 popper-item">
        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden app-logo">
          <img src={firefox} alt="" />
        </div>
        <span>Facebook - google Chrome</span>
      </div>
    </StyledPopper>
  );
};

export default PopperWrapper;
