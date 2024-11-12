import { useState } from "react";
import LoginLayout from "../components/LayoutLogin";
import { Space, Card, Input, Button, message } from "antd";
import Image from "next/image";
import prDigitalImg from "@/public/assets/pr_digital.jpg";
import { UserOutlined } from '@ant-design/icons';
import "../styles/cardLogin.style.css"
import { useRouter } from "next/navigation";
import { useStore } from "@/libs/zustand/store";
import userLogin from "../services/userLogin";
import jwt, { JwtPayload }  from 'jsonwebtoken';

interface DecodedToken {
    data: any;
    exp: number;
    iat: number;
};

const LoginScreen = () => {
    const [sentState, setSentState] = useState({
        username: "",
        password: ""
    });
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const getKey = useStore((state:any) => state.getKey);
    const getUserEmail = useStore((state:any) => state.getUserEmail)

    const handleOnLogin = async () => {
        const res = await userLogin(sentState)
        if (!res?.success) {
            onMessageSend({ isSuccess: false, message: res?.response?.message })
        } else {
            const decoed_token = jwt.decode(res?.response?.data[0]);
            const email = (decoed_token as JwtPayload).data?.email;
            getUserEmail(email)

            onMessageSend({ isSuccess: true, message: res?.response?.message })
            localStorage.setItem("key", res?.response?.data[0])
            getKey('/transaction');
            setTimeout(() => {
                router.push('transaction');
            }, 500);
        };
    };

    const onMessageSend = ({ isSuccess, message } : { isSuccess: boolean, message: string }) => {
        messageApi.open({
            type: isSuccess ? "success" : "error",
            content: message,
        });
    };


    return (
        <>
        {contextHolder}
        <LoginLayout>
            <Space
                direction="vertical"
                size={16}
                style={{ margin: 0, padding: 0 }}
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
                            type="primary"
                            onClick={handleOnLogin}
                        >
                            Log in
                        </Button>
                    </Space>
                </Card>
            </Space>
        </LoginLayout>
        </>
    );
};

export default LoginScreen;