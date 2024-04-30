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
        key: 'taskId',
        title: 'Task Id',
        dataIndex: 'taskId',
        width: 150,
        align: "center",
    },
    {
        key: 'taskName',
        title: 'Task Name',
        dataIndex: 'taskName',
        width: 200,
        align: "center",
    },
    {
        key: 'roomNo',
        title: 'Room No',
        dataIndex: 'roomNo',
        width: 100,
        align: "center",
    },
    {
        key: 'classNo',
        title: 'Class No',
        dataIndex: 'classNo',
        width: 100,
        align: "center",
    },
    {
        key: 'isActive',
        title: 'Is Active',
        dataIndex: 'isActive',
        width: 100,
        align: "center",
    },
    {
        key: 'updatedAt',
        title: 'Created At',
        dataIndex: 'updatedAt',
        width: 150,
        align: "center",
        render: (data) => moment(data).format("DD/MM/YYYY") 
    },
];