import { useState } from "react";
import LoginLayout from "../components/LayoutLogin";
import { Space, Card, Input, Button } from "antd";
import Image from "next/image";
import prDigitalImg from "@/public/assets/pr_digital.jpg";
import { UserOutlined } from '@ant-design/icons';
import "../styles/cardLogin.style.css"
import { useRouter } from "next/navigation";
import { useStore } from "@/components/LayoutPage";
import userLogin from "../services/userLogin";

const LoginScreen = () => {
    const [sentState, setSentState] = useState({
        username: "",
        password: ""
    });
    const router = useRouter();
    const getKey = useStore((state:any) => state.getKey);

    const handleOnLogin = async () => {
        const res = await userLogin(sentState)
        if (!res.success) {
            alert(res?.response?.message)
        } else {
            alert(res?.response?.message)
            localStorage.setItem("key", res?.response?.data[0])
            router.push('dashboard');
            getKey('/dashboard');
        };
    };

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
                        style={{ marginTop: '40px', marginBottom: '20px' }}
                        onChange={(event) => setSentState({
                            ...sentState,
                            username: event.target.value
                        })}
                    />
                    <Input.Password
                        size="large"
                        placeholder="Password"
                        prefix={"@"}
                        style={{ marginTop: '10px', marginBottom: '20px' }}
                        onChange={(event) => setSentState({
                            ...sentState,
                            password: event.target.value
                        })}
                    />
                    <Space
                        direction="horizontal"
                    >
                        <Button
                            size="large"
                            onClick={handleOnLogin}
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