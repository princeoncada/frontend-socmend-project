import {Box, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";

function Preview(x) {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                height: '400px',
                width: '800px'
            }}>
                {x.image.length > 0 && <img
                    className="selected-image image-border"
                    src={URL.createObjectURL(x.image[0])} alt="uploaded-image"
                />}
                <Typography variant="h4" sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '8px 0 0 8px'
                }}>
                    {x.title}
                </Typography>
                <Divider sx={{
                    backgroundColor: '#e0e0e0',
                }} />
            </Box>
        </>
    )
}

export default Preview;