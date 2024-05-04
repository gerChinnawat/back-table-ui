import moment from "moment";
import ColumnButton from "../components/ColumnButton";
import { Image } from "antd";

export const  taskTakingColumn = () => {
    const column: any[] = 
    [
        {
            title: 'No',
            width: 50,
            align: "center",
            render: (text: any, record: any, index: any) => index + 1,
        },
        {
            title: 'Task Name',
            width: 100,
            align: "center",
            render: (item: any) => item?.task?.taskName
        },
        {
            title: 'Dead Line',
            width: 70,
            align: "center",
            render: (item: any) => moment(item?.task?.deadLine).format("DD/MM/YYYY"),
        },
        {
            title: 'Picture',
            width: 200,
            dataIndex: 'picture',
            align: "center",
            render: (item: any) => item === null ? "-" : <Image alt="" src={item} width={200} height={100}/>,
        },
        {
            title: 'Comment',
            width: 100,
            dataIndex: 'comment',
            align: "start",
            render: (item: any) => item === null ? "-" : item,
        },
        {
            title: 'Status',
            width: 60,
            align: "center",
            render: (item: any) => item?.isActive ? "-" : "ส่งแล้ว"
        },
        {
            title: 'Action',
            width: 70,
            align: "center",
            render: (item: any) => <ColumnButton taskTakingDetail={item} />
        }
    ];

    return column
}