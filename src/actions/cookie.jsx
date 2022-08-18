import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getLogout = () =>{
    return cookies.remove("Authorization", { path: "/" });
}