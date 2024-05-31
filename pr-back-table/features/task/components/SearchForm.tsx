"use client";
import { Form, Select, Row, Col, Button } from "antd";
import { classList, roomList } from "@/data/dataList";
import { isMobile } from "react-device-detect";

const SearchForm = ({ handleOnFinish, loading, handleOnAddTask, initialValues }: any) => {
    const onFinish = (value: any) => {
        handleOnFinish(value)
    };
    return (
        <Form
            layout="horizontal"
            onFinish={onFinish}
            initialValues={initialValues}
            style={{ border: "solid 1px #E7E8EA", borderRadius: "6px", marginBottom: "24px" }}
        >
            <Row gutter={[36, 0]} style={{ marginTop: "24px" }}>
                <Col xs={10} sm={12} md={8} lg={4} xl={4} xxl={4} style={{ marginLeft: "12px" }}>
                    <Form.Item
                        label="Class :"
                        name="classNo"
                        required
                    >
                        <Select defaultValue={initialValues?.classNo}>
                            {classList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.classNo}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={10} sm={12} md={8} lg={6} xl={4} xxl={4} style={{ marginLeft: "12px" }}>
                    <Form.Item
                        label="Room :"
                        name="roomNo"
                        required
                    >
                        <Select defaultValue={initialValues?.roomNo}>
                            {roomList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.roomNo}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                    <Col xs={10} sm={24} md={8} lg={6} xl={2} xxl={4} style={{ margin: "12px", marginTop: 0 }}>
                        <Button
                            htmlType="submit"
                            type="primary"
                            loading={loading}
                        >
                            Search
                        </Button>
                    </Col>
                    <Col xs={10} sm={24} md={8} lg={6} xl={4} xxl={4} style={{ margin: "12px", marginTop: 0 }}>
                        <Button
                            style={{ backgroundColor: "#001529", color: "white", borderColor: "#001529" }}
                            onClick={handleOnAddTask}
                            loading={loading}
                        >
                            Add Task
                        </Button>
                    </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;