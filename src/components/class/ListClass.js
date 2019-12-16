import React, { Component } from "react";
import {
    Container,
    Row,
} from "shards-react";
import PageTitle from "../../components/common/PageTitle";

class ListClass extends Component {
    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Danh sách lớp học" subtitle="Lớp học" className="text-sm-left" />
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </Container>
        )
    }
};


export default ListClass;
