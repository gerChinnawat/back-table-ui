"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    ScheduleOutlined,
    BankOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Row } from 'antd';
import { useStore } from "@/libs/zustand/store";
import DropdownList from './Dropdown';

const { Header, Sider, Content} = Layout;

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(true);
    const router = useRouter();
    const key = useStore((state: any) => state.key)
    const getKey = useStore((state:any) => state.getKey)
    const email = useStore((state:any) => state.email)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleOnClick = ({ key } : { key: string }) => {
        router.push(key);
        getKey(key);
    };

    return (
    <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                items={[
                    {
                        key: '/transaction',
                        icon: <BankOutlined />,
                        label: 'Transaction',
                    },
                    // {
                    //     key: '/',
                    //     icon: <ScheduleOutlined />,
                    //     label: 'Test Taking',
                    // },
                    // {
                    //     key: '/task',
                    //     icon: <ProfileOutlined />,
                    //     label: 'Task',
                    // },
                ]}
                onClick={handleOnClick}
                selectedKeys={[ key ]}
            />
        </Sider>
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <Row justify={"end"}>
                    {/* <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                        }}
                    /> */}
                    <div>
                        <a style={{ marginRight: '1rem', fontSize: '0.9rem' }}>{email}</a>
                        <DropdownList>
                            <UserOutlined style={{ fontSize: "18px", marginRight: "24px" }} />
                        </DropdownList>
                    </div>
                </Row>
            </Header>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
                >
                {children}
            </Content>
        </Layout>
    </Layout>
);
};

export default LayoutPage;