import React from "react";
import {
    Container, Row, Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import DetailClassUI from "../../components/class/DetailClassUI";


const DetailClass = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
            <PageTitle title="Chi tiết lớp học" subtitle="lớp học" className="text-sm-left mb-3" />
        </Row>
        <Row>
            <DetailClassUI />
        </Row>
    </Container>
);

export default DetailClass;
