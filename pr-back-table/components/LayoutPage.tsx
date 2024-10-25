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
import { isMobile } from 'react-device-detect';

const { Header, Sider, Content} = Layout;

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    const key = useStore((state: any) => state.key)
    const getKey = useStore((state:any) => state.getKey)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleOnClick = ({ key } : { key: string }) => {
        router.push(key);
        getKey(key);
    };

    return (
    <Layout style={{ height: "100vh" }}>
        {!isMobile && <Sider trigger={null} collapsible collapsed={collapsed}>
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
                    {
                        key: '/',
                        icon: <ScheduleOutlined />,
                        label: 'Test Taking',
                    },
                    // {
                    //     key: '/task',
                    //     icon: <ProfileOutlined />,
                    //     label: 'Task',
                    // },
                ]}
                onClick={handleOnClick}
                selectedKeys={[ key ]}
            />
        </Sider>}
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                        {!isMobile ? 
                        <Row justify={"space-between"}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                                }}
                            />
                            <div>
                                <UserOutlined
                                    style={{ fontSize: "18px", marginRight: "24px" }}
                                    onClick={() => router.push("/")}
                                />
                            </div>
                        </Row> 
                        : 
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            items={[
                                {
                                    key: '/student_monitoring',
                                    label: 'Transaction',
                                },
                                {
                                    key: '/task_detail',
                                    label: 'Test Taking',
                                },
                                // {
                                //     key: '/task',
                                //     label: 'Task',
                                // },
                                // {
                                //     key: '/',
                                //     label: 'Logout',
                                // },
                            ]}
                            onClick={handleOnClick}
                            selectedKeys={[ key ]}
                        />
                        }
            </Header>
            <Content
                style={{
                    margin: isMobile ?  "" : '24px 16px',
                    padding: isMobile ?  12 : 24,
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