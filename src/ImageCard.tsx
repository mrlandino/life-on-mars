import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { type } from 'os';
import { CardMedia } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

type ImageCard = {
  month: string;
  key: string;
}

const ImageCard: React.FC<ImageCard> = ({month}) => {
  return (
    <Card sx={{ minWidth: 275, margin: '15px', justifyContent:'center', textAlign: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 16, fontFamily: 'Poppins' }} color="text.secondary" gutterBottom >
          {month}
        </Typography>
        {/* <img className='calendar-image' src={require('./Images/Pleiades_Estes_3000.jpeg')}/> */}
      </CardContent>
      <CardMedia 
        className='calendar-image' 
        image={require('./Images/Pleiades_Estes_3000.jpeg')}
        sx={{height:'204px', width: '307px'}}
      />
    </Card>
  );
}

export default ImageCard;