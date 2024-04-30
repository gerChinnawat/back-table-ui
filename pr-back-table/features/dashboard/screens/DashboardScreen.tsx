import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { UserOutlined } from '@ant-design/icons';

const DashbaordScreen = () => {
    return (
        <LayoutPage>
            <LayoutContent
                title="Dashboard"
                icon={<UserOutlined />}
            >
                Dashboard
            </LayoutContent>
        </LayoutPage>
    );
};

export default DashbaordScreen;