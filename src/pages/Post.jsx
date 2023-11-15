import Header from "../sections/Header.jsx";
import {Container, Paper} from "@mui/material";
import {useParams} from "react-router-dom";
import {useState} from "react";

function Post(x) {
    const { postId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setStockData] = useState(null);

    return (
        <>
            <Header />
            <main>
                <Container sx={{ backgroundColor: "red", width: "100%" }}>
                    <Paper elevation={4}>
                        <h1>Post</h1>
                    </Paper>
                </Container>
            </main>
        </>
    )
}

export default Post;