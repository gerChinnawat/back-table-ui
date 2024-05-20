"use client";
import { Form, Select, Row, Col, Button } from "antd";
import { useEffect, useState } from "react";
import getAssignClassAPI from "../services/getAssignClassAPI";

const SearchForm = ({ handleOnFinish, loading }: any) => {
    const [assignClass, setAssignClass] = useState([]);

    const onFinish = (value: any) => {
        handleOnFinish(value)
    };

    useEffect(() => {
        getAssignClassAPI()
        .then((resAssign) => {
            if(resAssign?.success) {
                setAssignClass(resAssign?.response?.data);
            };
        })
    }, [])

    return (
        <Form
            layout="horizontal"
            onFinish={onFinish}
            style={{ border: "solid 1px #E7E8EA", borderRadius: "6px", marginBottom: "24px" }}
        >
            <Row gutter={[36, 0]} style={{ marginTop: "24px" }}>
                <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} style={{ marginLeft: "12px" }}>
                    <Form.Item
                        label="Class :"
                        name="assignClassId"
                        required
                    >
                        <Select>
                            {assignClass.map((item: any) => {
                                return (
                                    <Select.Option
                                        key={item?.assignClassId}
                                        value={item?.assignClassId}
                                    >
                                        {`ม.${Number(item?.class)-9}/${item?.room}`}
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
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