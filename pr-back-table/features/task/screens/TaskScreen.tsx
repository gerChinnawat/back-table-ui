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
    useEffect(() => {
        getTaskAPI()
        .then((res) => setTask(res?.response?.data))
        .catch((err) => console.log(err))
    }, [])
    return (
        <LayoutPage>
            <LayoutContent
                title="Task"
                icon={<ProfileOutlined />}
            >
                <SearchForm />
                <Row>
                    <Table
                        columns={column}
                        dataSource={task || []}
                        rowKey="taskId"
                        scroll={{ y: "35vh" }}
                        pagination={false}
                    />
                </Row>
            </LayoutContent>
        </LayoutPage>
    );
};

export default TaskScreen;