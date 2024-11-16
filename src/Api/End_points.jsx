import Post from "./urls/post";

const EndPoints = {
    Auth:{
        signup:(data)=>Post('/signup', data),
        login:(data)=>Post('', data),
        verify_email:(data) => Post('/verify-email', data),
        otpresend:(data)=>Post('/resend-activation', data),
        forgotpassword:(data)=>Post('/forgot-password', data),
    },
}
export default EndPoints;