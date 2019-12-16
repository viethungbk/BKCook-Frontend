import React from 'react'
import { LOADING_URL } from '../constants/Config'

const Loading = ({ isLoading }) => {
  return (
    <>
      {
        isLoading && <img src={LOADING_URL} />
      }
    </>
    
  )
}

export default Loading