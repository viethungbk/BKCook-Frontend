import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button
} from "shards-react";
import EditStep from "./EditStep";

const FormStep = ({ recipeOne }) => (
    <Card small className="mb-4">
        <h6 className="m-0 font-weight-bold" style={{ paddingLeft: '20px', paddingTop: '20px' }}>3. Các bước thực hiện</h6>
        <ListGroup className="d-flex flex-row">
            <ListGroupItem className="p-3">
                <Row>
                    <Col style={{ marginLeft: "30px" }}>
                        <ol style={{ margin: '0', padding: '0' }}>
                            {recipeOne.map((step, idx) => (
                                <li key={idx} ><span style={{ fontSize: '18px' }}>{step.description}</span>
                                    <br></br>
                                    <img
                                        src={step.image}
                                        width="300"
                                        height="200"
                                        style={{ margin: '15px' }}
                                    />
                                    <Button theme="accent">Edit</Button>
                                </li>
                            ))}
                        </ol>
                    </Col>
                </Row>
            </ListGroupItem>
            <EditStep />
        </ListGroup>
    </Card>
);
FormStep.propTypes = {
    recipeOne: PropTypes.array
};

FormStep.defaultProps = {
    recipeOne: [
        {
            id: "1",
            recipeId: "1",
            description: "Làm mềm bánh tráng bằng nước hoặc phơi sương qua đêm",
            image: "https://media.cooky.vn/recipe/g5/48604/s320x320/cooky-recipe-636983832728775132.jpg"
        },
        {
            id: "2",
            recipeId: "1",
            description: "Cho hành tím phi vào trộn đều",
            image: "https://media.cooky.vn/recipe/g5/48604/s320x320/cooky-recipe-636983832965831510.jpg"
        },
        {
            id: "3",
            recipeId: "1",
            description: "Cho muối vào",
            image: "https://media.cooky.vn/recipe/g5/48604/s480x480/cooky-recipe-636983833148671084.jpg"
        },
        {
            id: "4",
            recipeId: "1",
            description: "Cho khô gà vào trộn đều là hoàn thành rồi",
            image: "https://media.cooky.vn/recipe/g5/48604/s320x320/cooky-recipe-636983833446796112.jpg"
        },
    ]
};

export default FormStep;
