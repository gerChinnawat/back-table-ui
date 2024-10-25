import appConfig from "@/config/app.config";
import axios from "axios";

const getTransaction = async (body: any) => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.post(appConfig.service_url + "/transaction_admin/all", 
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

export default getTransaction;