import React from "react";
import styled from "styled-components";
const StyledEventType = styled.div`
  position: relative;
  height: 40px;
  .selectbox-input {
    width: 100%;
    height: inherit;
    background-color: ${(props) => props.theme.modalContentBg};
    padding: 0 12px;
    border: 1px solid rgba(0, 0, 0, 0.24);
    -webkit-transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
    border-color: hsla(0, 0%, 100%, 0.6);
    cursor: pointer;
    &:focus {
      border: 2px solid #1976d2;
    }
  }
  .selectbox-input:focus + .event-key-label {
    color: #1976d2;
  }
  .event-key-label {
    font-size: 10px;
    color: ${(props) => props.theme.textPrimary};
    opacity: 0.8;
    position: absolute;
    top: 10px;
    left: 13px;
    transform: translateY(-50%);
    user-select: none;
    pointer-events: none;
    transition: 0.3s ease;
  }
  .event-key {
    position: absolute;
    font-size: 14px;
    color: ${(props) => props.theme.textPrimary};
    left: 13px;
    pointer-events: none;
    top: 68%;
    transform: translateY(-50%);
  }
  .field-icon-down {
    line-height: 0px;
    font-size: 18px;
    color: ${(props) => props.theme.textPrimary};
    transform: translateY(-50%);
    pointer-events: none;
  }
`;
const EventType = ({ modal }) => {
  return (
    <StyledEventType className="field-item">
      {modal && <span className="event-key">Do nothing</span>}
      <input className="w-full selectbox-input" type="button" />
      <span className="event-key-label">Type</span>
      <i className="absolute bi right-4 top-2/4 field-icon-down bi-caret-down-fill"></i>
    </StyledEventType>
  );
};

export default EventType;
