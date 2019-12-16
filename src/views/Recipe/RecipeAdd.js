import React from "react";
import {
    Container, Row, Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import EditMaterial from "../../components/recipe/EditMaterial";
import EditStep from "../../components/recipe/EditStep";
import AddRecipeDetail from "../../components/recipe/AddRecipeDetail";

const RecipeAdd = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
            <PageTitle title="Thêm công thức" subtitle="công thức" className="text-sm-left mb-3" />
        </Row>
        <Row>
            <Col lg="4">
                <AddRecipeDetail />
            </Col>
            <Col lg="8">
                <EditMaterial />
                <EditStep />
            </Col>
        </Row>
    </Container>
);

export default RecipeAdd;
