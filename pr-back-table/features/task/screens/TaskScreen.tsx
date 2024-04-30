import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { ProfileOutlined } from '@ant-design/icons';

const TaskScreen = () => {
    return (
        <LayoutPage>
            <LayoutContent
                title="Task"
                icon={<ProfileOutlined />}
            >
                Task
            </LayoutContent>
        </LayoutPage>
    );
};

export default TaskScreen;