"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { FileTextOutlined } from "@ant-design/icons";
import TaskTakingDetailCard from "../components/TaskTakingDetailCard";
import { Table } from "antd";
import { taskTakingColumn } from "../data/taskTakingColumn";
import { useEffect, useState } from "react";
import getTaskTakinfAPI from "../services/getTaskTakingAPI";
import EditTaskTakingDetailModal from "../components/EditTaskTakingDetailModal";
import { useStore } from "@/libs/zustand/store";

const TaskTakingDetailScreen = () => {
    const [taskTaking, setTaskTaking ] = useState([]);
    const modalOpen = useStore((state: any) => state.modalOpen);
    const getModalOpen = useStore((state:any) => state.getModalOpen);
    const studentDetail = useStore((state: any) => state.studentDetail);
    const taskTakingDetail = useStore((state: any) => state.taskTakingDetail);

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

    return (
        <>
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
                    scroll={{ y: "40vh" }}
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
        />
        </>
        
    );
};

export default TaskTakingDetailScreen;