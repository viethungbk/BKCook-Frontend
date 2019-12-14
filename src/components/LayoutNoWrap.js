import React from 'react'
import AlertContainer from '../containers/AlertContainer'

const LayoutNoWrap = ({ children }) => (
  <div>
    <AlertContainer />
    {children}
  </div>
)

export default LayoutNoWrap