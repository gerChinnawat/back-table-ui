import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { ProfileOutlined } from '@ant-design/icons';
import SearchForm from "../components/SearchForm";

const TaskScreen = () => {
    return (
        <LayoutPage>
            <LayoutContent
                title="Task"
                icon={<ProfileOutlined />}
            >
                <SearchForm />
            </LayoutContent>
        </LayoutPage>
    );
};

export default TaskScreen;