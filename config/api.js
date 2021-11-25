import axios from "axios";

const baseURL = "http://ec2-52-14-118-47.us-east-2.compute.amazonaws.com/api/v1/"
// const baseURL = "http://192.168.1.73:5000/api/v1/"
// const baseURL = "https://3b59-202-51-88-149.ngrok.io/api/v1"
// const baseURL = "https://api.swasthyasamriddhi.com/api/v1"

export const pubClient = axios.create({
        baseURL,
    })
// export const privClient;