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
        width: 60,
        align: "center",
        render: (item: any) => `${item?.student_detail?.student_number}`,
    },
    {
        key: 'student_id',
        title: 'Student Id',
        dataIndex: 'student_id',
        width: 120,
        align: "center",
    },
    {
        title: 'Name',
        width: 200,
        align: "start",
        render: (item: any) => `${item?.student_detail?.prename} ${item?.student_detail?.name} ${item?.student_detail?.surname}` ,
    },
    {
        title: 'Class',
        width: 70,
        align: "center",
        render: (item: any) => `${item?.student_detail?.class_now - 9}/${item?.student_detail?.room}`
    },
    {
        title: 'Attendance',
        width: 120,
        align: "center",
        render: (item: any) => `${item?.attendance_count === null ? '-' : item?.attendance_count}`
    },
    {
        title: 'Attendance(%)',
        width: 140,
        align: "center",
        render: (item: any) => `${item?.attendance_percentage === null ? '-' : item?.attendance_percentage}`
    },
    {
        title: 'Task Taking',
        width: 120,
        align: "center",
        render: (item: any) => `${item?.taskTaking_count === null ? '-' : item?.taskTaking_count}`
    },
    {
        title: 'Task Taking(%)',
        width: 140,
        align: "center",
        render: (item: any) => `${item?.taskTaking_percentage === null ? '-' : item?.taskTaking_percentage}`
    },
];