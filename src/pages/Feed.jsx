import Header from "../sections/Header.jsx";
import Cards from "../components/Cards.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function Feed() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/file/all")
            .then(res => {
                setFiles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <>
            <Header />
            <main>
                <Cards
                    files={files}
                />
            </main>
        </>
    )
}

export default Feed