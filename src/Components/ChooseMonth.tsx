import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type ChooseMonth = {
  updateImageOrder: any;
  monthList: string[];
  usedMonths: string[];
  setUsedMonths: any;
  setMonthList: React.Dispatch<React.SetStateAction<string[]>>
}

const ChooseMonth: React.FC<ChooseMonth> = ({updateImageOrder, monthList, usedMonths, setUsedMonths, setMonthList}) => {
  const [month, setMonth] = React.useState('');
  // const [remainingMonthList, setRemainingMonthList] = React.useState([])
  

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
    let usedMonthsList : string[] = [...usedMonths];
    if (!usedMonthsList.includes(event.target.value)){
      usedMonthsList.push(event.target.value as string)
    }
    setUsedMonths(usedMonthsList)
    console.log('MONTH LIST', monthList)
    console.log('USED MONTHS', usedMonths)
    let updateDropdown: any = monthList.reduce((acc: any, month: string) => {
      if (!usedMonths.includes(month)) {
        console.log('INSIDE IF', month)
        acc.push(month)
      }
      return acc;
    }, [])
    console.log(updateDropdown)
    setMonthList(updateDropdown)
    // updateImageOrder(event.target.value as string)
  };

  const renderMenuList = monthList.map((month) => {
      return (
      <MenuItem value={`${month}`}>{month}</MenuItem>
    )
  })

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
          {renderMenuList}
        </Select>
      </FormControl>
    </Box>
  );
}

export default ChooseMonth;