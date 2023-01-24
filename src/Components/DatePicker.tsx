import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { getImageByDate } from '../apiCalls';

type DatePicker = {
  setSelectedImage: React.Dispatch<React.SetStateAction<any>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
}
const DatePicker: React.FC<DatePicker> = ({setSelectedImage, setError}) => {
  const [value, setValue] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    getImageByDate(value)
    .then(response => {
        if (response.ok) {
          setError(false)
          return response.json();
        } else {
          setError(true)
        }
    })
    .then(data => setSelectedImage(data))
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