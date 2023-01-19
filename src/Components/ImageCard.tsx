import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';

type ImageCard = {
  key: number;
}
  
const ImageCard: React.FC<ImageCard> = () => {
  return (
    <Card sx={{ minWidth: 275, margin: '15px', justifyContent:'center', textAlign: 'center'}}>
      <CardContent>
        <CardMedia 
          className='calendar-image' 
          image={require('./Images/Pleiades_Estes_3000.jpeg')}
          sx={{height:'204px', width: '307px'}}
        />
      </CardContent>
    </Card>
  );
}

export default ImageCard;