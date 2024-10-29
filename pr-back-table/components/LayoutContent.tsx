"use client";
import React from 'react';
import { Layout, Space } from 'antd';

const { Header, Content } = Layout;

const LayoutContent = ({ children, title, icon } : { children: React.ReactNode, title: string, icon: any }) => {
    return (
        <Layout style={{ height: "100%", background: "white" }}>
            <Header
                style={{ padding: 0, backgroundColor: "white", fontSize: "24px", marginLeft: '12px', marginTop: -12, marginBottom: "12px"}}
            >
                <Space
                    direction='horizontal'
                >
                    {icon}
                    <h1 style={{ marginLeft: "3px" }}>{title}</h1>
                </Space>
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