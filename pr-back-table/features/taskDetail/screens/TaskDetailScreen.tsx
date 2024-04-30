import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { ScheduleOutlined } from '@ant-design/icons';

const TaskDetailScreen = () => {
    return (
        <LayoutPage>
            <LayoutContent
                title="Task Detail"
                icon={<ScheduleOutlined />}
            >
                Task Detail
            </LayoutContent>
        </LayoutPage>
    );
};

export default TaskDetailScreen;