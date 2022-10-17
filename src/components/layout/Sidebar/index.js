import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { listTheme } from "../../../themes/listTheme";
import { themes } from "../../../themes/themeData";
import { useDispatch } from "react-redux";
import { setThemeBg } from "../../../redux-toolkit/global/globalSlice";
import { TextField } from "@mui/material";
import SliderProgress from "./Slider";
const StyledSidebar = styled.div`
  flex: 1;
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
  & .MuiBox-root {
    border-color: ${(props) => props.theme.borderTab};
  }
  .playback-title {
    color: ${(props) => props.theme.textPrimary};
    font-size: 14px;
  }

  & .MuiFilledInput-root {
    height: 40px;
    &::after {
      border-bottom: 2px solid ${(props) => props.theme.tabActive};
    }
    &:hover::before {
      border-bottom: 1px solid ${(props) => props.theme.tabActive};
    }
    input {
      color: ${(props) => props.theme.textPrimary};
    }
    input::-webkit-input-placeholder {
      color: ${(props) => props.theme.tabActive};
    }
    input::-moz-input-placeholder {
      color: ${(props) => props.theme.tabActive};
    }
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
          <Box>{children}</Box>
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
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleApplyTheme = (typeTheme) => {
    const currentTheme = themes[typeTheme];
    dispatch(setThemeBg(currentTheme));
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
        <div className="flex items-center gap-x-3">
          <span className="playback-title whitespace-nowrap">
            Playback Speed:
          </span>
          <div className="w-[300px]">
            <SliderProgress />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span className="text-sm">Hot keys:</span>
        <div className="h-[160px] max-h-full has-scroll-bar mt-3">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <div className="flex items-center gap-x-3">
              <span className="w-20">Play/Stop</span>
              <div className="relative ">
                <TextField id="filled-basic" variant="filled" />
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="w-20">Record/Stop</span>
              <div className="relative ">
                <TextField id="filled-basic" variant="filled" />
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="w-20">Bring to top</span>
              <div className="relative ">
                <TextField id="filled-basic" variant="filled" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span>Typing Speed:</span>
          <SliderProgress />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex flex-col gap-y-3">
          {listTheme.map((theme, index) => {
            return (
              <div
                onClick={() => handleApplyTheme(theme.type)}
                key={theme.id}
                className="flex items-center cursor-pointer gap-x-3"
              >
                <button
                  style={{ backgroundColor: `${theme.color}` }}
                  className={`w-10 h-10 rounded-full theme-btn`}
                ></button>
                <span className="text-sm font-medium theme-title">
                  {theme.title}
                </span>
              </div>
            );
          })}
        </div>
      </TabPanel>
    </StyledSidebar>
  );
};

export default Sidebar;
