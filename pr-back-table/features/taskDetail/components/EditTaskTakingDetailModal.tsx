import { Modal, Form, Row, Col, Input, Button, Upload, Checkbox } from "antd";
import moment from "moment";
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const EditTaskTakingDetailModal = ({ isModalOpen, handleCancel, onFinish, taskName, deadLine }: any) => {
    return (
        <Modal title="Edit Task Taking" open={isModalOpen} onCancel={handleCancel} centered footer={null}>
            <Form
                onFinish={onFinish}
                initialValues={{
                    comment: "",
                    isActive: false,
                }}
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
                            name="picture"
                            required
                        >
                            <Upload>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
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
                            <Checkbox>Is Finish</Checkbox>
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

export default EditTaskTakingDetailModal;