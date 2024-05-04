import appConfig from "@/config/app.config";
import axios from "axios";

export const updateTaskTakingAPI = async (body: any) => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.patch(appConfig.service_url + "/task_taking", 
        body,
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