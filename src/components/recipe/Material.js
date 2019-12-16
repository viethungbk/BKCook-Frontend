import React from "react";
import PropTypes from "prop-types";

const Material = ({ materialOne }) => (
  <ol style={{ margin: "0", padding: "0" }}>
    {materialOne.map((material, idx) => (
      <li key={idx}>
        {material.name} : {material.amount} {material.unit}
      </li>
    ))}
  </ol>
);
Material.propTypes = {
  materialOne: PropTypes.array
};

Material.defaultProps = {
  materialOne: [
    {
      id: "1",
      recipeId: "1",
      name: "bánh tráng",
      amount: "300",
      unit: "gam"
    },
    {
      id: "2",
      recipeId: "1",
      name: "Muối tôm",
      amount: "3",
      unit: "muỗng cà phê"
    },
    {
      id: "3",
      recipeId: "1",
      name: "Hành phi",
      amount: "5",
      unit: "muỗng cà phê"
    },
    {
      id: "4",
      recipeId: "1",
      name: "Khô gà lá chanh",
      amount: "50",
      unit: "gam"
    }
  ]
};

export default Material;
