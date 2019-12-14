import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button
} from "shards-react";
import PageTitle from "../../components/common/PageTitle";

class BlogList extends Component {
    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Danh sách bài viết " subtitle="Bài viết" className="text-sm-left" />
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </Container>
        )
    }
};


export default BlogList;
