import appConfig from "@/config/app.config";
import axios from "axios";

const postTaskAPI = async (body: any) => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.post(appConfig.service_url + "/task", 
            {
                ...body,
                isActive: true,
            },
            {
                headers: {
                    "Authorization": token,
                },
            },
        );

        return res.data;
    } catch (err: any) {
        console.log(err);
        return err?.response?.data
    }
};

export default postTaskAPI;