import appConfig from "@/config/app.config";
import axios from "axios";

const getAssignClassAPI = async () => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.get(appConfig.service_url + "/assign_class", {
                params: {
                    isActive: 1,
                },
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

export default getAssignClassAPI;