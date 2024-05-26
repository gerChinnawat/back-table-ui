import appConfig from "@/config/app.config";
import axios from "axios";

export const uploadImageAPI = async (body: any) => {
    try {
        const res = await axios.post(appConfig.service_url + "/upload_image", body);

        return res.data;
    } catch (err: any) {
        console.log(err);
        return err?.response?.data
    }
};