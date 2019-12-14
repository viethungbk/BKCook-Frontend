import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    Button,
    ListGroup,
    ListGroupItem,
    Progress
} from "shards-react";

const RecipeDetail1 = ({ recipeDetail }) => (
    <Card small className="mb-4 pt-3">
        <h6 className="m-0 font-weight-bold" style={{ paddingLeft: '20px', paddingTop: '20px' }}>1. Chi tiết công thức</h6>
        <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
                <img
                    src={recipeDetail.image}
                    alt={recipeDetail.name}
                    width="280"

                />
            </div>
            <h4 className="mb-0">{recipeDetail.name}</h4>
        </CardHeader>
        <ListGroup flush>
            <ListGroupItem className="px-4">
                <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">
                        Người thực hiện: {recipeDetail.author}
                    </strong>
                </div>
            </ListGroupItem>
            <ListGroupItem className="p-4">
                <strong className="text-muted d-block mb-2">
                    Ngày tạo: {recipeDetail.create}
                </strong>
                <span>Trạng thái : {recipeDetail.status}</span>
            </ListGroupItem>
        </ListGroup>
    </Card>
);
RecipeDetail1.propTypes = {
    /**
     * The user details object.
     */
    recipeDetail: PropTypes.object
};

RecipeDetail1.defaultProps = {
    recipeDetail:
    {
        id: "1",
        name: "Bánh tráng trộn hành phi",
        author: "Bờ Ka",
        image: "https://massageishealthy.com/wp-content/uploads/2019/06/nguyen-lieu-cach-lam-banh-trang-tron-sai-gon-don-gian-tai-nha-thumb.png",
        create: "10/11/2019",
        status: "action"
    }
};

export default RecipeDetail1;
