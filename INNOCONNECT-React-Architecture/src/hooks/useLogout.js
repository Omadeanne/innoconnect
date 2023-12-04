import axios from "axios";
import useAuthProvider from "../context/useAuthProvider";


const useLogout = () => {
    const { setIsLoggedIn, isLoggedIn } = useAuthProvider();
    const refreshToken = isLoggedIn?.tokens?.refresh?.token
    const logout = async () => {
        setIsLoggedIn({})
        try {
            await axios.post('http://localhost:5000/v1/auth/logout', refreshToken);
        } catch (error) {
            console.log(error);
        }
    }

    return logout
}

export default useLogout;