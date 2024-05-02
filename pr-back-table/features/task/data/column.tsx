import type { TableColumnsType } from 'antd';
import moment from 'moment';

interface DataType {
    key: string;
    teskId: string;
    age: number;
    address: string;
}

export const column: TableColumnsType<DataType> = [
    {
        title: 'No',
        width: 50,
        align: "center",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Task Name',
        dataIndex: 'taskName',
        width: 200,
        align: "center",
    },
    {
        title: 'Class',
        width: 100,
        align: "center",
        render: (item) => `${item?.classNo - 9}/${item?.roomNo}`
    },
    {
        title: 'Dead Line',
        dataIndex: 'deadLine',
        width: 150,
        align: "center",
        render: (datetime) => moment(datetime).format("DD/MM/YYYY")
    },
    {
        title: 'Created At',
        dataIndex: 'updatedAt',
        width: 150,
        align: "center",
        render: (data) => moment(data).format("DD/MM/YYYY") 
    },
    {
        title: 'Is Active',
        dataIndex: 'isActive',
        width: 100,
        align: "center",
        render: (item) => item === "1" ? "true" : "false"
    },
];