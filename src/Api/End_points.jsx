
import Post from "./urls/post";
import get from "./urls/get";

const EndPoints = {
    Auth:{
        signup:(data)=>Post('/signup', data),
        login:(data)=>Post('/login', data),
        verify_email:(data) => Post('/verify-email', data),
        otpresend:(data)=>Post('/resend-activation', data),
        forgotpassword:(data)=>Post('/forgot-password', data),
        resetPassword:(data)=>Post('/reset-password', data),
    },
    profile:{
        prof:()=>get('/profile')
    }
}
export default EndPoints;