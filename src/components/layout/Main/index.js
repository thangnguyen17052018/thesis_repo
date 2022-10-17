import React from "react";
import styled from "styled-components";
import { RiShareBoxFill } from "react-icons/ri";
import PopperWrapper from "./Popper";
import { Checkbox } from "@mui/material";
const StyledMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .main-content {
    border-right: 1px solid ${(props) => props.theme.borderPrimary};
    border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
    & .main-selector {
      border: 1px solid ${(props) => props.theme.borderPrimary};
      border-bottom: 2px solid ${(props) => props.theme.borderPrimary};
      border-right: 0;
      cursor: pointer;
      background-color: ${(props) => props.theme.selectorBg};
      .down-icon {
        color: ${(props) => props.theme.textPrimary};
      }
      .selector-icon {
        color: ${(props) => props.theme.addBg};
      }
      .share-icon {
        color: ${(props) => props.theme.tabActive};
      }
    }
  }

  .btn-add {
    background-color: ${(props) => props.theme.addBg};
    box-shadow: 0px 4px 4px 2px rgb(0 0 0 / 20%);
  }
  .save-btn {
    background-color: ${(props) => props.theme.saveBg};
  }
  .changle-btn {
    background-color: ${(props) => props.theme.changleBg};
  }
  .browse-file {
    border: 1px dashed ${(props) => props.theme.borderPrimary};
    .folder-icon {
      color: ${(props) => props.theme.textPrimary};
    }
    .search-icon {
      color: ${(props) => props.theme.addBg};
    }
    .download-icon {
      color: ${(props) => props.theme.secondBg};
    }
  }
  .MuiCheckbox-root {
    color: #0077b6;
  }
  .item-type {
    border: 1px solid ${(props) => props.theme.boderCheckItem};
    border-top: 0;
  }
  .q-item {
    border: 1px solid ${(props) => props.theme.boderCheckItem};
    height: 41px;

    & .control-list {
      display: grid;
      grid-template-columns: 1fr 3fr 2fr 2fr 2fr 1fr;
    }
  }
  .btn-edit {
    padding: 5px 8px;
    transition: 0.4s all;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Main = () => {
  return (
    <StyledMain className="w-[800px]">
      <div className="relative w-full max-h-full main-content">
        <div className="relative flex justify-between flex-1 p-3 main-selector">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-3">
              <div className="selector-icon ">
                <i className="text-xl bi bi-card-checklist text-inherit"></i>
              </div>
              <span>Process</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="text-xl share-icon">
                <RiShareBoxFill className="text-inherit" />
              </div>
              <div className="down-icon">
                <i className="text-base bi text-inherit bi-caret-down-fill"></i>
              </div>
            </div>
          </div>
          <PopperWrapper />
        </div>
        <div className="h-[60vh] relative">
          <div className="item-type">
            <div className="min-h-[34px] px-3 py-1">
              <Checkbox
                defaultChecked
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
          </div>
          <div className="list-item max-h-[63vh]  has-scroll-bar">
            <div className="flex items-center p-3 q-item">
              <div className="items-center w-full control-list gap-x-2 ">
                <div>
                  <Checkbox
                    defaultChecked
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>
                  <Checkbox
                    defaultChecked
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <button className="btn-edit m-0 flex items-center gap-x-1 bg-[#0077b6] text-xs font-semibold italic text-white  rounded-full ">
                    <i className="bi text-white leading-[0px] text-sm bi-pencil-fill"></i>
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col main-footer">
        <div className="flex items-center gap-x-3">
          <button className="flex items-center justify-center w-10 h-10 my-4 text-white transition-all duration-500 rounded-full shadow-lg hover:opacity-90 btn-add">
            <i className="text-lg leading-[0px] bi bi-plus-lg text-inherit"></i>
          </button>
          <div className="flex items-center gap-x-3">
            <button className="flex items-center justify-center w-10 h-10 my-4 text-white transition-all duration-500 rounded-full shadow-lg save-btn hover:opacity-90 btn-add">
              <i className="text-lg leading-[0px] i bi-check-lg text-inherit"></i>
            </button>
            <button className="flex items-center justify-center w-10 h-10 my-4 text-white transition-all duration-500 rounded-full shadow-lg changle-btn hover:opacity-90 btn-add">
              <i className="text-lg leading-[0px] bi bi-reply-fill text-inherit"></i>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 browse-file">
          <div className="flex items-center gap-x-3">
            <i className="text-base bi folder-icon bi-folder-fill"></i>
            <span className="cursor-pointer">Browse file...</span>
          </div>
          <div className="flex items-center gap-x-4">
            <i className="bi bi-search search-icon leading-[0px] text-xl cursor-pointer"></i>

            <i className="text-xl cursor-pointer bi download-icon bi-download"></i>
          </div>
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
