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
                year: "2025",
                testLevel: "",
                classNo: "",
                status: "",
                firstname: "",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                    <Form.Item
                        label="Year :"
                        name="year"
                        required
                        style={{ minWidth: "9rem", marginBottom: 0 }}
                    >
                        <Select
                            defaultValue={"2025"}
                        >
                            {yearList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.name}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Test Level :"
                        name="testLevel"
                        required
                        style={{ minWidth: "11rem", marginBottom: 0 }}
                    >
                        <Select defaultValue={''}>
                            {testLevelList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.name}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Class :"
                        name="classNo"
                        required
                        style={{ minWidth: "9rem", marginBottom: 0 }}
                    >
                        <Select defaultValue={''}>
                            {classList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.classNo}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Status :"
                        name="status"
                        required
                        style={{ minWidth: "11rem", marginBottom: 0 }}
                    >
                        <Select defaultValue={'all'}>
                            {statusList.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value} >{item.name}</Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Firstname :"
                        name="firstname"
                        style={{ minWidth: "10rem", marginBottom: 0 }}
                    >
                        <Input id="firstname" />
                    </Form.Item>
                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={loading}
                        style={{ margin: 0 }}
                    >
                        Search
                    </Button>
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
            </div>
        </Form>
    );
};

export default SearchForm;