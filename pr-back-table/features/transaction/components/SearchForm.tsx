"use client";
import { Form, Select, Row, Col, Button } from "antd";
import { classList, roomList } from "@/data/dataList";
import { useStore } from "@/libs/zustand/store";
import { isMobile } from "react-device-detect";

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
            <Row gutter={[isMobile ? 12 : 36, 0]} style={{ marginTop: "24px" }}>
                <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} style={{ marginLeft: "12px" }}>
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
                <Col xs={6} sm={6} md={6} lg={6} xl={4} xxl={4} style={{ marginLeft: "12px" }}>
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
                <Col xs={4} sm={6} md={6} lg={6} xl={4} xxl={4} style={{ display: "flex", alignItems: "end", marginBottom: "24px", marginLeft: "12px" }}>
                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={loading}
                        style={{ margin: 0 }}
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;