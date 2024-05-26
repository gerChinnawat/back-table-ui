"use client";
import { Modal, Form, Row, Col, Input, Button, Upload, Checkbox, Image } from "antd";
import moment from "moment";
import { UploadOutlined, CameraOutlined } from '@ant-design/icons';
import { useStore } from "@/libs/zustand/store";
import appConfig from "@/config/app.config";
import React, { useRef, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';


const { TextArea } = Input;

const EditTaskTakingDetailModal = ({ isModalOpen, handleCancel, onFinish, taskName, deadLine }: any) => {
    const [ form ] = Form.useForm();
    const editeTaskTaking = useStore((state:any) => state.editeTaskTaking);
    const getEditeTaskTaking = useStore((state:any) => state.getEditeTaskTaking);
    const [image, setImage] = useState('');
    const [cameraData, setCameraData] = useState({
        width: 0,
        height: 0,
    })

    const videoRef: any = useRef(null);
    const canvasRef: any = useRef(null);
    const [state, setState] = useState({
        isCameraOn: false,
        isCapture: false,
    });
    
    const OpenCamera = async (event: any) => {
        let stream = await navigator.mediaDevices.getUserMedia({ video: isMobile ? { facingMode: { exact: 'environment' } } : true, audio: false });
        const {width, height} = stream.getVideoTracks()[0].getSettings();
        setCameraData({
            width: width || 0,
            height: height || 0,
        })
        videoRef.current.srcObject = stream;
        setState({
            ...state,
            isCameraOn: true
        })
    };

    const CloseCamera = async () => {
        const tracks = await videoRef.current.srcObject.getTracks();
        tracks[0].stop();

        setState({
            ...state,
            isCameraOn: false
        })
    };

    const captureImage = async (event: any) => {
        const canvas = document.createElement('canvas');
        const context:any = canvas.getContext('2d');
        canvas.width = cameraData.width;
        canvas.height = cameraData.height;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const image_data_url = canvas.toDataURL('image/png');
        const image_bob = canvas.toBlob((result) => result);
        console.log(image_bob)
        setImage(image_data_url);
        setState({
            ...state,
            isCapture: true,
        });
    };

    return (
        <Modal
            title="Edit Task Taking"
            open={isModalOpen}
            onCancel={handleCancel}
            centered
            footer={null}
        >
            <Form
                onFinish={onFinish}
                form={form}
            >
                <Row gutter={[0, 0]} style={{ marginTop: "12px" }}>
                    <p>Task Name: {taskName}</p>
                </Row>
                <Row gutter={[0, 0]} style={{ marginTop: "12px" }}>
                    <p>Dead Line: {moment(deadLine).format("DD/MM/YYYY")}</p>
                </Row>
                <Row gutter={[0, 0]} style={{ marginTop: "24px" }}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <Form.Item
                            label="Picture:"
                            required
                        >
                            <Upload
                                action={appConfig.service_url + "/upload_image"}
                                maxCount={1}
                                onChange={(event: any) => {
                                    if (event?.file?.response?.response?.data[0] !== undefined || event?.file?.response?.response?.data[0] !== null) {
                                        getEditeTaskTaking({
                                            ...editeTaskTaking,
                                            picture: event?.file?.response?.response?.data[0],
                                        })
                                    } else {
                                        getEditeTaskTaking({
                                            ...editeTaskTaking,
                                            picture: null,
                                        })
                                    }
                                }}
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[12, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item
                            label="Capture:"
                            required
                        >
                            <Button icon={<CameraOutlined />} onClick={OpenCamera}>Camera</Button>
                            <br />
                            <video ref={videoRef} width={800} height={1300} autoPlay style={{ padding: "12px", paddingBottom: 0 }}/>
                            <br />
                            {state.isCameraOn && <Button style={{ marginBottom: '12px' }} onClick={captureImage}>Capture</Button>}
                            <Image
                                src={image}
                                alt=""
                                style={{ padding: "12px", paddingTop: 0 }}
                            />
                            </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[12, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item
                            label="Comment:"
                            name="comment"
                            required
                        >
                            <TextArea
                                rows={4}
                                onChange={(event) => getEditeTaskTaking({
                                    ...editeTaskTaking,
                                    comment: event.target.value,
                                })}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[0, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item
                            label="Status:"
                            name="isActive"
                            required
                        >
                            <Checkbox
                                onChange={(event) => getEditeTaskTaking({
                                    ...editeTaskTaking,
                                    isActive: event.target.checked,
                                })}
                            >Not finish</Checkbox>
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
                            onClick={(event: any) => {
                                getEditeTaskTaking({
                                    taskTakingId: "",
                                    picture: null,
                                    comment: "",
                                    isActive: false,
                                })
                                handleCancel(event)
                                form.setFieldsValue({
                                    picture: null,
                                    comment: "",
                                    isActive: false,
                                })
                                CloseCamera()
                            }}
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default EditTaskTakingDetailModal;