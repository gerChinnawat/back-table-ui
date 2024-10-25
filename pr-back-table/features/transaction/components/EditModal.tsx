"use client";
import { Modal, Form, Row, Col, Input, Button, Radio } from "antd";
import moment from "moment";
import { useStore } from "@/libs/zustand/store";
import React, { useRef, useEffect, useState } from 'react';

const { TextArea } = Input;

const EditTransactionModal = ({ isModalOpen, handleCancel, onFinish }: any) => {
    const [ form ] = Form.useForm();
    const editedTransaction = useStore((state:any) => state.editedTransaction);
    const selectedTransaction = useStore((state:any) => state.transaction);
    const [isLoading, setIsLoading] = useState(false);

    form.setFieldsValue({
        status: selectedTransaction.status || '',
        remark: selectedTransaction.remark || '',
    })

    return (
        <Modal
            title="Transaction Detail"
            open={isModalOpen}
            onCancel={handleCancel}
            centered
            footer={null}
        >
            <Form
                onFinish={onFinish}
                form={form}
            >
                <div style={{ background: '#f5f5f5', padding: '1.25rem', borderRadius: '8px' }}>
                    <Row>
                        <p><b>Name:</b> {selectedTransaction?.prefix} {selectedTransaction?.firstname} {selectedTransaction?.lastname}</p>
                    </Row>
                    <Row style={{ marginTop: "12px" }}>
                        <p><b>Total Fee:</b> {selectedTransaction?.total_fee}</p>
                    </Row>
                    <Row style={{ marginTop: "12px" }}>
                        <p><b>Sign Up At:</b> {moment(selectedTransaction?.createdAt).format('DD/MM/YYYY HH:MM A')}</p>
                    </Row>
                    <Row style={{ marginTop: "12px" }}>
                        <p><b>Phone Number:</b> {selectedTransaction?.phone_number}</p>
                    </Row>
                    <Row style={{ marginTop: "12px" }}>
                        <p><b>School:</b> {selectedTransaction?.school_name}</p>
                    </Row>
                    <Row style={{ marginTop: "12px" }}>
                        <p><b>Province:</b> {selectedTransaction?.city}</p>
                    </Row>
                </div>
                <Row style={{ marginTop: "12px" }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item
                            label="Status:"
                            name="status"
                            required
                        >
                            <Radio.Group
                                onChange={(event) => editedTransaction({
                                    ...selectedTransaction,
                                    status: event.target.value,
                                })}
                            >
                                <Radio value={'pending'} style={{ color: '#ffc433' }}>Pending</Radio>
                                <Radio value={'success'} style={{ color: '#40e72d' }}>Success</Radio>
                                <Radio value={'cancle'} style={{ color: 'red' }}>Cancle</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item
                            label="Remark:"
                            name="remark"
                        >
                            <TextArea
                                autoSize={{ minRows: 2, maxRows: 2 }}
                                onChange={(event) => editedTransaction({
                                    ...selectedTransaction,
                                    remark: event.target.value,
                                })}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[12, 0]} justify={"center"}>
                    <Col>
                        <Button
                            htmlType="submit"
                            type="primary"
                            loading={isLoading}
                        >
                            Save
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            type="default"
                            onClick={(event: any) => {
                                handleCancel(event)
                            }}
                            loading={isLoading}
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default EditTransactionModal;