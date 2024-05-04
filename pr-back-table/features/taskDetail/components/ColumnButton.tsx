import { Button } from "antd"
import { useStore } from "@/libs/zustand/store";

const ColumnButton = ({ taskTakingDetail }: any) => {
    const getModalOpen = useStore((state:any) => state.getModalOpen)
    const getTaskTakingDetail = useStore((state:any) => state.getTaskTakingDetail)
    const getEditeTaskTaking = useStore((state:any) => state.getEditeTaskTaking)
    const editeTaskTaking = useStore((state:any) => state.editeTaskTaking)
    return (
        <Button
            type="primary"
            onClick={() => {
                getModalOpen(true);
                getTaskTakingDetail({
                    taskName: taskTakingDetail?.task?.taskName,
                    deadLine: taskTakingDetail?.task?.deadLine,
                })
                getEditeTaskTaking({
                    ...editeTaskTaking,
                    taskTakingId: taskTakingDetail?.taskTakingId
                })
            }}
        >
            Edit Task
        </Button>
    )
};

export default ColumnButton;
