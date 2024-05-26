"use client";
import DetailButton from "../components/DetailButton";

export const columnTaskDetail = (tasks: any[]) => {
    const column: any[] = [
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
            width: 50,
            align: "center",
        },
        {
            title: 'Name',
            width: 100,
            align: "start",
            render: (item: any) => `${item?.prename} ${item?.name} ${item?.surname}` ,
        },
        {
            title: 'Class',
            width: 30,
            align: "center",
            render: (item: any) => `${item?.class_now - 9}/${item?.room}`
        },
    ];

    let fullColumn: any[] = column;
    let count: number = 0;
    let widthCount = 0;
    for (let index=0; index<tasks?.length+1 ; index++) {
        if (index === tasks?.length) {
            fullColumn = [
                ...fullColumn,
                {
                    title: "สรุป",
                    width: 30,
                    align: "center",
                    render: (item: any) => {
                        const countSum = count;
                        count = 0;
                        return `${countSum}/${tasks.length}`
                    },
                },
                {
                    title: "Action",
                    width: 30,
                    align: "center",
                    render: (item: any) => {
                        return <DetailButton studentDetail={item} />
                    },
                }
            ]
        } else {
            fullColumn = [
                ...fullColumn,
                {
                    title: tasks[index].taskName,
                    width: 80,
                    align: "center",
                    render: (item: any) => {
                        if (!item?.tasks[index]?.isActive) {
                            count = count + 1;
                        }
                        return `${item?.tasks[index]?.isActive ? "-" : "เสร็จ"}`
                    }
                }
            ]
        }
        
    }

    for (let indexFullColumn = 0; indexFullColumn<fullColumn.length ; indexFullColumn++) {
        widthCount = widthCount + fullColumn[indexFullColumn].width
    }

    return { widthCount, fullColumn };
}
