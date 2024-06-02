import appConfig from "@/config/app.config";
import axios from "axios";

const updateMonitoringAPI = async () => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.patch(appConfig.service_url + "/student_monitor", {},
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

export default updateMonitoringAPI;