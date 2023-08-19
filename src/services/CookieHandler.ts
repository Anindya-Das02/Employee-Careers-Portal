import Cookies from "js-cookie";

class CookieHandler{

    deleteAuthCookies = () => {
        try{
            Cookies.remove("user-email")
            Cookies.remove("user-password")
            return true;
        }catch(error){
            console.error(error)
        }
        return false;
    }

}


export default CookieHandler;