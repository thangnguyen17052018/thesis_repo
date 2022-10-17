import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const StyledModal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal-content {
    background-color: ${(props) => props.theme.modalContentBg};
  }
  .q-field-inner {
    background-color: ${(props) => props.theme.modalContentBg};
    color: ${(props) => props.theme.textPrimary};
    .q-field__control-container {
      height: 100%;
    }
    &::after {
      height: inherit;
      border-radius: inherit;
      border: 2px solid transparent;
      -webkit-transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
      transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &::before {
      border: 1px solid rgba(0, 0, 0, 0.24);
      -webkit-transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
      transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
      border-color: hsla(0, 0%, 100%, 0.6);
    }
    .field-label {
      font-size: 10px;
      color: ${(props) => props.theme.textPrimary};
      opacity: 0.8;
      position: absolute;
      top: 4px;
    }
    .field-label-type {
      top: -1px;
    }
  }
  .MuiFormControlLabel-label {
    line-height: 18px;
    font-size: 14px;
    color: ${(props) => props.theme.textPrimary};
  }
`;
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <StyledModal className="modal">
      <div className="absolute inset-0 z-10 modal-overlay"></div>
      <div className="max-w-[560px] w-[320px] z-20 inset-0 m-auto modal-content">
        <div className="flex flex-col">
          <h4 className="p-3 text-base font-bold modal-title">Edit #1</h4>
          <div className="p-3">
            <div className="field-item">
              <div className="relative px-3 h-[54px] after:inset-0 before:inset-0 after:absolute before:absolute after:content-[''] before:content-['']  q-field-inner">
                <div className=" q-field__control-container">
                  <div className="field-label text-ellipsis">Order</div>

                  <input
                    className="w-full border-none text-sm bg-inherit text-inherit h-full leading-[24px] pt-4 pb-[8px] "
                    min={1}
                    max={4}
                    value={2}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="text-sm cursor-pointer field-item">
              <label className="q-field h-10 w-full block relative px-3  after:inset-0 before:inset-0 after:absolute before:absolute after:content-[''] before:content-['']  q-field-inner">
                <div className="h-full q-field-inner">
                  <div className="flex items-center justify-between h-full q-field__control-container">
                    <div className="flex-1 h-full pt-4">
                      <span className="field-label field-label-type">Type</span>
                      <div className="q-field-native">
                        <span className="text-inherit text-sm leading-[18px]">
                          Do nothing
                        </span>
                      </div>
                    </div>
                    <div className="q-field__append h-full flex justify-center items-center pl-[6px]">
                      <i className="text-sm leading-[0px] bi text-inherit bi-caret-down-fill"></i>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <label className="q-field">
                <div className="field-item">
                  <div className="relative px-3 h-10 after:inset-0 before:inset-0 after:absolute before:absolute after:content-[''] before:content-['']  q-field-inner">
                    <div className=" q-field__control-container">
                      <div className="field-label text-ellipsis">
                        Time offsets
                      </div>

                      <input
                        className="w-full border-none text-sm bg-inherit text-inherit h-full leading-[24px] pt-4 pb-[8px] "
                        min={1}
                        max={4}
                        value={0}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </label>
              <div className="relative">
                <div className="q-field-checkbox">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Active"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Send Input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>,
    document.querySelector("body")
  );
};

export default Modal;
