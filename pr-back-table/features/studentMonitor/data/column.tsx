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
        dataIndex: 'student_number',
        width: 30,
        align: "center",
    },
    {
        key: 'id',
        title: 'Student Id',
        dataIndex: 'id',
        width: 60,
        align: "center",
    },
    {
        title: 'Name',
        width: 120,
        align: "start",
        render: (item: any) => `${item?.prename} ${item?.name} ${item?.surname}` ,
    },
    {
        title: 'Class',
        width: 40,
        align: "center",
        render: (item: any) => `${item?.class_now - 9}/${item?.room}`
    },
    {
        title: 'Attendance',
        dataIndex: 'attendance_count',
        width: 60,
        align: "center",
    },
    {
        title: 'Attendance(%)',
        dataIndex: 'attendance_percentage',
        width: 70,
        align: "center",
    },
    {
        title: 'Task Taking',
        dataIndex: 'taskTaking_count',
        width: 60,
        align: "center",
    },
    {
        title: 'Task Taking(%)',
        dataIndex: 'taskTaking_percentage',
        width: 70,
        align: "center",
    },
];