import Cookies from "js-cookie";
import { useEffect } from "react";

function Logout(x) {
    useEffect(() => {
        Cookies.remove("jwtToken");
        x.auth(false)
        sessionStorage.removeItem("auth")
        const delayDuration = 2000;
        const timeoutId = setTimeout(() => {
            window.location.href = "/";
        }, delayDuration);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <main>
            <p>Logging out...</p>
        </main>
    )
}

export default Logout;