import React from "react";
import {
    Container, Row, Col, Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import UserAccountDetails from "../../components/user-profile-lite/UserAccountDetails";
import RecipeDetail1 from "../../components/recipe/RecipeDetail1";
import FormMaterial from "../../components/recipe/FormMaterial";
import Material from "../../components/recipe/Material";
import EditMaterial from "../../components/recipe/EditMaterial";
import FormStep from "../../components/recipe/FormStep";

const RecipeDetail = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
            <PageTitle title="Chi tiết công thức" subtitle="công thức" className="text-sm-left mb-3" />
        </Row>
        <Row>
            <Col lg="4">
                <RecipeDetail1 />
            </Col>
            <Col lg="8">
                <FormMaterial />
                <FormStep />
            </Col>
        </Row>
    </Container>
);

export default RecipeDetail;
