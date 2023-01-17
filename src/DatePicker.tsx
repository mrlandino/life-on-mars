import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { getImageByDate } from './apiCalls';

type DatePicker = {
  setSelectedImage: React.Dispatch<React.SetStateAction<any>>
}
const DatePicker: React.FC<DatePicker> = ({setSelectedImage}) => {
  const [value, setValue] = useState<string>('');
  
  const clearInputs = () => {
    setValue('')
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    getImageByDate(value)
    .then(data => setSelectedImage(data))
 
    // clearInputs();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      setValue(event.target.value);
  }

  const todaysDate = new Date().toISOString().slice(0, 10)

  return (
   <Grid container justifyContent={'center'} >
    <Grid item sx={{mt: '30px', mr: '10px', alignItems: 'center'}}>
     <input
       placeholder="Chose Date"
       type='date'
       value={value}
       min='1995-06-16'
       max={todaysDate}
       onChange={(event) => {
         handleChange(event)
       }}
     />
    </Grid>
    <Grid item sx={{mt: '30px', mr: '10px'}}>
      <Button variant='contained' onClick={(e) => handleClick(e, 'clicked')}> 
        Search
      </Button>
    </Grid>
   </Grid>
  );
}

export default DatePicker;