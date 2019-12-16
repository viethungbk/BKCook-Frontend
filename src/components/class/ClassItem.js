import React, { Component } from "react";
import { Col, Card, CardBody, Badge } from "shards-react";
class ClassItem extends Component {
  render() {
    var { cookClass, index } = this.props;
    const {
      className,
      address,
      startDate,
      shortDescription,
      image
    } = cookClass;
    return (
      <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
        <Card
          small
          className="card-post card-post--1"
          style={{ height: "500px" }}
        >
          <div
            className="card-post__image"
            style={{
              backgroundImage: `url(http://202.191.56.159:2900/${image})`
            }}
          >
            <Badge pill className={`card-post__category`}>
              Lớp học nấu ăn
            </Badge>
            <div className="card-post__author d-flex">
              <a
                href="#"
                className="card-post__author-avatar card-post__author-avatar--small"
                style={{
                  backgroundImage: `url(https://media.cooky.vn/usr/g17/164413/avt/c100x100/cooky-avatar-637064081534824637.JPG)`
                }}
              ></a>
            </div>
          </div>
          <CardBody>
            <h5 className="card-title">
              <a href="#" className="text-fiord-blue">
                {className}
              </a>
            </h5>
            <p className="card-text d-inline-block mb-3">{address}</p>
            <span className="text-muted">{startDate}</span>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default ClassItem;
