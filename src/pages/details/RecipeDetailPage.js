import React, { useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import Layout from '../../components/Layout'
import { recipeActions } from '../../actions/recipeActions'
import { Container, Row, Col } from 'shards-react'
import { API_URL } from '../../constants/Config'
import ListRecipe from '../../components/container/recipe/ListRecipe'


// const RecipeDetailPage = ({ match }) => {
//   const dispatch = useDispatch()

//   const { idRecipe } = match.params

//   let recipe = useSelector(state => state.currentRecipeReducer)
//   // let { totalRecords, recipes } = useSelector(state => state.relatedRecipeReducer)

//   useEffect(() => {
//     dispatch(recipeActions.clean())
//     dispatch(recipeActions.fetchRecipe(idRecipe))
//     dispatch(recipeActions.getRelatedRecipe(idRecipe))
//   }, [])


//   console.log(recipe)
//   let { image, materials, shortDescription, steps, title } = recipe
//   console.log(materials, steps)
//   return (
//     <Layout>
//       <Container className='mt-100'>
//         <Row>
//           <Col
//             lg="7"
//             className="mb-8"
//             style={{ width: "30%", marginRight: "2%", background: "white" }}
//           >
//             <img
//               src={`${API_URL}/${image}`}
//               style={{
//                 width: "100%",
//                 marginBottom: "20px",
//                 borderRadius: "10px"
//               }}
//             />
//             <div
//               style={{
//                 height: "70px",
//                 paddingTop: "20px",
//                 textAlign: "center"
//               }}
//             >
//               <h3>{title}</h3>
//             </div>
//           </Col>
//           <Col
//             lg="4"
//             className="mb-4"
//             style={{ width: "30%", background: "white" }}
//           >
//             <div
//               style={{
//                 height: "70px",
//                 paddingTop: "20px"
//               }}
//             >
//               <h6>Material</h6>
//             </div>
//             <Row>
//               <Col style={{ marginLeft: "30px" }}>
//                 <ol style={{ margin: "0", padding: "0" }}>
//                   {
//                     materials && materials.length > 0 && materials.map((material, index) => (
//                       <li key={index} style={{ padding: "10px", marginLeft: "20px" }}>
//                         {`${material.name}: ${material.quantitative} ${material.unit}`}
//                       </li>
//                     ))
//                   }
//                 </ol>
//               </Col>
//             </Row>
//             <p>{shortDescription}</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col
//             lg="6"
//             className="mb-8"
//             style={{ width: "30%", marginTop: "5%", background: "white" }}
//           >
//             <ul style={{ margin: "0", padding: "0", listStyleType: "none" }}>
//               {
//                 steps && steps.length > 0 && steps.map((step, index) => (
//                   <li key={index}>
//                     <span style={{ fontSize: "18px" }}>
//                       <b>Bước {step.stepNumber}</b>
//                       <p>{step.description}</p>
//                     </span>
//                     <br />>
//                     <img
//                       src={`${API_URL}/${step.image}`}
//                       style={{
//                         width: "60%",
//                         marginLeft: "20%",
//                         marginRight: "20%",
//                         marginTop: "30px",
//                         marginBottom: "30px"
//                       }}
//                     />
//                   </li>
//                 ))
//               }
//             </ul>
//           </Col>
//         </Row>
//         <div className='row'>

//           {/* {
//             totalRecords && totalRecords > 0 && <ListRecipe
//                                   title='Công thức liên quan'
//                                   isShowFull={true}
//                                   recipes={recipes}
//                                 />
//           } */}

//         </div>
//       </Container>
//     </Layout>
//   )
// }

// export default RecipeDetailPage

class RecipeDetailPage extends React.Component {
  componentDidMount() {
    const { idRecipe } = this.props.match.params
    this.props.clean()
    this.props.fetchRecipe(idRecipe)
    this.props.getRelatedRecipe(idRecipe)
  }
  render() {
    let { currentRecipe, relatedRecipe } = this.props
    let { image, materials, shortDescription, steps, title } = currentRecipe
    let { totalRecords, recipes } = relatedRecipe
    return (
      <Layout>
      <Container className='mt-100'>
        <Row>
          <Col
            lg="7"
            className="mb-8"
            style={{ width: "30%", marginRight: "2%", background: "white" }}
          >
            <img
              src={`${API_URL}/${image}`}
              style={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "10px"
              }}
            />
            <div
              style={{
                height: "70px",
                paddingTop: "20px",
                textAlign: "center"
              }}
            >
              <h3>{title}</h3>
            </div>
          </Col>
          <Col
            lg="4"
            className="mb-4"
            style={{ width: "30%", background: "white" }}
          >
            <div
              style={{
                height: "70px",
                paddingTop: "20px"
              }}
            >
              <h6>Material</h6>
            </div>
            <Row>
              <Col style={{ marginLeft: "30px" }}>
                <ol style={{ margin: "0", padding: "0" }}>
                  {
                    materials && materials.length > 0 && materials.map((material, index) => (
                      <li key={index} style={{ padding: "10px", marginLeft: "20px" }}>
                        {`${material.name}: ${material.quantitative} ${material.unit}`}
                      </li>
                    ))
                  }
                </ol>
              </Col>
            </Row>
            <p>{shortDescription}</p>
          </Col>
        </Row>
        <Row>
          <Col
            lg="6"
            className="mb-8"
            style={{ width: "30%", marginTop: "5%", background: "white" }}
          >
            <ul style={{ margin: "0", padding: "0", listStyleType: "none" }}>
              {
                steps && steps.length > 0 && steps.map((step, index) => (
                  <li key={index}>
                    <span style={{ fontSize: "18px" }}>
                      <b>Bước {step.stepNumber}</b>
                      <p>{step.description}</p>
                    </span>
                    <br />>
                    <img
                      src={`${API_URL}/${step.image}`}
                      style={{
                        width: "60%",
                        marginLeft: "20%",
                        marginRight: "20%",
                        marginTop: "30px",
                        marginBottom: "30px"
                      }}
                    />
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
        <div className='row'>

          {
            totalRecords && totalRecords > 0 && <ListRecipe
                                  title='Công thức liên quan'
                                  isShowFull={true}
                                  recipes={recipes}
                                />
          }

        </div>
      </Container>
    </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentRecipe: state.currentRecipeReducer,
    relatedRecipe: state.relatedRecipeReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clean: () => {
      dispatch(recipeActions.clean())
    },
    fetchRecipe: (_id) => {
      dispatch(recipeActions.fetchRecipe(_id))
    },
    getRelatedRecipe: (_id) => {
      dispatch(recipeActions.getRelatedRecipe(_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailPage)