import appConfig from "@/config/app.config";
import axios from "axios";

const updateTransaction = async (bodyUpdate: any) => {
    try {
        const token = localStorage.getItem("key");
        const res = await axios.put(appConfig.service_url + "/transaction_admin", 
            bodyUpdate,
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

export default updateTransaction;