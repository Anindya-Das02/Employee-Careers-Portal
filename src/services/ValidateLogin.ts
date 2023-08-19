import Cookies from "js-cookie";

class ValidateLogin{

    authenticationValid= () => {
        const email = Cookies.get("user-email") as string;
        const password = Cookies.get("user-password") as string;

        return (
        email != null &&
        email.trim().length != 0 &&
        password != null &&
        password.trim().length != 0
        );
    }
}

export default ValidateLogin;

