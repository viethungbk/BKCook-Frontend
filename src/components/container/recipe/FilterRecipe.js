import React from 'react';

class FilterRecipe extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Lọc công thức
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            List trường để lọc
          </div>
        </div>
      </div>
    )
  }
}

export default FilterRecipe;