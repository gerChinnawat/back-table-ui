"use client";
import { Form, Select, Row, Col, Button, Input } from "antd";
import { classList, roomList, yearList, testLevelList, statusList } from "@/data/dataList";
import { useStore } from "@/libs/zustand/store";
import { CSVLink } from "react-csv";

const SearchForm = ({ handleOnFinish, loading, csvData }: any) => {

    const onFinish = (value: any) => {
        handleOnFinish(value)
    };
    
    return (
        <Form
            layout="horizontal"
            onFinish={onFinish}
            initialValues={{
                year: "2024",
                testLevel: "",
                classNo: "",
                status: "",
                firstname: "",
            }}
            style={{ borderRadius: "6px", marginLeft: '0.5rem' }}
        >
            <Row align='middle'>
                {/* <Col style={{ marginTop: '1.5rem', marginInline: '0.5rem' }}>
                    <Form.Item
                        label="Year :"
                        name="year"
                        required
                        style={{ width: "9rem" }}
                    >
                        <Select
                            defaultValue={"2024"}
                            disabled
                        >
                            {yearList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.name}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col> */}
                <Col style={{ marginTop: '1.5rem', marginInline: '0.5rem' }}>
                    <Form.Item
                        label="Test Level :"
                        name="testLevel"
                        required
                        style={{ width: "11rem" }}
                    >
                        <Select defaultValue={''}>
                            {testLevelList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.name}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col style={{ marginTop: '1.5rem', marginInline: '0.5rem' }}>
                    <Form.Item
                        label="Class :"
                        name="classNo"
                        required
                        style={{ width: "9rem" }}
                    >
                        <Select defaultValue={''}>
                            {classList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.classNo}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col style={{ marginTop: '1.5rem', marginInline: '0.5rem' }}>
                    <Form.Item
                        label="Status :"
                        name="status"
                        required
                        style={{ width: "11rem" }}
                    >
                        <Select defaultValue={'all'}>
                            {statusList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.name}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col style={{ marginTop: '1.5rem', marginInline: '0.5rem' }}>
                    <Form.Item
                        label="Firstname :"
                        name="firstname"
                        style={{ width: "13rem" }}
                    >
                        <Input id="firstname" />
                    </Form.Item>
                </Col>
                <Col style={{ marginInline: '0.25rem' }}>
                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={loading}
                        style={{ margin: 0 }}
                    >
                        Search
                    </Button>
                </Col>
                <Col style={{ marginInline: '0.25rem' }}>
                    <Button
                        htmlType="submit"
                        type='default'
                        loading={loading}
                        style={{ margin: 0, backgroundColor: "green", color: "white" }}
                    >
                        <CSVLink
                            data={csvData || []}
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                            filename={"transaction_pr_contest.csv"}
                        >
                            Export
                        </CSVLink>
                    </Button>
                </Col>
                {/* <Col style={{ marginInline: '0.25rem' }}>
                    <Button
                        htmlType="submit"
                        type='default'
                        loading={loading}
                        style={{ margin: 0, backgroundColor: "gray", color: "white" }}
                    >
                        Import
                    </Button>
                </Col> */}
            </Row>
        </Form>
    );
};

export default SearchForm;