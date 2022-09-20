import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { listTheme } from "themes/listTheme";
import { themes } from "themes/themeData";
import { connect } from "redux-zero/react";
const StyledSidebar = styled.div`
  width: 350px;
  & .MuiTabs-scroller {
    .MuiTabs-flexContainer {
      justify-content: center;
      .tab-item {
        color: ${(props) => props.theme.textPrimary};
        font-size: 14px;
        font-weight: 500;
        text-transform: capitalize;
      }
      .Mui-selected {
        color: ${(props) => props.theme.tabActive};
      }
    }

    .MuiTabs-indicator {
      background-color: ${(props) => props.theme.tabActive};
    }
  }
  .theme-title {
    color: ${(props) => props.theme.textPrimary};
  }
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Sidebar = () => {
  const [value, setValue] = React.useState(0);
  const mapToProps = ({ theme }) => ({ theme });
  // console.log(mapToProps);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleApplyTheme = (typeTheme) => {
    const currentTheme = themes[typeTheme];
    console.log(currentTheme);
  };
  return (
    <StyledSidebar>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tab-list"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="tab-item" label="Control" {...a11yProps(0)} />
          <Tab className="tab-item" label=" Settings" {...a11yProps(1)} />
          <Tab className="tab-item" label="Themes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        item1
      </TabPanel>
      <TabPanel value={value} index={1}>
        item2
      </TabPanel>
      <TabPanel value={value} index={2}>
        {listTheme.map((theme, index) => {
          return (
            <span
              onClick={() => handleApplyTheme(theme.type)}
              key={theme.id}
              className="flex items-center mb-3 cursor-pointer gap-x-3"
            >
              <button
                style={{ backgroundColor: `${theme.color}` }}
                className={`w-10 h-10 rounded-full theme-btn`}
              ></button>
              <span className="text-sm font-medium theme-title">
                {theme.title}
              </span>
            </span>
          );
        })}
      </TabPanel>
    </StyledSidebar>
  );
};

export default Sidebar;
