import React, { Component } from "react";
import PropTypes from "prop-types";
import ReadMoreReact from 'read-more-react';
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
class ClassItem extends Component {
    render() {
        var { cookClass, index } = this.props;
        return (
            <Col lg="3" md="6" sm="12" className="mb-4" key={index} >
                <Card small className="card-post card-post--1">
                    <div
                        className="card-post__image"
                        style={{ backgroundImage: `url(https://media.cooky.vn/cookingclass/s/cooky-cookingclass-cover-c292.jpg)` }}
                    >
                        <Badge
                            pill
                            className={`card-post__category`}
                        >
                            Lớp Học Làm Kẹo
                        </Badge>
                        <div className="card-post__author d-flex">
                            <a
                                href="#"
                                className="card-post__author-avatar card-post__author-avatar--small"
                                style={{ backgroundImage: `url(https://media.cooky.vn/usr/g17/164413/avt/c100x100/cooky-avatar-637064081534824637.JPG)` }}
                            >
                                Written by thu hương
                            </a>
                        </div>
                    </div>
                    <CardBody>
                        <h5 className="card-title">
                            <a href="#" className="text-fiord-blue">
                                {cookClass.title}
                            </a>
                        </h5>
                        <p className="card-text d-inline-block mb-3">{cookClass.address}</p>
                        <span className="text-muted">{cookClass.startDate}</span>
                    </CardBody>
                    <Button theme="warning" style={{ width: '60px', margin: '10px auto', padding: '10px' }}>
                        Chi tiết
                    </Button>
                </Card>
            </Col>
        )
    }
}


export default ClassItem;
