"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { VideoCameraOutlined } from '@ant-design/icons';
import SearchForm from "../components/SearchForm";
import { Table, Row, Col } from "antd";
import { column } from "../data/column";
import { useState, useEffect } from "react";
import getMonitoringAPI from "../services/getMonitoringAPI";
import getAssignClassAPI from "../services/getAssignClassAPI";
import { isMobile } from "react-device-detect";

const StudentMonitoringScreen = () => {
    const [monitoring, setMonitoring] = useState([]);
    const [assignClass, setAssignClass] = useState([]);
    const [isLoading, setIdLoading] = useState(true);

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
    return (
        <LayoutPage>
            <LayoutContent
                title="Student Monitoring"
                icon={<VideoCameraOutlined />}
            >
                <SearchForm
                    handleOnFinish={handleOnFinish}
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
    );
};

export default StudentMonitoringScreen;