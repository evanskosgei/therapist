import Post from "./urls/post";

const EndPoints = {
    Auth:{
        signup:(data)=>Post('/authentication/signup', data),
    },
}
export default EndPoints;