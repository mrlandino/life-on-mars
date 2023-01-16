import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';

const DatePicker = () => {
  const [value, setValue] = useState<string>('');
  
  const clearInputs = () => {
    setValue('')
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    clearInputs();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      setValue(event.target.value);
  }
  return (
   <Grid container justifyContent={'center'} >
    <Grid item sx={{mt: '30px', mr: '10px', alignItems: 'center'}}>
     <input
       placeholder="Chose Date"
       type='date'
       value={value}
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