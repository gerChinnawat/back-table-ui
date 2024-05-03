import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useStore } from "@/libs/zustand/store";

const DetailButton = ({ studentDetail }: any) => {
    const router = useRouter();
    const getStudentDetail = useStore(( state:any ) => state.getStudentDetail)
    return (
        <Button 
            type="primary"
            onClick={() => {
                const { student_id, prename, name, surname, class_now, room } = studentDetail;
                getStudentDetail({
                    student_id,
                    prename,
                    name,
                    surname,
                    classNo: class_now,
                    roomNo: room,
                })
                router.push("task_taking_detail");
            }}
        >
            Detail
        </Button>
    );
};

export default DetailButton;