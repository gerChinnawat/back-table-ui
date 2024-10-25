"use client";
import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { BankOutlined } from '@ant-design/icons';
import { Table, Row, Col, message, Image } from "antd";
import { column } from "../data/column";
import { useState, useEffect } from "react";
import getTransactions from "../services/getTransaction";
import updateTransaction from "../services/updateTransaction";
import EditTransactionModal from "../components/EditModal";
import { useStore } from "@/libs/zustand/store";

const TransactionScreen = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [transaction, setTransaction] = useState<any[]>([]);
    const [pageSize, setPageSize] = useState(5);
    const [selectedRecord, setSelectedRecord] = useState<any>()
    const [visible, setVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const getTransaction = useStore((state:any) => state.getTransaction);
    const updatedTransaction = useStore((state:any) => state.transaction);

    useEffect(() => {
        getTransactions({
            year: '2024'
        })
        .then((res) => {
            if(res?.success) {
                setTransaction(res?.response?.data);
            };
        })
    }, [])

    const handleOnOpen = () => {

    }

    const handleOnChangePage = (current_page: number) => {
        console.log(current_page)
    }

    const handleOnImageRef = () => {
        setVisible(true);
    };

    const handlOnClickEdit = () => {
        setIsModalOpen(true);
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
    }

    const onFinish = async () => {
        const res: any = await updateTransaction({
            transactionId: updatedTransaction?.id,
            isVerify: updatedTransaction.isVerify || false,
            status: updatedTransaction.status || 'pending',
            remark: updatedTransaction.remark || '',
        })
        onMessageSend({ isSuccess: res.success, message: res.response.message })
        if (res.success) {
            getTransactions({
                year: '2024'
            })
            .then((res) => {
                if(res?.success) {
                    setTransaction(res?.response?.data);
                    setIsModalOpen(false);
                };
            })
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
        <LayoutPage>
            <LayoutContent
                title="Transaction"
                icon={<BankOutlined />}
            >
                {/* <SearchForm
                    handleOnFinish={handleOnFinish}
                    handleOnUpdate={handleOnUpdate}
                    loading={isLoading}
                /> */}
                <Row>
                    <Col xs={24} sm={24} md={42} lg={24} xl={24} xxl={24}>
                        <Table
                            columns={column(handleOnImageRef, handlOnClickEdit)}
                            dataSource={ transaction || []}
                            rowKey="id"
                            scroll={{ y: '55vh', x: 'max-content' }}
                            pagination={{
                                pageSize: pageSize, 
                                showSizeChanger: true, 
                                pageSizeOptions: ['5', '10', '15'], 
                                onShowSizeChange: (current, size) => setPageSize(size),
                                onChange: (event) => handleOnChangePage(event)
                            }}
                            onRow={(record) => ({
                                onClick: () => {
                                    setSelectedRecord(record)
                                    getTransaction(record)
                                },
                            })}
                        />
                    </Col>
                </Row>
                <Image
                    src={selectedRecord?.image_ref || ''}
                    alt="Pay slip"
                    style={{ display: 'none' }}
                    preview={{
                        visible,
                        src: `${selectedRecord?.image_ref || ''}`,
                        onVisibleChange: (value) => {
                            setVisible(value);
                        },
                    }}
                />
                <EditTransactionModal
                    isModalOpen={isModalOpen}
                    handleCancel={handleModalCancel}
                    onFinish={onFinish}
                />
            </LayoutContent>
        </LayoutPage>
        </>
    );
};

export default TransactionScreen;