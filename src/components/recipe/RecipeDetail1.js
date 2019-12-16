import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    Button,
    ListGroup,
    ListGroupItem,
    Progress
} from "shards-react";
class RecipeDetail1 extends Component {

    render() {
        var { recipe } = this.props;
        var recipeStatus = '';
        switch (recipe.status) {
            case 1:
                recipeStatus = 'ĐANG CHỜ DUYỆT';
                break;
            case -1:
                recipeStatus = 'HỦY';
                break;
            case 2:
                recipeStatus = 'ĐÃ DUYỆT';
                break;
        }

        return (
            <Card small className="mb-4 pt-3">
                <h6 className="m-0 font-weight-bold" style={{ paddingLeft: '20px', paddingTop: '20px' }}>1. Chi tiết công thức</h6>
                <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img
                            src={`http://202.191.56.159:2900/${recipe.image}`}
                            alt={recipe.title}
                            width="280"

                        />
                    </div>
                    <h4 className="mb-0">{recipe.title}</h4>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="px-4">
                        <div className="progress-wrapper">
                            <strong className="text-muted d-block mb-2">
                                Người thực hiện:
                    </strong>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="p-4">
                        <strong className="text-muted d-block mb-2">
                            Ngày tạo: {recipe.dateCreated}
                        </strong>
                        <span>Trạng thái : {recipeStatus}</span>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}

export default RecipeDetail1;
