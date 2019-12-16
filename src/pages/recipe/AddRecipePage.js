import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddBasicInfo from './AddBasicInfo'
import AddMaterial from './AddMaterial'
import AddStep from './AddStep'
import AddFinish from './AddFinish'
import HomaPage from '../HomePage'

const AddRecipePage = () => {
  let { basicInfoSuccess, materialSuccess, stepSuccess, finishSuccess } = useSelector(state => state.recipeReducer)

  let [state, setState] = useState({
    type: 1
  })

  const showAddRecipePage = (type) => {
    switch(type) {
      case 1:
        return <AddBasicInfo />
      case 2:
        // return <AddFinish />
        return <AddMaterial />
      case 3:
        return <AddStep />
      case 4:
        return <AddFinish />
      case 5:
        return <HomaPage />
      default:
        console.log('done')
        return <AddBasicInfo />
    }
  }

  useEffect(()=>{
    let type = finishSuccess ? 5 : (stepSuccess ? 4 : (materialSuccess ? 3 : (basicInfoSuccess ? 2 : 1)))
    setState({ type })

  }, [basicInfoSuccess, materialSuccess, stepSuccess, finishSuccess])

  return (
    <>
      {showAddRecipePage(state.type)}
    </>
  )
}

export default AddRecipePage