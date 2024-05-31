"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { FileTextOutlined } from "@ant-design/icons";
import TaskTakingDetailCard from "../components/TaskTakingDetailCard";
import { Table, message } from "antd";
import { taskTakingColumn } from "../data/taskTakingColumn";
import { useEffect, useState } from "react";
import getTaskTakinfAPI from "../services/getTaskTakingAPI";
import EditTaskTakingDetailModal from "../components/EditTaskTakingDetailModal";
import { useStore } from "@/libs/zustand/store";
import { updateTaskTakingAPI } from "../services/updateTaskTakingAPI";
import { isMobile } from "react-device-detect";

const TaskTakingDetailScreen = () => {
    const [taskTaking, setTaskTaking ] = useState([]);
    const modalOpen = useStore((state: any) => state.modalOpen);
    const getModalOpen = useStore((state:any) => state.getModalOpen);
    const studentDetail = useStore((state: any) => state.studentDetail);
    const taskTakingDetail = useStore((state: any) => state.taskTakingDetail);
    const editeTaskTaking = useStore((state:any) => state.editeTaskTaking);
    const getEditeTaskTaking = useStore((state:any) => state.getEditeTaskTaking);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        getTaskTakinfAPI({ student_id: studentDetail.student_id })
        .then((res) => {
            if (res?.success) {
                setTaskTaking(res?.response?.data)
            }
        })
        .catch((err) => console.log(err))
    }, []);

    const handleCancel = () => {
        getModalOpen(false);
    };

    const handleFileName = (value: any) => {
        getEditeTaskTaking({
            ...editeTaskTaking,
            picture: value,
        })
    } 

    const onFinish = async () => {
        const res = await updateTaskTakingAPI(editeTaskTaking);
        if (!res?.success) {
            onMessageSend({ isSuccess: false, message: res?.response?.message })
        } else {
            onMessageSend({ isSuccess: true, message: res?.response?.message })
            getModalOpen(false);

            getTaskTakinfAPI({ student_id: studentDetail.student_id })
            .then((resTaskTaking) => {
                if (resTaskTaking?.success) {
                    setTaskTaking(resTaskTaking?.response?.data)
                }
            })
            .catch((err) => console.log(err))
        }
    };

    const onMessageSend = ({ isSuccess, message } : { isSuccess: boolean, message: string }) => {
        messageApi.open({
            type: isSuccess ? "success" : "error",
            content: message,
        });
    };

    return (
        <>
        {contextHolder}
        <LayoutPage>
            <LayoutContent
                title="Task Detail"
                icon={<FileTextOutlined />}
            >
                <TaskTakingDetailCard
                    student_id={studentDetail.student_id}
                    prename={studentDetail.prename}
                    name={studentDetail.name}
                    surname={studentDetail.surname}
                    classNo={studentDetail.classNo}
                    roomNo={studentDetail.roomNo}
                />
                <Table
                    columns={taskTakingColumn()}
                    dataSource={taskTaking || []}
                    scroll={{ y: isMobile ? "20hv" : "60hv" }}
                    pagination={false}
                    rowKey="taskTakingId"
                />
            </LayoutContent>
        </LayoutPage>
        <EditTaskTakingDetailModal
            taskName={taskTakingDetail?.taskName}
            deadLine={taskTakingDetail?.deadLine}
            isModalOpen={modalOpen}
            handleCancel={handleCancel}
            onFinish={onFinish}
            handleFileName={handleFileName}
        />
        </>
        
    );
};

export default TaskTakingDetailScreen;