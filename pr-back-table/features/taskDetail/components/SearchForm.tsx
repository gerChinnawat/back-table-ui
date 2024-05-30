"use client";
import { Form, Select, Row, Col, Button } from "antd";
import { classList, roomList } from "@/data/dataList";
import { useStore } from "@/libs/zustand/store";
import { useState } from "react";

const SearchForm = ({ handleOnFinish, loading }: any) => {
    const searchParamsTakingTask = useStore((state:any) => state.searchParamsTakingTask);

    const onFinish = (value: any) => {
        handleOnFinish(value)
    };
    
    return (
        <Form
            layout="horizontal"
            onFinish={onFinish}
            initialValues={searchParamsTakingTask}
            style={{ border: "solid 1px #E7E8EA", borderRadius: "6px", marginBottom: "24px" }}
        >
            <Row gutter={[36, 0]} style={{ marginTop: "24px" }}>
                <Col xs={12} sm={12} md={8} lg={4} xl={4} xxl={4} style={{ marginLeft: "12px" }}>
                    <Form.Item
                        label="Class :"
                        name="classNo"
                        required
                    >
                        <Select
                            defaultValue={searchParamsTakingTask.classNo}
                        >
                            {classList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.classNo}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4} style={{ marginLeft: "12px" }}>
                    <Form.Item
                        label="Room :"
                        name="roomNo"
                        required
                    >
                        <Select defaultValue={searchParamsTakingTask.roomNo}>
                            {roomList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.roomNo}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8} lg={6} xl={4} xxl={4} style={{ margin: "12px", marginTop: 0 }}>
                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={loading}
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;