import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Material from "../components/recipe/Material";
import Step from "../components/recipe/Step";

const Recipe = ({ recipeOne }) => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
      <PageTitle title="Danh sách công thức" subtitle="recipe" className="text-sm-left mb-3" />
    </Row>

  </Container>

);

export default Recipe;
