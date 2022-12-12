import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="NearBy Restaurants" tabIndex={0} href='/restaurants'/>
        {/* <Tab label="Menu Listing" tabIndex={1} href='/menu'/>
        <Tab label="Coupon Validation" tabIndex={2} href='/coupon'/> */}
      </Tabs>
    </Box>
  );
}
