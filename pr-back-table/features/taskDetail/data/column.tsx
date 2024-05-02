"use client";

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
                    width: 60,
                    align: "center",
                    render: (item: any) => {
                        const countSum = count;
                        count = 0;
                        return `${countSum}/${tasks.length}`
                    }
                }
            ]
        } else {
            fullColumn = [
                ...fullColumn,
                {
                    title: tasks[index].taskName,
                    width: 60,
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
