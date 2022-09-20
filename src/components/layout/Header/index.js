import React from "react";
import styled from "styled-components";
import { ThemeIcon } from "components/layout/Header/icons";
import Button from "components/button";
import { BiUser } from "react-icons/bi";
const StyledHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;

  .header-heading {
    color: ${(props) => props.theme.textPrimary};
    .title {
      color: ${(props) => props.theme.textHeading};
    }
  }
  .user-login {
    .user-icon {
      font-size: 24px;
      color: ${(props) => props.theme.textPrimary};
    }
    .user-name {
      color: ${(props) => props.theme.textPrimary};
    }
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <div className="flex items-center justify-center text-3xl font-bold header-heading">
        Dev <span className="title">Express</span>
      </div>
      <div className="flex items-center gap-x-3">
        {/* <Button>
          <ThemeIcon />
        </Button> */}
        <div className="flex items-center user-login gap-x-1">
          <BiUser className="user-icon" />
          <span className="text-base font-medium user-name">User</span>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
