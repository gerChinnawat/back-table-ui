"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { VideoCameraOutlined } from '@ant-design/icons';
import SearchForm from "../components/SearchForm";
import { Table, Row } from "antd";
import { column } from "../data/column";
import { useState, useEffect } from "react";
import getMonitoringAPI from "../services/getMonitoringAPI";

const StudentMonitoringScreen = () => {
    const [monitoring, setMonitoring] = useState([]);
    const [isLoading, setIdLoading] = useState(true);

    useEffect(() => {
        getMonitoringAPI({ class_now: 11, room_now: 3 })
        .then((res) => {
            if (res?.success) {
                setMonitoring(res?.response?.data);
                setIdLoading(false);
            }
        })
    }, [])

    const handleOnFinish = async (values: any) => {
        setIdLoading(true)
        const res = await getMonitoringAPI(values);
        if (res?.success) {
            setMonitoring(res?.response?.data)
            setIdLoading(false);
        } else {
            setMonitoring([]);
        }
    };
    return (
        <LayoutPage>
            <LayoutContent
                title="StudentMonitoring"
                icon={<VideoCameraOutlined />}
            >
                <SearchForm
                    handleOnFinish={handleOnFinish}
                />
                <Row>
                    <Table
                        columns={column}
                        dataSource={monitoring || []}
                        rowKey="id"
                        scroll={{ y: "35vh" }}
                        pagination={false}
                        loading={isLoading}
                    />
                </Row>
            </LayoutContent>
        </LayoutPage>
    );
};

export default StudentMonitoringScreen;