import { useState } from 'react';
import { Button, Modal, Form, Col, Row, Select, Input, DatePicker } from 'antd';
import { classList, roomList } from "@/data/dataList";
import moment from 'moment';

const AddTaskModal = ({ isModalOpen, handleCancel, onFinish, initialValues }: any) => {

    return (
        <Modal title="Add Task" open={isModalOpen} onCancel={handleCancel} centered footer={null}>
            <Form
                onFinish={onFinish}
                initialValues={{
                    classNo: 10,
                    roomNo: 1,
                    taskName: "",
                    deadLine: "",
                }}
            >
                <Row gutter={[12, 0]} style={{ marginTop: "24px" }}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <Form.Item
                            label="Class:"
                            name="classNo"
                            required
                        >
                            <Select defaultValue={10}>
                                {classList.map((item) => {
                                    return (
                                        <Select.Option key={item.id} value={item.value} >{item.classNo}</Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <Form.Item
                            label="Room:"
                            name="roomNo"
                            required
                        >
                            <Select defaultValue={1}>
                                {roomList.map((item) => {
                                    return (
                                        <Select.Option key={item.id} value={item.value} >{item.roomNo}</Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[12, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item
                            label="Task Name:"
                            name="taskName"
                            required
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[12, 0]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <Form.Item
                            label="Dead line:"
                            name="deadLine"
                            required
                        >
                            <DatePicker
                                format='DD/MM/YYYY'
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[12, 0]} justify={"center"}>
                    <Col>
                        <Button
                            htmlType="submit"
                            type="primary"
                        >
                            Save
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            type="default"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default AddTaskModal;