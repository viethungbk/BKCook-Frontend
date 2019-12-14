import React from "react";
import {
    Container, Row, Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import UserDetails from "../../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../../components/user-profile-lite/UserAccountDetails";


const RecipeDetail = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
            <PageTitle title="Chi tiết người sử dụng" subtitle="người sử dụng" className="text-sm-left mb-3" />
        </Row>
        <Row>
            <Row>
                <Col lg="4">
                    <UserDetails />
                </Col>
                <Col lg="8">
                    <UserAccountDetails />
                </Col>
            </Row>
        </Row>
    </Container>
);

export default RecipeDetail;
