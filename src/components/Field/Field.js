import React from "react";
import styled from "styled-components";
const StyledField = styled.div`
  position: relative;
  .form-input {
    border: 1px solid rgba(0, 0, 0, 0.24);
    -webkit-transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
    border-color: hsla(0, 0%, 100%, 0.6);
    height: 52px;
    line-height: 24px;
    padding: 16px 12px 8px;
    width: 100%;
    background-color: ${(props) => props.theme.modalContentBg};
    &:focus {
      border: 2px solid #1976d2;
    }
  }

  .form-label {
    font-size: 10px;
    color: ${(props) => props.theme.textPrimary};
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 13px;
    transform: translateY(-50%);
    user-select: none;
    pointer-events: none;
    transition: 0.3s ease;
    font-size: 14px;
  }
  .form-input:not(:placeholder-shown) + .form-label,
  .form-input:focus + .form-label {
    top: 14px;
    font-size: 10px;
    color: #1976d2;
    opacity: 1;
  }
`;
const Field = ({ height, className, label }) => {
  return (
    <StyledField className="form-field">
      <input
        style={{ height: height }}
        className="form-input"
        placeholder="  "
        type="number"
      />
      <label className="form-label" htmlFor="name">
        {label}
      </label>
    </StyledField>
  );
};

export default Field;
