import type { TableColumnsType } from 'antd';
import moment from 'moment-timezone';
import { 
    EditOutlined,
    EyeOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';
import { Tag } from 'antd';
import { convertToTestTaking } from '@/utils/convertToTestTaking';

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

export const column = (handleOnImageRef: any, handlOnClickEdit: any, page: any, pageSize: any): any =>  {

    return ([
        {
            title: 'No',
            width: 60,
            align: "center",
            render: (text: any, record: any, index: any) => `${ (index+1) + (page -1)*pageSize }`,
        },
        {
            title: 'Status',
            width: 50,
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
            width: 100,
            align: "center",
            render: (text: any, record: any, index: any) => <div>
                <EyeOutlined style={{ color: 'orange', paddingRight: '1rem', fontSize: '1.15rem' }} onClick={handleOnImageRef}/>
                <EditOutlined style={{ color: 'green', fontSize: '1.15rem' }} onClick={handlOnClickEdit} />
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
            title: 'Total Amount',
            width: 90,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.total_fee}`
        },
        {
            title: 'Sign Up At',
            width: 165,
            align: "center",
            render: (text: any, record: any, index: any) => `${moment(moment(record.createdAt).tz('Asia/Bangkok')).format('DD/MM/YYYY HH:mm')} น.`,
        },
        {
            title: 'Class',
            width: 120,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.class_no}`
        },
        {
            title: 'Test List',
            width: 150,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.test_list.map((item: string, index: number) => `${index >= 1 ? ' ' + convertToTestTaking(item) : convertToTestTaking(item)}`)}`
        },
        {
            title: 'Last Update By',
            width: 150,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.updatedBy || '-'}`
        },
        {
            title: 'Remark',
            width: 200,
            align: "center",
            render: (text: any, record: any, index: any) => `${record.remark || '-'}`
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
    ]);
};