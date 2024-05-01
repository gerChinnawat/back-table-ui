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
    const [isLoadingTaskDetail, setIsLoadingTaskDetail] = useState(true);
    const [isLoadingTask, setIsLoadingTask] = useState(true);

    useEffect(() => {
        getTaskDetailAPI({
            classNo: 11,
            roomNo: 3
        })
        .then((res) => {
            if (res?.success) {
                setTaskDetail(res?.response?.data);
                setIsLoadingTaskDetail(false);
            };
        })
        .catch((err) => console.log(err))

        getTaskAPI({
            classNo: 11,
            roomNo: 3
        })
        .then((res) => {
            setTask(res?.response?.data);
            setIsLoadingTask(false);
        })
        .catch((err) => console.log(err))
    }, [])
    
    const handleOnFinish = async (values: any) => {
        const resTaskDetail = await getTaskDetailAPI(values);
        const resTask = await getTaskAPI(values);
        setIsLoadingTaskDetail(true)
        setIsLoadingTask(true);
        if (resTask?.success && resTaskDetail?.success) {
            setTaskDetail(resTaskDetail?.response?.data);
            setTask(resTask?.response?.data);
            setTimeout(() => {
                setIsLoadingTaskDetail(false);
                setIsLoadingTask(false);
            }, 500);
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
                    loading={isLoadingTaskDetail || isLoadingTask}
                />
                <Row>
                    <Table
                        columns={columnTaskDetail(task)}
                        dataSource={taskDetail || []}
                        rowKey="id"
                        scroll={{ y: "35vh" }}
                        pagination={false}
                        loading={isLoadingTaskDetail || isLoadingTask}
                    />
                </Row>
            </LayoutContent>
        </LayoutPage>
    );
};

export default TaskDetailScreen;