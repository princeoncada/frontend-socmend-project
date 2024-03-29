import {useEffect} from "react";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";

function Authenticate(x) {
    const navigate = useNavigate()

    useEffect(() => {
        const jwtTokenCookie = document.cookie.split(";").find(cookie => cookie.startsWith("jwtToken="));
        if(jwtTokenCookie) {
            const jwtToken = jwtTokenCookie.split("=")[1];
            console.log('jwtToken', jwtToken)
        }else {
            console.log("no jwtToken cookie found")
        }

        if(Cookies.get("jwtToken")!==undefined) {
            x.auth(true)
            sessionStorage.setItem("auth", "true")
        }

        const delayDuration = 2000;
        const timeoutId = setTimeout(() => {
            navigate("/");
        }, delayDuration);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <main>
            <p>Authenticating...</p>
        </main>
    )
}

export default Authenticate;