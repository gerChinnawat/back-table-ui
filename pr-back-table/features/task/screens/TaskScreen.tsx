"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { ProfileOutlined } from '@ant-design/icons';
import SearchForm from "../components/SearchForm";
import { Table, Row } from "antd";
import { column } from "../data/column";
import { useState, useEffect } from "react";
import getTaskAPI from "../services/getTaskAPI";

const TaskScreen = () => {
    const [task, setTask] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getTaskAPI({
            classNo: 11,
            roomNo: 3
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

    return (
        <LayoutPage>
            <LayoutContent
                title="Task"
                icon={<ProfileOutlined />}
            >
                <SearchForm
                    handleOnFinish={handleOnFinish}
                    loading={isLoading}
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
    );
};

export default TaskScreen;