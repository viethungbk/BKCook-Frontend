/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
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
import callApi from "../../utils/apiCaller";
import ClassItem from "../../components/class/ClassItem";
import ListClass from "../../components/class/ListClass";

class ListClassPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: []
        };
    }
    componentDidMount() {
        callApi('cooking-classes', 'GET', null).then(res => {
            console.log(res.data)
            this.setState({
                classes: res.data.data.cookingClasses
            });
        });

    }

    render() {
        var { classes } = this.state;

        return (
            <ListClass>
                {this.showClasses(classes)}
            </ListClass>
        );
    }
    showClasses(classes) {
        var result = null;
        if (classes.length > 0) {
            result = classes.map((cookClass, index) => {
                return (
                    <ClassItem
                        key={index}
                        cookClass={cookClass}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
}

export default ListClassPage;
