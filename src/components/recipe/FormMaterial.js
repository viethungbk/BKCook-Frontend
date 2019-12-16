import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Row, Col } from "shards-react";

class FormMaterial extends Component {
  render() {
    var { material } = this.props;
    return (
      <Card small className="mb-4">
        <h6
          className="m-0 font-weight-bold"
          style={{ paddingLeft: "20px", paddingTop: "20px" }}
        >
          2. Nguyên liệu
        </h6>
        <ListGroup>
          <ListGroupItem className="p-3">
            <Row>
              <Col style={{ marginLeft: "30px" }}>
                <ol style={{ margin: "0", padding: "0" }}>
                  {material.map((material, idx) => (
                    <li
                      key={idx}
                      style={{ padding: "10px", marginLeft: "20px" }}
                    >
                      {material.name} : {material.quantitative} {material.unit}
                    </li>
                  ))}
                </ol>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default FormMaterial;
