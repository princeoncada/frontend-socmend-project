import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Protected from "../components/Protected.jsx";
import Authenticate from "../redirects/Authenticate.jsx";
import Logout from "../redirects/Logout.jsx";
import {useState} from "react";
import Feed from "../pages/Feed.jsx";
import Post from "../pages/Post.jsx";
import CreatePost from "../pages/CreatePost.jsx";

function Routing() {
    const [auth, setAuth] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    sessionStorage.getItem("auth") === "true" || auth === true ?
                        <Protected>
                            <Feed />
                        </Protected> :
                        <Login />
                }/>
                <Route path="/create-post" element={ <CreatePost/> } />
                <Route path="/post/view/:postId" element={ <Post /> } />
                <Route path="/logout" element={ <Logout auth={setAuth}/> } />
                <Route path="/authenticate" element={ <Authenticate auth={setAuth}/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing