"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    ScheduleOutlined,
    ProfileOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const LayoutPage = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [collapsed, setCollapsed] = useState(false);
    const key = localStorage.getItem("key") || 'dashboard';
    const router = useRouter();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
    <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[key]}
                items={[
                    {
                        key: 'dashboard',
                        icon: <UserOutlined />,
                        label: 'Dashboard',
                    },
                    {
                        key: 'student_monitoring',
                        icon: <VideoCameraOutlined />,
                        label: 'Student Monitoring',
                    },
                    {
                        key: 'task_detail',
                        icon: <ScheduleOutlined />,
                        label: 'Task Detail',
                    },
                    {
                        key: 'task',
                        icon: <ProfileOutlined />,
                        label: 'Task',
                    },
                ]}
                onSelect={(event) => {
                    router.push(event.key);
                    localStorage.setItem("key", event.key);
                }}
                selectedKeys={[key]}
            />
        </Sider>
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
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