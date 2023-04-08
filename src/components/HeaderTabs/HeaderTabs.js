import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { tabsClasses } from "@mui/material/Tabs";
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HeaderTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{display:"flex"}}>
    <Box sx={{ width: "92%" }}>
      <TabContext value={value}>
        <Box
        // sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{
              sx: { top: 0, opacity: 0.0, backgroundColor: "red" },
            }}
            aria-label="Tabs example"
            // indicatorColor="secondary"
            centered
            variant="scrollable"
            scrollButtons="auto"
            textColor="inherit"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
          >
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#4d99bd",
              }}
              indicatorColor="inherit"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
              label="Tab One"
              value="1"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#c95d79",
              }}
              label="Tab Two"
              value="2"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#4d99bd",
              }}
              label="Tab Three"
              value="3"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#f7ca2d",
                background: "white",
              }}
              label="Plan"
              value="4"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#c95d79",
              }}
              label="Tab Five"
              value="5"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#78b9ad",
              }}
              label="Tab Six"
              value="6"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#4d99bd",
              }}
              label="Tab seven"
              value="7"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#c95d79",
              }}
              label="Tab eight"
              value="8"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
            <Tab
              sx={{
                background: "#c5e5df",
                border: 1,
                borderColor: "#78b9ad",
                borderTop: 3,
                borderTopColor: "#78b9ad",
              }}
              label="Tab nine"
              value="9"
              icon={<FavoriteIcon />}
              aria-label="favorite"
              iconPosition="start"
            />
          </TabList>
        </Box>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </Box>
      <Box style={{ marginTop:'20px'}}>
      <ArrowDropDownIcon sx={{backgroundColor:"#c5e5df", marginRight:'5px'}}/>
      <SettingsIcon sx={{backgroundColor:"#c5e5df"}}/>
      </Box>
      </div>
  );
};

export default HeaderTabs;

