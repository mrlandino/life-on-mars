import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ChooseMonth =() => {
  const [month, setMonth] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-month">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={month}
          label="Month"
          onChange={handleChange}
        >
          <MenuItem value={'January'}>January</MenuItem>
          <MenuItem value={'February'}>February</MenuItem>
          <MenuItem value={'March'}>March</MenuItem>
          <MenuItem value={'April'}>April</MenuItem>
          <MenuItem value={'May'}>May</MenuItem>
          <MenuItem value={'June'}>June</MenuItem>
          <MenuItem value={'July'}>July</MenuItem>
          <MenuItem value={'August'}>August</MenuItem>
          <MenuItem value={'September'}>September</MenuItem>
          <MenuItem value={'October'}>October</MenuItem>
          <MenuItem value={'November'}>November</MenuItem>
          <MenuItem value={'December'}>December</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ChooseMonth;