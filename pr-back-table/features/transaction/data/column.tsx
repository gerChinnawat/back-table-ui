import type { TableColumnsType } from 'antd';
import moment from 'moment';
import { 
    EditOutlined,
    EyeOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';
import { Tag } from 'antd';

interface DataType {
    key: string;
    transactionId?: string;
    prefix?: string;
    firstname?: string;
    lastname?: string;
    school_name?: string;
    city?: string;
    phone_number?: string;
    total_fee?: string;
    image_ref?: string;
    isVerify?: string;
    createdAt?: string;
    updatedAt?: string;
}

export const column = (handleOnImageRef: any, handlOnClickEdit: any): any =>  {

    return ([
        {
            title: 'No',
            width: 60,
            align: "center",
            render: (text: any, record: any, index: any) => `${ index + 1}`,
        },
        {
            title: 'Status',
            width: 80,
            align: "center",
            render: (text: any, record: any, index: any) => {
                if (record.status === 'success') {
                    return <Tag icon={<CheckCircleOutlined />} color="success">Success</Tag>
                } else if (record.status === 'pending') {
                    return <Tag icon={<ClockCircleOutlined />} color="warning">Pending</Tag>
                } else if (record.status === 'cancle') {
                    return <Tag icon={<CloseCircleOutlined />} color="error">Cancle</Tag>
                }
            }
        },
        {
            title: 'Action',
            width: 80,
            align: "center",
            render: (text: any, record: any, index: any) => <div>
                <EyeOutlined style={{ color: 'orange', paddingRight: '0.5rem' }} onClick={handleOnImageRef}/>
                <EditOutlined style={{ color: 'green' }} onClick={handlOnClickEdit} />
            </div>
        },
        {
            key: 'Name',
            title: 'Name',
            width: 220,
            align: "start",
            render: (text: any, record: any, index: any) => `${record.prefix} ${record.firstname} ${record.lastname}`,
        },
        {
            title: 'Total Fee',
            width: 100,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.total_fee}`
        },
        {
            title: 'Sign Up At',
            width: 140,
            align: "center",
            render: (text: any, record: any, index: any) => `${moment(record.createdAt).format('DD/MM/YYYY HH:MM') + ' น.'}`,
        },
        {
            title: 'Phone Number',
            width: 150,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.phone_number}`
        },
        {
            title: 'School',
            width: 150,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.school_name}`,
        },
        {
            title: 'Province',
            width: 150,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.city}`
        },
        {
            title: 'Remark',
            width: 150,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.remark || '-'}`
        },
    ]);
};