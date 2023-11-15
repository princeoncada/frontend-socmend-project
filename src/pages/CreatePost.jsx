import {Box, Button, Container, Step, StepLabel, Stepper} from "@mui/material";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import ImageUpload from "../components/ImageUpload.jsx";
import Details from "../components/Details.jsx";
import Preview from "../components/Preview.jsx";
import axios from "axios";
import Header from "../sections/Header.jsx";
import {useNavigate} from "react-router-dom";

const steps = ['Upload Image', 'Add Details', 'Preview'];
function CreatePost() {
    const [activeStep, setActiveStep] = useState(0);
    const [image, setImage] = useState([]);
    const [title, setTitle] = useState("");
    const [skipped, setSkipped] = useState(new Set());
    const navigate = useNavigate();
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleClearImage = () => {
        setImage([])
    };

    const handleClearTitle = () => {
        setTitle("")
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("file", image[0]);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/file/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response.data)
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function Navigation() {
        return (
            <>
                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                    <Button
                        color="inherit"
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        Back
                    </Button>

                    <Box sx={{ flex: '1 1 auto' }} />

                    {
                        activeStep === 0 && <Button
                            color="error"
                            variant="contained"
                            disableElevation
                            onClick={handleClearImage}
                        >
                            Clear
                        </Button>
                    }

                    {
                        activeStep === 1 && <Button
                            color="error"
                            variant="contained"
                            disableElevation
                            onClick={handleClearTitle}
                        >
                            Clear
                        </Button>
                    }

                    <Box sx={{ flex: '1 1 auto' }} />

                    { activeStep !== steps.length - 1 && <Button
                        variant="outlined"
                        disabled={
                        (activeStep === 0 && image.length === 0)
                            ||
                        (activeStep === 1 && title.length === 0)}
                        onClick={handleNext}
                    >
                        Next
                    </Button>}

                    { activeStep === steps.length - 1 && <Button
                        variant="outlined"
                        onClick={handleUpload}
                    >
                        Upload
                    </Button>}
                </Box>
            </>
        )
    }

    return (
        <>
            <Header />
            <main>
                <Container>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {
                        activeStep === steps.length &&
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </>
                    }
                    {
                        activeStep === 0 &&
                        <>
                            <Container sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "500px",
                                paddingY: "20px"
                            }}>
                                <ImageUpload
                                    image={image}
                                    setImage={setImage}
                                />
                            </Container>
                            <Navigation />
                        </>
                    }
                    {
                        activeStep === 1 &&
                        <>
                            <Container sx={{
                                display: "flex",
                                justifyContent: "center",
                                height: "500px",
                                paddingY: "20px"
                            }}>
                                <Details
                                    image={image}
                                    title={title}
                                    setTitle={setTitle}
                                />
                            </Container>
                            <Navigation />
                        </>
                    }
                    {
                        activeStep === 2 &&
                        <>
                            <Container sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "500px",
                                paddingY: "20px"
                            }}>
                                <Preview
                                    image={image}
                                    title={title}
                                />
                            </Container>
                            <Navigation />
                        </>
                    }
                </Container>
            </main>
        </>
    );
}

export default CreatePost;