import LoginLayout from "../components/LayoutLogin";
import { Space, Card, Input, Button } from "antd";
import Image from "next/image";
import prDigitalImg from "@/public/assets/pr_digital.jpg";
import { UserOutlined } from '@ant-design/icons';
import "../styles/cardLogin.style.css"

const LoginScreen = () => {
    return (
        <LoginLayout>
            <Space
                direction="vertical"
                size={16}
            >
                <Card className="card-login">
                    <Space
                        direction="vertical"
                    >
                        <Image
                            src={prDigitalImg}
                            priority
                            alt=""
                            width={150}
                            height={150}
                            style={{ borderRadius: "100px", marginTop: '20px' }}
                        />
                    </Space>
                    <Input
                        size="large"
                        placeholder="Username"
                        prefix={<UserOutlined />}
                        style={{ marginTop: '20px', marginBottom: '20px' }}
                    />
                    <Input
                        size="large"
                        placeholder="Password"
                        prefix={"@"}
                        style={{ marginTop: '10px', marginBottom: '20px' }}
                    />
                    <Space
                        direction="horizontal"
                    >
                        <Button
                            size="large"
                        >
                            Log in
                        </Button>
                    </Space>
                </Card>
            </Space>
        </LoginLayout>
    );
};

export default LoginScreen;