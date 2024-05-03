import { Button } from "antd"
import { useStore } from "@/libs/zustand/store";

const ColumnButton = ({ taskTakingDetail }: any) => {
    const getModalOpen = useStore((state:any) => state.getModalOpen)
    const getTaskTakingDetail = useStore((state:any) => state.getTaskTakingDetail)
    return (
        <Button
            type="primary"
            onClick={() => {
                getModalOpen(true);
                getTaskTakingDetail({
                    taskName: taskTakingDetail?.task?.taskName,
                    deadLine: taskTakingDetail?.task?.deadLine,
                })
            }}
        >
            Edit Task
        </Button>
    )
};

export default ColumnButton;
