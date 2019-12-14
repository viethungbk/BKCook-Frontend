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
import EditMaterial from "./EditMaterial";

const FormMaterial = ({ materialOne }) => (
    <Card small className="mb-4">
        <h6 className="m-0 font-weight-bold" style={{ paddingLeft: '20px', paddingTop: '20px' }}>2. Nguyên liệu</h6>
        <ListGroup className="d-flex flex-row">
            <ListGroupItem className="p-3" style={{ width: '50%' }}>
                <Row>
                    <Col style={{ marginLeft: "30px" }}>
                        <ol style={{ margin: '0', padding: '0' }}>
                            {materialOne.map((material, idx) => (
                                <li key={idx} style={{ padding: '10px', marginLeft: "20px" }}>{material.name} : {material.amount} {material.unit}</li>
                            ))}
                        </ol>
                        <Button theme="accent">Edit</Button>
                    </Col>
                </Row>
            </ListGroupItem>
            <EditMaterial style={{ width: '50%' }} />
        </ListGroup>

    </Card>
);
FormMaterial.propTypes = {
    materialOne: PropTypes.array
};

FormMaterial.defaultProps = {
    materialOne: [
        {
            id: "1",
            recipeId: "1",
            name: "bánh tráng",
            amount: '300',
            unit: 'gam'
        },
        {
            id: "2",
            recipeId: "1",
            name: "Muối tôm",
            amount: '3',
            unit: 'muỗng cà phê'
        },
        {
            id: "3",
            recipeId: "1",
            name: "Hành phi",
            amount: '5',
            unit: 'muỗng cà phê'
        },
        {
            id: "4",
            recipeId: "1",
            name: "Khô gà lá chanh",
            amount: '50',
            unit: 'gam'
        },
    ]
};

export default FormMaterial;
