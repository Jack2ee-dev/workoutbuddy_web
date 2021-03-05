import {GoogleLogin as Login} from "react-google-login";
import {googleId} from '../../const/OauthConfig';

function responseGoogle(response: Object) {
    console.log(response);
}

function GoogleLogin() {
    return (
        <Login 
        clientId={googleId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />
    )

}

export default GoogleLogin;