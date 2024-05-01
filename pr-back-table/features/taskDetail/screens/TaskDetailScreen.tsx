"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { ScheduleOutlined } from '@ant-design/icons';
import SearchForm from "../components/SearchForm";
import { Table, Row } from "antd";
import { columnTaskDetail } from "../data/column";
import { useState, useEffect } from "react";
import getTaskDetailAPI from "../services/getTaskDetailAPI";
import getTaskAPI from "@/features/task/services/getTaskAPI";

const TaskDetailScreen = () => {
    const [taskDetail, setTaskDetail] = useState([])
    const [task, setTask] = useState([])
    useEffect(() => {
        getTaskDetailAPI({
            classNo: 11,
            roomNo: 3
        })
        .then((res) => setTaskDetail(res?.response?.data))
        .catch((err) => console.log(err))

        getTaskAPI({
            classNo: 11,
            roomNo: 3
        })
        .then((res) => setTask(res?.response?.data))
        .catch((err) => console.log(err))
    }, [])
    
    const handleOnFinish = async (values: any) => {
        const resTaskDetail = await getTaskDetailAPI(values);
        const resTask = await getTaskAPI(values);
        if (resTask?.success && resTaskDetail?.success) {
            setTaskDetail(resTaskDetail?.response?.data);
            setTask(resTask?.response?.data);
        } else {
            setTaskDetail([])
            setTask([])
        };
    };
    return (
        <LayoutPage>
            <LayoutContent
                title="Task Detail"
                icon={<ScheduleOutlined />}
            >
                <SearchForm
                    handleOnFinish={handleOnFinish}
                />
                <Row>
                    <Table
                        columns={columnTaskDetail(task)}
                        dataSource={taskDetail || []}
                        rowKey="id"
                        scroll={{ y: "35vh" }}
                        pagination={false}
                    />
                </Row>
            </LayoutContent>
        </LayoutPage>
    );
};

export default TaskDetailScreen;