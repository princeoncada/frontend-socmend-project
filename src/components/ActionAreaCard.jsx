import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea, Container, IconButton} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

/* eslint-disable react/prop-types */

function ActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 350}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt="green iguana"
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "start", paddingX: 1, paddingY: 0.5}}>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <KeyboardDoubleArrowLeftIcon />
                </IconButton>
            </Box>
        </Card>
    );
}

export default ActionAreaCard;