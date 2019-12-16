import React, { useState,useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddBasicInfo from '../../pages/recipe/AddBasicInfo'
import AddMaterial from '../../pages/recipe/AddMaterial'
import AddStep from '../../pages/recipe/AddStep'
import AddFinish from '../../pages/recipe/AddFinish'

const AddRecipeContainer = () => {
  let { 
    basicInfoSuccess, 
    basicInfoRequesting,
    materialSuccess, 
    stepSuccess, 
    finishSuccess ,
    recipe
  } = useSelector(state => state.recipeReducer)

  let [state, setState] = useState({
    type: 1
  })

  const showAddRecipePage = (type) => {
    switch(type) {
      case 1:
        return <AddBasicInfo basicInfoRequesting={basicInfoRequesting} />
      case 2:
        return <AddMaterial />
      case 3:
        return <AddStep />
      case 4:
        return <AddFinish />
      case 5:
        let { _id } = recipe
        return <Redirect to={`/recipe/${_id}`} />
      default:
        return <AddBasicInfo />
    }
  }

  useEffect(() => {
    let type = finishSuccess ? (5) : (stepSuccess ? 4 : (materialSuccess ? 3 : (basicInfoSuccess ? 2 : 1)))
    setState({ type })

  }, [basicInfoSuccess, materialSuccess, stepSuccess, finishSuccess])

  return (
    <>
      {showAddRecipePage(state.type)}
    </>
  )
}

export default AddRecipeContainer