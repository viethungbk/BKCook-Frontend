import React from "react";
import {
    Container, Row, Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import EditUserUI from "../../components/user-profile-lite/EditUserUI";


const EditUser = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
            <PageTitle title="Chỉnh sửa người sử dụng" subtitle="người sử dụng" className="text-sm-left mb-3" />
        </Row>
        <Row>
            <EditUserUI />
        </Row>
    </Container>
);

export default EditUser;
