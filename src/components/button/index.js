import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const StyledButton = styled.button`
  &:hover {
    filter: brightness(0.9);
  }
  color: #fff;
  cursor: pointer;
  font-size: 8px;
  text-transform: uppercase;
  font-weight: 400;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.alphaBg};
`;
const Button = ({
  width,
  height,
  type,
  className,
  preview = false,
  onClick = null,
  leftIcon = false,
  rightIcon = false,
  children,
  small = false,
  large = false,
  border = false,
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <span>Loading</span> : children;
  return (
    <StyledButton
      style={{ width: width, height: height }}
      type={type}
      large={large}
      preview={preview}
      onClick={onClick}
      {...props}
      className={`flex items-center whitespace-nowrap rounded-full justify-center    uppercase  ${className}`}
    >
      {leftIcon && <div className="text-[16px] mr-[5px]">{leftIcon}</div>}
      <span> {child}</span>
      {rightIcon && <>{rightIcon}</>}
    </StyledButton>
  );
};

export default Button;
