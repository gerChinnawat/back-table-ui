import appConfig from "@/config/app.config";
import axios from "axios";

const getMonitoringAPI = async ({ class_now, room_now }: { class_now: number, room_now: number }) => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.get(appConfig.service_url + "/student_monitor", {
                params: {
                    class_now,
                    room_now
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

export default getMonitoringAPI;