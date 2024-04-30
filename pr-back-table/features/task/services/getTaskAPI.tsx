import appConfig from "@/config/app.config";
import axios from "axios";

const getTaskAPI = async ({ classNo, roomNo }: { classNo: number, roomNo: number }) => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.get(appConfig.service_url + "/task", {
                params: {
                    classNo,
                    roomNo
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

export default getTaskAPI;