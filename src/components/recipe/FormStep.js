import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Row, Col, Button } from "shards-react";

class FormStep extends Component {
  render() {
    var { step } = this.props;
    console.log(step);
    return (
      <Card small className="mb-4">
        <h6
          className="m-0 font-weight-bold"
          style={{ paddingLeft: "20px", paddingTop: "20px" }}
        >
          3. Các bước thực hiện
        </h6>
        <ListGroup>
          <ListGroupItem className="p-3">
            <Row>
              <Col style={{ marginLeft: "30px" }}>
                <ul
                  style={{ margin: "0", padding: "0", listStyleType: "none" }}
                >
                  {step.map((step, idx) => (
                    <li key={idx}>
                      <span style={{ fontSize: "18px" }}>
                        <b>Bước {idx + 1}</b> : {step.description}
                      </span>
                      <br></br>
                      <img
                        src={`http://202.191.56.159:2900/${step.image}`}
                        style={{
                          width: "60%",
                          marginLeft: "20%",
                          marginRight: "20%",
                          marginTop: "30px",
                          marginBottom: "30px"
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default FormStep;
