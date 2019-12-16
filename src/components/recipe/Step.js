import React from "react";
import PropTypes from "prop-types";

const Step = ({ recipeOne }) => (
    <ol style={{ margin: '0', padding: '0' }}>
        {recipeOne.map((step, idx) => (
            <li key={idx}>{step.description}
                <br></br>
                <img
                    src={step.image}
                    width="110"
                    height="60"
                />
            </li>
        ))}
    </ol>
);
Step.propTypes = {
    recipeOne: PropTypes.array
};

Step.defaultProps = {
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

export default Step;
