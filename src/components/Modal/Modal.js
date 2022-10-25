import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { green, red } from "@mui/material/colors";
import Field from "../Field/Field";
import { useDispatch, useSelector } from "react-redux";
import { setShowEditEvent } from "../../redux-toolkit/global/globalSlice";
import ModalEdit from "./ModalEdit";
const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  &.close-modal {
    display: none;
  }
  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @keyframes growth {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes animateScale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.7);
    }
  }
  .modal-content {
    position: relative;
    background-color: ${(props) => props.theme.modalContentBg};
    -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
      0 1px 10px rgba(0, 0, 0, 0.12);
    height: 300px;
    max-height: 100%;
    margin: auto;
    transition: 0.3s all;
    /* animation: growth linear 0.2s; */
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
    transition: all 0.5s ease;
  }

  .MuiFormControlLabel-label {
    line-height: 18px;
    font-size: 14px;
    color: ${(props) => props.theme.textPrimary};
  }
  .btn-close__modal,
  .btn-checked {
    width: 36px;
    height: 36px;
    border-radius: 100rem;
    transition: 0.5s all;
  }
  .btn-checked:hover,
  .btn-close__modal:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
  .field-time {
    position: relative;
    display: inline-block;
    .form-input {
      padding-top: 14px;
      padding-bottom: 2px;
    }
    .field-label {
      font-size: 12px;
    }
  }
`;
const Modal = ({ open = false, handleClose = () => {} }) => {
  const dispatch = useDispatch((state) => state.global);
  const { showEditEvent } = useSelector((state) => state.global);

  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <StyledModal
      className={`modal show  ${showEditEvent ? "" : "close-modal"}`}
    >
      <div
        onClick={() => dispatch(setShowEditEvent(false))}
        className="absolute inset-0 z-10 modal-overlay"
      ></div>
      <div className="max-w-[560px] w-[320px] z-20   modal-content">
        <ModalEdit />
      </div>
    </StyledModal>,
    document.querySelector("body")
  );
};

export default Modal;
