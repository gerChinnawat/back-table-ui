import { Card, Row, Col, Space } from 'antd';

const TaskTakingDetailCard = ({ student_id, prename, name, surname, classNo, roomNo }: any) => {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={24} xxl={24} style={{ marginBottom: "12px" }}>
                <Card title={null} bordered={false} >
                    <p>Student Id: {student_id}</p>
                    <p>Card content: {prename} {name} {surname}</p>
                    <p>Class: {classNo - 9}/{roomNo}</p>
                </Card>
            </Col>
        </Row>
    );
};

export default TaskTakingDetailCard;