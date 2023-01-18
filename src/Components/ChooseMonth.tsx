import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type ChooseMonth = {
  updateImageOrder: any;
}

const ChooseMonth: React.FC<ChooseMonth> = ({updateImageOrder}) => {
  const [month, setMonth] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
    updateImageOrder(event.target.value as string)
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
          <MenuItem value={'JANUARY'}>January</MenuItem>
          <MenuItem value={'FEBRUARY'}>February</MenuItem>
          <MenuItem value={'MARCH'}>March</MenuItem>
          <MenuItem value={'APRIL'}>April</MenuItem>
          <MenuItem value={'MAY'}>May</MenuItem>
          <MenuItem value={'JUNE'}>June</MenuItem>
          <MenuItem value={'JULY'}>July</MenuItem>
          <MenuItem value={'AUGUST'}>August</MenuItem>
          <MenuItem value={'SEPTEMBER'}>September</MenuItem>
          <MenuItem value={'OCTOBER'}>October</MenuItem>
          <MenuItem value={'NOVEMBER'}>November</MenuItem>
          <MenuItem value={'DECEMBER'}>December</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ChooseMonth;