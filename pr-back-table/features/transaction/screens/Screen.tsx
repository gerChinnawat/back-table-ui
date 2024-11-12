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
import SearchForm from "./../components/SearchForm"

interface TransactionBody {
    year: string;
    page: number;
    pageSize: number;
}

const TransactionScreen = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [transaction, setTransaction] = useState<any[]>([]);
    const [body, setBody] = useState<any>({
        year: '2024',
        page: 1,
        pageSize: 15,
        pageTotal: 1
    });
    const [selectedRecord, setSelectedRecord] = useState<any>()
    const [visible, setVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const getTransaction = useStore((state:any) => state.getTransaction);
    const updatedTransaction = useStore((state:any) => state.transaction);

    useEffect(() => {
        handleGetTransaction(body);
    }, [])

    const handleOnOpen = () => {

    };

    const handleGetTransaction = async ( transactionBody : TransactionBody) => {
        const res = await getTransactions(transactionBody);
        if (res?.success) {
            setTransaction(res?.response?.data?.transactionData);
            setBody({
                year: '2024',
                page: res?.response?.data?.page,
                pageSize: res?.response?.data?.pageSize,
                pageTotal: res?.response?.data?.totalPages,
            })
        }
    };

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
            transactionId: updatedTransaction?.transactionId,
            isVerify: updatedTransaction.isVerify || false,
            status: updatedTransaction.status || 'pending',
            remark: updatedTransaction.remark || '',
        })
        onMessageSend({ isSuccess: res.success, message: res.response.message })
        if (res.success) {
            getTransactions({
                year: '2024',
                page: body.page,
                pageSize: body.pageSize,
            })
            .then((res) => {
                if(res?.success) {
                    setTransaction(res?.response?.data?.transactionData);
                    setBody({
                        year: '2024',
                        page: res?.response?.data?.page,
                        pageSize: res?.response?.data?.pageSize,
                        pageTotal: res?.response?.data?.totalPages,
                    })
                    setIsModalOpen(false);
                };
            })
        };
    };

    const handleOnFinish = () => {

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
                /> */}
                <Row>
                    <Col xs={24} sm={24} md={42} lg={24} xl={24} xxl={24}>
                        <Table
                            columns={column(handleOnImageRef, handlOnClickEdit, body.page, body.pageSize)}
                            dataSource={ transaction || []}
                            rowKey="id"
                            scroll={{ y: '50vh', x: 'max-content' }}                      
                            pagination={{
                                current: body.page,
                                total: body.pageTotal,
                                pageSize: body.pageSize, 
                                showSizeChanger: true, 
                                pageSizeOptions: ['10', '20', '50'],
                                onChange: (page, pageSize ) => {
                                    handleGetTransaction({
                                        ...body,
                                        page: page,
                                        pageSize: pageSize,
                                    })
                                },
                                locale: { items_per_page: '' },
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