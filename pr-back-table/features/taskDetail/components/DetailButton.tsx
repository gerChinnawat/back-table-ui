import { Button } from "antd";
import { useRouter } from "next/navigation";

const DetailButton = () => {
    const router = useRouter();
    return (
        <Button 
            type="primary"
            onClick={() => {
                router.push("task_taking_detail");
            }}
        >
            Detail
        </Button>
    );
};

export default DetailButton;