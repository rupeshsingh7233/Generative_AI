import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getUserProfile } from "../services/auth.api";


export const useAuth = () => {

    const context = useContext(AuthContext);
    const { user, setUser, loding, setLoading } = context;
   
    
    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);
        try {
            const response = await register({ username, email, password })
            setUser(response.user)
        } catch (err) {
            console.log(err);
        }finally {
            setLoading(false);
        }
    }

    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const response = await login({ email, password })
            setUser(response.user)
        } catch (err) {
            console.log(err);
        }finally {
            setLoading(false);
        }
    }

    const handleLogout = async () => {
        setLoading(true);
        try {
          const response =  await logout()
            setUser(null)
        } catch (err) {
            console.log(err);
        }finally {
            setLoading(false);
        }
    }

    return { user, loding, handleLogin, handleRegister, handleLogout }
}