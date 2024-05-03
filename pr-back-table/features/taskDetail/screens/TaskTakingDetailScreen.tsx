"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { FileTextOutlined } from "@ant-design/icons";
import TaskTakingDetailCard from "../components/TaskTakingDetailCard";
import { Table } from "antd";
import { taskTakingColumn } from "../data/taskTakingColumn";
import { useEffect, useState } from "react";
import getTaskTakinfAPI from "../services/getTaskTakingAPI";

const TaskTakingDetailScreen = () => {
    const [taskTaking, setTaskTaking ] = useState([])


    useEffect(() => {
        getTaskTakinfAPI({ student_id: 15613 })
        .then((res) => {
            if (res?.success) {
                setTaskTaking(res?.response?.data)
            }
        })
        .catch((err) => console.log(err))
    }, []);

    return (
        <LayoutPage>
            <LayoutContent
                title="Task Detail"
                icon={<FileTextOutlined />}
            >
                <TaskTakingDetailCard
                    student_id={"15619"}
                    prename={"เด็กชาย"}
                    name={"รพีภัทร"}
                    surname={"บุญเจริญ"}
                    classNo={11}
                    roomNo={3}
                />
                <Table
                    columns={taskTakingColumn}
                    dataSource={taskTaking || []}
                    scroll={{ y: "40vh" }}
                    pagination={false}
                    rowKey="taskTakingId"
                />
            </LayoutContent>
        </LayoutPage>
    );
};

export default TaskTakingDetailScreen;