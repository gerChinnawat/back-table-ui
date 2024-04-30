import LayoutPage from "@/components/LayoutPage";
import LayoutContent from "@/components/LayoutContent";
import { VideoCameraOutlined } from '@ant-design/icons';

const StudentMonitoringScreen = () => {
    return (
        <LayoutPage>
            <LayoutContent
                title="StudentMonitoring"
                icon={<VideoCameraOutlined />}
            >
                StudentMonitoring
            </LayoutContent>
        </LayoutPage>
    );
};

export default StudentMonitoringScreen;