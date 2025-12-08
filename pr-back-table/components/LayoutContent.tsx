"use client";
import React from 'react';
import { Layout, Space, Row, Col } from 'antd';

const { Header, Content } = Layout;

const LayoutContent = ({ children, title, icon, formSearch } : { children: React.ReactNode, title: string, icon: any, formSearch?: React.ReactNode }) => {
    return (
        <Layout style={{ background: "white", display: "flex", gap: "12px", flexWrap: "wrap", maxHeight: "max-content"  }}>
            <div style={{ background: "white", display: "flex", alignItems: "center", padding: 0, gap: "16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "6px"}}>
                    <div style={{ fontSize: '1.25rem' }}>{icon}</div>
                    <h1 style={{ fontSize: '1.25rem' }}>{title}</h1>
                </div>
                <div
                    style={{ marginLeft: "12px"}}
                >
                    {formSearch}</div>
            </div>
            <div
                className="max-h-[60vh] overflow-y-auto md:max-h-[70vh]"
                style={{
                    background: "white",
                    border: "solid 1px  #E7E8EA",
                    borderRadius: "8px",
                    fontSize: "16px",
                    maxWidth: "100%",
                }}
            >
                {children}
            </div>
        </Layout>
    );
};

export default LayoutContent;