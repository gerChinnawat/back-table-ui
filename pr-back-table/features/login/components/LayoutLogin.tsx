import React from "react";
import { Layout, Flex } from "antd";

const { Header, Footer, Content } = Layout;

const layoutStyle = {
    height: "100%"
};

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: "15vh",
    backgroundColor: 'white',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: "70vh",
    color: '#fff',
    backgroundColor: 'white',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'white',
    height: "15vh"
};

const LoginLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <Header style={headerStyle} />
                <Content style={contentStyle}>{children}</Content>
                <Footer style={footerStyle} />
            </Layout>
        </Flex>
    );
};

export default LoginLayout;