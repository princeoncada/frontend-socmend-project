import {Box, Paper, TextField} from "@mui/material";
import {useRef, useState} from "react";

function Details(x) {
    // Will be scraped for a later time for now
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const outerBoxRef = useRef(null);
    const isDragging = useRef(false);
    const startPos = useRef({ x: 0, y: 0 });
    const scrollPos = useRef({ left: 0, top: 0 });

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startPos.current = {
            x: e.clientX,
            y: e.clientY
        };
        scrollPos.current = {
            left: outerBoxRef.current.scrollLeft,
            top: outerBoxRef.current.scrollTop
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (isDragging.current && outerBoxRef.current) {
            const dx = e.clientX - startPos.current.x;
            const dy = e.clientY - startPos.current.y;
            outerBoxRef.current.scrollTop = scrollPos.current.top - dy;
            outerBoxRef.current.scrollLeft = scrollPos.current.left - dx;
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    // This is to handle images with varying sizes after upload
    // Will be scraped for a later time for now
    const img = new Image();
    img.src = URL.createObjectURL(x.image[0]);
    img.onload = () => {
        const aspectRatio = img.width / img.height
        console.log(aspectRatio)

        if (aspectRatio < 1 && img.width < 800) {
            // portrait
            console.log("case 1")
            setWidth(800)
            setHeight(800 / aspectRatio);
            return;
        }

        if (aspectRatio > 1 && img.width < 800) {
            // landscape
            console.log("case 4")
            setWidth(800)
            setHeight(800 / aspectRatio);
            return;
        }

        if (aspectRatio > 1 && img.height < 400) {
            // landscape
            console.log("case 2")
            setHeight(400);
            setWidth(400 * aspectRatio);
            return;
        }

        if (aspectRatio > 1 && img.width < 800) {
            // landscape
            console.log("case 3")
            setWidth(800)
            setHeight(800 / aspectRatio);
            return;
        }

        setHeight(img.height);
        setWidth(img.width);
    }

    return (
        <>
            <Paper elevation={0} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '12px',
            }} >

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '400px',
                    width: '800px'
                }}>
                    {x.image.length > 0 && <img
                        className="selected-image image-border"
                        src={URL.createObjectURL(x.image[0])} alt="uploaded-image"
                    />}
                </Box>

                <TextField
                    required
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={x.title}
                    onChange={(e) => x.setTitle(e.target.value)}
                />

                {/* Code below will be temporarily scraped */}
                {/* Goal was to make uploaded image resizeable and draggable */}
                {/* Similar to how you would customize an image for a FB profile pic */}

                {/*<Box sx={{*/}
                {/*    height: '400px',*/}
                {/*    width: '800px',*/}
                {/*    overflow: 'hidden',*/}
                {/*    cursor: isDragging.current ? 'grabbing' : 'grab',*/}
                {/*}}*/}
                {/*     ref={outerBoxRef}*/}
                {/*     onMouseDown={handleMouseDown}*/}
                {/*>*/}
                {/*    <Box sx={{*/}
                {/*        height: `${height}px`,*/}
                {/*        width: `${width}px`,*/}
                {/*        backgroundImage: `url(${URL.createObjectURL(x.image[0])})`,*/}
                {/*        backgroundSize: 'cover',*/}
                {/*        backgroundRepeat: 'no-repeat',*/}
                {/*        userSelect: 'none'*/}
                {/*    }} />*/}
                {/*</Box>*/}
            </Paper>
        </>
    )
}

export default Details;