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
class BlogItem extends Component {
	render() {
		var { blog, index } = this.props;
		return (
			<Col lg="6" sm="12" className="mb-4" key={index}>
				<Card small className="card-post card-post--aside card-post--1">
					<CardBody>
						<h5 className="card-title p-3" style={{ fontSize: '25px', height: '100px', lineHeight: '30px' }}>
							<a className="text-fiord-blue" href="#">
								{blog.title}
							</a>
						</h5>
						<div className="read-me card-text d-inline-block mb-3">
							<img
								src={`http://202.191.56.159:2900/${blog.image}`}
								className="img-fluid mb-3"
								style={{ width: '600px', height: '300px' }}
							/>
							<ReadMoreReact text={`${blog.content}`}
								min={70}
								ideal={100}
								max={200}
								readMoreText={'read more'}
								style={{ fontSize: '18px' }} />
						</div>
						<Button theme="warning" style={{ width: '60px', margin: '10px auto', padding: '10px' }}>
							Chi tiết
          	</Button>
					</CardBody>
				</Card>
			</Col>
		)
	}
}


export default BlogItem;
