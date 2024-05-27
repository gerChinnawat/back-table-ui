import React from "react";
import { Layout, Flex, Row, Col } from "antd";

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
                <Row>
                    <Col xs={24} sm={24} md={24}>
                        <Content style={contentStyle}>{children}</Content>
                    </Col>
                </Row>
                <Footer style={footerStyle} />
            </Layout>
        </Flex>
    );
};

export default LoginLayout;