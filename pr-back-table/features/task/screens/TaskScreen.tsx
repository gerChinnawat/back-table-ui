"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { ProfileOutlined } from '@ant-design/icons';
import SearchForm from "../components/SearchForm";
import { Table, Row, message } from "antd";
import { column } from "../data/column";
import { useState, useEffect } from "react";
import getTaskAPI from "../services/getTaskAPI";
import AddTaskModal from "../components/AddTaskModal";
import postTaskAPI from "../services/postTaskAPI";

const TaskScreen = () => {
    const [task, setTask] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        getTaskAPI({
            classNo: 10,
            roomNo: 1
        })
        .then((res) => {
            if (res?.success) {
                setTask(res?.response?.data);
                setIsLoading(false);
            }
        })
        .catch((err) => console.log(err))
    }, [])
    
    const handleOnFinish = async (values: any) => {
        const res = await getTaskAPI(values);
        setIsLoading(true);
        if (res?.success) {
            setTask(res?.response?.data);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        } else {
            setTask([])
        }
    };

    const handleOnAddTask = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const handleOnCreate = async (values: any) => {
        setIsLoading(true);
        const res = await postTaskAPI(values)
        if (res?.success) {
            setIsModalOpen(false);
            onMessageSend({ isSuccess: true, message: res?.response?.message })
            const resTasks = await getTaskAPI({
                classNo: values?.classNo,
                roomNo: values?.roomNo,
            })
            if (resTasks?.success) {
                setTask(resTasks?.response?.data);
                setIsLoading(false);
            } else {
                onMessageSend({ isSuccess: false, message: resTasks?.response?.message })
            }
        } else {
            onMessageSend({ isSuccess: false, message: res?.response?.message })
        };
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
        <AddTaskModal
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            onFinish={handleOnCreate}

        />
        <LayoutPage>
            <LayoutContent
                title="Task"
                icon={<ProfileOutlined />}
            >
                <SearchForm
                    handleOnFinish={handleOnFinish}
                    loading={isLoading}
                    handleOnAddTask={handleOnAddTask}
                    initialValues={{
                        classNo: 10,
                        roomNo: 1
                    }}
                />
                <Row>
                    <Table
                        columns={column}
                        dataSource={task || []}
                        rowKey="taskId"
                        scroll={{ y: "35vh" }}
                        pagination={false}
                        loading={isLoading}
                    />
                </Row>
            </LayoutContent>
        </LayoutPage>
        </>
    );
};

export default TaskScreen;