"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { VideoCameraOutlined } from '@ant-design/icons';
import SearchForm from "../components/SearchForm";
import { Table, Row, Col, message } from "antd";
import { column } from "../data/column";
import { useState, useEffect } from "react";
import getMonitoringAPI from "../services/getMonitoringAPI";
import getAssignClassAPI from "../services/getAssignClassAPI";
import updateMonitoringAPI from "../services/updateMonitoringAPI";
import { isMobile } from "react-device-detect";

const StudentMonitoringScreen = () => {
    const [monitoring, setMonitoring] = useState([]);
    const [assignClass, setAssignClass] = useState<any[]>([]);
    const [isLoading, setIdLoading] = useState(true);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        getAssignClassAPI()
        .then((resAssign) => {
            if(resAssign?.success) {
                setAssignClass(resAssign?.response?.data);
                getMonitoringAPI({ assignClassId: resAssign?.response?.data[0]?.assignClassId })
                .then((res) => {
                    if (res?.success) {
                        setMonitoring(res?.response?.data);
                        setIdLoading(false);
                    }
                });
            };
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

    const handleOnUpdate = async () => {
        setIdLoading(true);
        try {
            const res = await updateMonitoringAPI()
            setIdLoading(true);
            if (!res?.success) {
                onMessageSend({ isSuccess: false, message: res?.response?.message });
            } else {
                onMessageSend({ isSuccess: true, message: res?.response?.message });
                setIdLoading(false);
                getMonitoringAPI({ assignClassId: assignClass[0]?.assignClassId })
                .then((res) => {
                    if (res?.success) {
                        setMonitoring(res?.response?.data);
                        setIdLoading(false);
                    }
                });
            }
        } catch (err) {
            onMessageSend({ isSuccess: false, message: "something went wrong" });
            setIdLoading(false);
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
                title="Student Monitoring"
                icon={<VideoCameraOutlined />}
            >
                <SearchForm
                    handleOnFinish={handleOnFinish}
                    handleOnUpdate={handleOnUpdate}
                    loading={isLoading}
                />
                <Row>
                    <Col xs={24} sm={24} md={42} lg={24} xl={24} xxl={24}>
                        <Table
                            columns={column}
                            dataSource={monitoring || []}
                            rowKey="id"
                            scroll={{ y: isMobile ? "40vh" : "45vh" }}
                            pagination={false}
                            loading={isLoading}
                        />
                    </Col>
                </Row>
            </LayoutContent>
        </LayoutPage>
        </>
    );
};

export default StudentMonitoringScreen;