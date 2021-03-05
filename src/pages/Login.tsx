import GoogleLogin from "../components/login/GoogleLogin";
import {RouteComponentProps} from 'react-router-dom';


function Login(componentProps: RouteComponentProps) {
    console.log(qs.parse(componentProps.location.search));
    
    return (
        <div>
            <GoogleLogin/>
        </div>
    )
}

export default Login;