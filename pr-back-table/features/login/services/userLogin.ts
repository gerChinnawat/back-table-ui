import axios from "axios"
import appConfig from "@/config/app.config"

type LoginBody = {
    username: string;
    password: string;
}

const userLogin = async (body: LoginBody) => {
    const { username, password } = body;
    try {
        const res = await axios.post(appConfig.service_url + "/login", {
            username,
            password,
        })
        
        return res.data;
    } catch (err: any) {
        console.log(err);
        return err?.response?.data
    }
};

export default userLogin;