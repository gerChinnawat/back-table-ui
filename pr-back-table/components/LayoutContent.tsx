"use client";
import React from 'react';
import { Layout, Space, Row, Col } from 'antd';

const { Header, Content } = Layout;

const LayoutContent = ({ children, title, icon, formSearch } : { children: React.ReactNode, title: string, icon: any, formSearch?: React.ReactNode }) => {
    return (
        <Layout style={{ height: "100%", background: "white" }}>
            <Header
                style={{ padding: 0, backgroundColor: "white", fontSize: "24px", marginLeft: '12px', marginTop: -12, marginBottom: "12px"}}
            >
                <Row>
                    <Col flex="100px">
                        <Space
                            direction='horizontal'
                        >
                            <div style={{ fontSize: '1.25rem' }}>{icon}</div>
                            <h1 style={{ marginLeft: "3px", fontSize: '1.25rem' }}>{title}</h1>
                        </Space>
                    </Col>
                    <Col flex="auto">{formSearch}</Col>
                </Row>
            </Header>
            <Content
                style={{
                    background: "white",
                    border: "solid 1px  #E7E8EA",
                    borderRadius: "8px",
                    padding: "24px",
                    fontSize: "16px"
                }}
            >
                {children}
            </Content>
        </Layout>
    );
};

export default LayoutContent;